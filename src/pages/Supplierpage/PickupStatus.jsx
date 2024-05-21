import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import requestImage from '../assets/RequestDetails.jpg'; 
class RequestForm extends React.Component {
  render() {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ backgroundSize: 'cover', padding: '20px', borderRadius: '8px', textAlign: 'left' }}>
         
          <img src={requestImage} alt="Request Image" style={{ width: '100%', marginBottom: '20px' }} />

          <h3 style={{ color: 'green', textAlign: 'center' }}>Request Details</h3>
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

            <div style={{ textAlign: 'center', color: '#0000FF' }}>We Are Processing Your Request</div>

            <p style={{ textAlign: 'center' }}>View Pickup Request Details In Your User Account</p>

            <Row>
              <Col>
                <Button variant="primary" className="rounded-pill">
                  Go To User Account
                </Button>
              </Col>
              <Col>
                <Button variant="success" className="rounded-pill">
                  Ok
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    );
  }
}

export default RequestForm;
