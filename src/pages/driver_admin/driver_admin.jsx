import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function AdminTable() {
  // Sample data
  const [requests, setRequests] = useState([
    { id: 1, userId: 101, details: 'Request details 1' },
    { id: 2, userId: 102, details: 'Request details 2' },
    { id: 3, userId: 103, details: 'Request details 3' },
    // Add more data as needed
  ]);

  const handleButtonClick = (id) => {
    // Handle button click event here, you can use the 'id' to identify the row
    console.log("Button clicked for row with id:", id);
  };

  return (
    <Container className="mt-4">
      <style>
        {`
          @keyframes slideRight {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideLeft {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .slideRight {
            animation: slideRight 1s ease forwards;
          }

          .slideLeft {
            animation: slideLeft 1s ease forwards;
          }

          h2 {
            color: #274e2a;
          }

          thead {
            background-color: #d3f7dc;
          }

          .btn-custom {
            background-color: #4CAF50;
            border-color: #4CAF50;
            width: 200px;
          }
        `}
      </style>
      <h2 className="slideRight">Driver Admin</h2>
      <Table striped bordered hover className="slideLeft">
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Request Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.userId}</td>
              <td>{request.details}</td>
              <td className="d-flex justify-content-center">
                <Button className="btn-custom" onClick={() => handleButtonClick(request.id)}>CONFIRM</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminTable;
