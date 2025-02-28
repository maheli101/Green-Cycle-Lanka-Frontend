import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Mahimi from '../../assets/Photos/pic1.jpg';

const YourComponent = () => {
  return (
    <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
      <Col xs={12} md={6}>
        <img 
          src={Mahimi} 
          alt="Yard Management" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </Col>
      <Col xs={12} md={6}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%', 
            padding: '10px'
          }}
        >
          <div className="container text-center" style={{ maxWidth: '80%' }}>
            <h2>Yard Management System</h2>
            <br/>
            <p>Welcome to the Yard Management System. This platform helps you efficiently manage yard operations through the following features:</p>
            <ul className="text-start">
              <li><strong>Pick-Up Requests:</strong> Track and handle all pick-up requests.</li>
              <li><strong>Order Requests:</strong> Manage and monitor all orders.</li>
              <li><strong>Stock Update:</strong> Keep your inventory data current.</li>
            </ul>
            <p>Use the buttons below to navigate and manage your yard operations effectively.</p>
          </div>
          
          <div className="d-flex flex-column align-items-center w-100">
            <Link to="/pick" style={{ width: '80%' }}>
              <Button className="btn btn-warning text-dark mt-2 mb-2" style={{ fontSize: '20px', width: '100%' }}>
                Pick-Up Requests
              </Button>
            </Link>
            <Link to="/order" style={{ width: '80%' }}>
              <Button className="btn btn-warning text-dark mt-2 mb-2" style={{ fontSize: '20px', width: '100%' }}>
                Order Requests
              </Button>
            </Link>
            <Link to="/update" style={{ width: '80%' }}>
              <Button className="btn btn-warning text-dark mt-2 mb-2" style={{ fontSize: '20px', width: '100%' }}>
                Stock Update
              </Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default YourComponent;
