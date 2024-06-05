import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <>
      <div>
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Material</th>
              <th>Amount</th>
              <th>Town</th>
             
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.user_id ? order.user_id.name : "N/A"}</td>
                <td>{order.material}</td>
                <td>{order.amount}</td>
                <td>{order.town}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Order;
