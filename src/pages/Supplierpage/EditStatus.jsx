import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function RequestForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Anu Ranasinghe',
    type: 'Plastic',
    amount: '20kg',
    address: '178/56 Jayawardanapura',
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Saved:', formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Implement delete logic here
    console.log('Deleted');
  };

  return (
    <Container
      fluid
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 50px)',
        padding: '20px',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          backgroundSize: 'cover',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'left',
          maxWidth: '700px',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
       
        <h3 style={{ color: 'green', textAlign: 'center', marginBottom: '30px' }}>Pickup Status</h3>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formBasicType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option>Plastic</option>
              <option>Metal</option>
              <option>Glass</option>
              <option>Paper</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <div style={{ textAlign: 'center', color: '#0000FF', marginTop: '20px' }}>
            We Are Processing Your Request
          </div>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            View Pickup Request Details In Your User Account
          </p>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Button variant="primary" className="rounded-pill mb-3 w-50">
              Go To User Account
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {isEditing ? (
              <>
                <Button variant="success" className="rounded-pill w-25 mb-2 me-2" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="danger" className="rounded-pill w-25 mb-2" onClick={handleDelete}>
                  Delete
                </Button>
              </>
            ) : (
              <Button variant="success" className="rounded-pill w-25 mb-2" onClick={handleEditToggle}>
                Edit
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default RequestForm;
