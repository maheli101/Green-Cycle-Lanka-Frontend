import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import RequestImage from '../../assets/SupplierPhotos/Request.jpg';

function RequestForm() {
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
        <img
          src={RequestImage}
          alt="Request Image"
          style={{
            width: '100%',
            maxWidth: '150px', 
            objectFit: 'cover',
            marginBottom: '30px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <h3 style={{ color: 'green', textAlign: 'center', marginBottom: '30px' }}>Pickup Status</h3>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" defaultValue="Anu Ranasinghe" disabled />
          </Form.Group>
          <Form.Group controlId="formBasicType">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" disabled>
              <option>Plastic</option>
              <option>Metal</option>
              <option>Glass</option>
              <option>Paper</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="20kg" disabled />
          </Form.Group>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="178/56 Jayawardanapura" disabled />
          </Form.Group>
          <div style={{ textAlign: 'center', color: '#0000FF', marginTop: '20px' }}>
            We Are Processing Your Request
          </div>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            View Pickup Request Details In Your User Account
          </p>
          <Row className="justify-content-center">
            <Col xs={6} md={4}>
              <Button variant="primary" className="rounded-pill w-100 mb-3 mb-md-0">
                Go To User Account
              </Button>
            </Col>
            <Col xs={6} md={4}>
              <Button variant="success" className="rounded-pill w-100">
                Ok
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default RequestForm;
