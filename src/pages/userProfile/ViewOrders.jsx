import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [editedMaterial, setEditedMaterial] = useState("");
  const [editedAmount, setEditedAmount] = useState("");
  const [editedTown, setEditedTown] = useState("");
  const [amountError, setAmountError] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const townsInColombo = [
    "Angoda",
    "Athurugiriya",
    "Avissawella",
    "Battaramulla",
    "Battaramulla South",
    "Biyagama",
    "Borella",
    "Colombo 1",
    "Colombo 2",
    "Colombo 3",
    "Colombo 4",
    "Colombo 5",
    "Colombo 6",
    "Colombo 7",
    "Colombo 8",
    "Colombo 9",
    "Colombo 10",
    "Colombo 11",
    "Colombo 12",
    "Colombo 13",
    "Colombo 14",
    "Colombo 15",
    "Dalugama",
    "Dehiwala",
    "Hanwella",
    "Hokandara",
    "Homagama",
    "Kaduwela",
    "Kalubowila",
    "Kesbewa",
    "Kiribathgoda",
    "Kaduwela",
    "Kotte",
    "Maharagama",
    "Malabe",
    "Moratuwa",
    "Mount Lavinia",
    "Mulleriyawa",
    "Nawala",
    "Nugegoda",
    "Pannipitiya",
    "Piliyandala",
    "Rajagiriya",
    "Ratmalana",
    "Sri Jayawardenepura Kotte",
    "Thalawathugoda",
    "Wellampitiya",
  ];

  const userId = localStorage.getItem("userId");

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/Order/getOrdersByUserId/${userId}`
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      // Handle error appropriately, e.g., display a message to the user
    }
  };

  const handleDelete = async (orderId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/Order/deleteOrder/${orderId}`
      );
      console.log(response.data);
      // If successful, remove the deleted order from the state
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
      setDeleteSuccess(true);
    } catch (error) {
      console.error("Error deleting order:", error);
      // Handle error appropriately, e.g., display a message to the user
    }
  };

  const handleEdit = (orderId) => {
    setEditingOrder(orderId);
    const orderToEdit = orders.find((order) => order._id === orderId);
    setEditedMaterial(orderToEdit.material);
    setEditedAmount(orderToEdit.amount);
    setEditedTown(orderToEdit.town);
    setAmountError("");
    setUpdateSuccess(false);
    setDeleteSuccess(false);
  };

  const handleSave = async (orderId) => {
    if (editedAmount < 10) {
      setAmountError("Amount should be at least 10 kg.");
      return;
    }

    try {
      await axios.post(`http://localhost:8000/Order/updateOrder/${orderId}`, {
        material: editedMaterial,
        amount: editedAmount,
        town: editedTown,
      });
      // Update the orders list after successful update
      fetchOrders();
      // Reset editing state
      setEditingOrder(null);
      setUpdateSuccess(true);
      setDeleteSuccess(false);
    } catch (error) {
      console.error("Error updating order:", error);
      // Handle error appropriately, e.g., display a message to the user
    }
  };

  const handleCancelEdit = () => {
    // Reset editing state
    setEditingOrder(null);
    setAmountError("");
    setUpdateSuccess(false);
    setDeleteSuccess(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []); // Add dependencies if necessary

  return (
    <div className="container">
      <h1
        style={{ marginTop: "40px", marginBottom: "30px" }}
        className="text-success text-center"
      >
        Your Orders
      </h1>
      <h6
        style={{ marginTop: "10px", marginBottom: "30px" }}
        className="text-success text-center"
      >
        You can view your current orders here. Feel free to update or delete any
        orders that haven't been confirmed yet.
      </h6>
      {updateSuccess && (
        <div className="alert alert-success" role="alert">
          Order successfully updated!
        </div>
      )}

      {deleteSuccess && (
        <div className="alert alert-danger" role="alert">
          Order successfully deleted!
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="bg-success text-white">
            <tr>
              <th>Order ID</th>
              <th>Material</th>
              <th>Amount (kg)</th>
              <th>Town</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  {editingOrder === order._id ? (
                    <select
                      value={editedMaterial}
                      onChange={(e) => setEditedMaterial(e.target.value)}
                    >
                      <option value="plastic">Plastic</option>
                      <option value="metal">Metal</option>
                      <option value="paper">Paper</option>
                      <option value="glass">Glass</option>
                    </select>
                  ) : (
                    order.material
                  )}
                </td>
                <td>
                  {editingOrder === order._id ? (
                    <div>
                      <input
                        type="number"
                        value={editedAmount}
                        onChange={(e) => setEditedAmount(e.target.value)}
                        min="10"
                      />
                      {amountError && (
                        <div className="text-danger">{amountError}</div>
                      )}
                    </div>
                  ) : (
                    order.amount
                  )}
                </td>
                <td>
                  {editingOrder === order._id ? (
                    <select
                      value={editedTown}
                      onChange={(e) => setEditedTown(e.target.value)}
                    >
                      {townsInColombo.map((town, index) => (
                        <option key={index} value={town}>
                          {town}
                        </option>
                      ))}
                    </select>
                  ) : (
                    order.town
                  )}
                </td>
                <td>{order.status}</td>
                <td>{order.createdAt}</td>
                <td>{order.updatedAt}</td>
                <td>
                  {editingOrder === order._id ? (
                    <>
                      <button
                        style={{ marginRight: "7px" }}
                        className="btn btn-primary"
                        onClick={() => handleSave(order._id)}
                      >
                        Save
                      </button>
                      <button
                        style={{ marginRight: "7px" }}
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      {order.status === "pending" && (
                        <>
                          <button
                            style={{ marginRight: "7px" }}
                            className="btn btn-primary"
                            onClick={() => handleEdit(order._id)}
                          >
                            Edit
                          </button>
                          <button
                            style={{ marginRight: "7px" }}
                            className="btn btn-danger"
                            onClick={() => handleDelete(order._id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrders;
