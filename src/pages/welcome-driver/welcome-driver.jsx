import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundColor: '#ffffff' }}>
      <style>
        {`
          .welcome-container {
            background-color: #ffffff;
            height: 80%;
            width: 90%;
          }

          .welcome-content {
            background-color: #274e2a;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
            animation: fadein 2s;
            padding: 2rem;
          }

          .welcome-button {
            border-radius: 20px;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            animation: slidein 2s;
          }

          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slidein {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <Row className="justify-content-center w-100">
        <Col xs={11} sm={10} md={8} lg={6} className="welcome-container">
          <div className="text-center p-5 mb-4 welcome-content">
            <h1 className="display-4 mb-4 text-white">Welcome to Green Cycle Lanka!</h1>
            <h2 className="h5 text-white mb-3">Your eco-friendly journey begins here. Manage routes, stay updated, and help create a greener tomorrow—all from this hub.</h2>
            <h2 className="h5 text-white mb-3">Let's pedal towards a sustainable future, one cycle at a time!</h2>
            <h2 className="h5 text-white mb-1">Warm regards,</h2>
            <h2 className="h5 text-white">Green Cycle Lanka Team</h2>
          </div>
          <div className="text-center">
            
            <Link to='/Pickup'> <Button className="btn-success welcome-button">Get Started</Button></Link>         
             </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
