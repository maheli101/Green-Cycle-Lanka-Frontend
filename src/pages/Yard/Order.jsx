import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/order/getOrders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/order/deleteOrder/${id}`);
      // After successful deletion, fetch the updated list of orders
      fetchOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        marginTop: '80px',
        backgroundColor: '#f2f2f2',
      }}
    >
      <div
        style={{
          backgroundColor: '#752121',
          width: '100%',
          maxWidth: '400px',
          margin: '20px auto',
          textAlign: 'center',
          borderRadius: '10px',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <h1>Order Requests</h1>
      </div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '30px',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '12px',
                textAlign: 'center',
                border: '2px solid white',
                backgroundColor: '#277521',
                color: 'white',
                fontSize: '20px',
              }}
            >
              User
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'center',
                border: '2px solid white',
                backgroundColor: '#277521',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Material
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'center',
                border: '2px solid white',
                backgroundColor: '#277521',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Amount
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'center',
                border: '2px solid white',
                backgroundColor: '#277521',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Town
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'center',
                border: '2px solid white',
                backgroundColor: '#277521',
                color: 'white',
                fontSize: '20px',
              }}
            ></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: '12px',
                  textAlign: 'center',
                  border: '2px solid white',
                  backgroundColor: '#abdf94',
                  fontSize: '18px',
                }}
              >
                {order.user_id ? order.user_id.name : 'N/A'}
              </td>
              <td
                style={{
                  padding: '12px',
                  textAlign: 'center',
                  border: '2px solid white',
                  backgroundColor: '#abdf94',
                  fontSize: '18px',
                }}
              >
                {order.material}
              </td>
              <td
                style={{
                  padding: '12px',
                  textAlign: 'center',
                  border: '2px solid white',
                  backgroundColor: '#abdf94',
                  fontSize: '18px',
                }}
              >
                {order.amount}
              </td>
              <td
                style={{
                  padding: '12px',
                  textAlign: 'center',
                  border: '2px solid white',
                  backgroundColor: '#abdf94',
                  fontSize: '18px',
                }}
              >
                {order.town}
              </td>
              <td
                style={{
                  padding: '12px',
                  textAlign: 'center',
                  border: '2px solid white',
                  backgroundColor: '#abdf94',
                  fontSize: '18px',
                }}
              >
                <button
                  style={{
                    backgroundColor: '#752121',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/yard">
        <button
          style={{
            backgroundColor: '#752121',
            color: 'white',
            width: '15%',
            border: 'none',
            borderRadius: '5px',
            padding: '8px 16px',
            cursor: 'pointer',
            float: 'right',
            marginRight: '1%',
            marginTop: '5%',
          }}
        >
          Back
        </button>
      </Link>
    </div>
  );
}

export default Order;
