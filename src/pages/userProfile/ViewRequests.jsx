import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewRequests() {
  const [requests, setRequests] = useState([]);
  const [editingRequest, setEditingRequest] = useState(null);
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

  const fetchRequests = async () => {
    try {
      console.log("run");
        const response = await axios.get(`http://localhost:8000/Request/getRequestsByUserId/${userId}`);
        setRequests(response.data);
    } catch (error) {
        console.error("Error fetching requests:", error);
        // Handle error appropriately, e.g., display a message to the user
    }
};

  const handleDelete = async (requestId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/Request/deleteRequest/${requestId}`
      );
      console.log(response.data);
      // If successful, remove the deleted request from the state
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== requestId)
      );
      setDeleteSuccess(true);
    } catch (error) {
      console.error("Error deleting request:", error);
      // Handle error appropriately, e.g., display a message to the user
    }
  };

  const handleEdit = (requestId) => {
    setEditingRequest(requestId);
    const requestToEdit = requests.find((request) => request._id === requestId);
    setEditedMaterial(requestToEdit.material);
    setEditedAmount(requestToEdit.amount);
    setEditedTown(requestToEdit.town);
    setAmountError("");
    setUpdateSuccess(false);
    setDeleteSuccess(false);
  };

  const handleSave = async (requestId) => {
    if (editedAmount < 10) {
      setAmountError("Amount should be at least 10 kg.");
      return;
    }

    try {
      await axios.post(`http://localhost:8000/Request/updateRequest/${requestId}`, {
        material: editedMaterial,
        amount: editedAmount,
        town: editedTown,
      });
      // Update the requests list after successful update
      fetchRequests();
      // Reset editing state
      setEditingRequest(null);
      setUpdateSuccess(true);
      setDeleteSuccess(false);
    } catch (error) {
      console.error("Error updating request:", error);
      // Handle error appropriately, e.g., display a message to the user
    }
  };

  const handleCancelEdit = () => {
    // Reset editing state
    setEditingRequest(null);
    setAmountError("");
    setUpdateSuccess(false);
    setDeleteSuccess(false);
  };

  useEffect(() => {
    fetchRequests();
  }, []); // Add dependencies if necessary

  return (
    <div className="container">
      <h1
        style={{ marginTop: "40px", marginBottom: "30px" }}
        className="text-success text-center"
      >
        Your Requests
      </h1>
      <h6
        style={{ marginTop: "10px", marginBottom: "30px" }}
        className="text-success text-center"
      >
        You can view your current requests here. Feel free to update or delete any
        requests that haven't been confirmed yet.
      </h6>
      {updateSuccess && (
        <div className="alert alert-success" role="alert">
          Request successfully updated!
        </div>
      )}

      {deleteSuccess && (
        <div className="alert alert-danger" role="alert">
          Request successfully deleted!
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="bg-success text-white">
            <tr>
              <th>Request ID</th>
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
            {requests.map((request) => (
              <tr key={request._id}>
                <td>{request._id}</td>
                <td>
                  {editingRequest === request._id ? (
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
                    request.material
                  )}
                </td>
                <td>
                  {editingRequest === request._id ? (
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
                    request.amount
                  )}
                </td>
                <td>
                  {editingRequest === request._id ? (
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
                    request.town
                  )}
                </td>
                <td>{request.status}</td>
                <td>{request.createdAt}</td>
                <td>{request.updatedAt}</td>
                <td>
                  {editingRequest === request._id ? (
                    <>
                      <button
                        style={{ marginRight: "7px" }}
                        className="btn btn-primary"
                        onClick={() => handleSave(request._id)}
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
                      {request.status === "pending" && (
                        <>
                          <button
                            style={{ marginRight: "7px" }}
                            className="btn btn-primary"
                            onClick={() => handleEdit(request._id)}
                          >
                            Edit
                          </button>
                          <button
                            style={{ marginRight: "7px" }}
                            className="btn btn-danger"
                            onClick={() => handleDelete(request._id)}
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

export default ViewRequests;
