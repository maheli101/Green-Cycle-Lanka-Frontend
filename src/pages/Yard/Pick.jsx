import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pick() {
  const [request, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Request/getRequests');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <>
      <div>
        <h2>Pick up Requests</h2>
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
            {request.map((request, index) => (
              <tr key={index}>
                <td>{request.user_id ? request.user_id.name : "N/A"}</td>
                <td>{request.material}</td>
                <td>{request.amount}</td>
                <td>{request.town}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Pick;
