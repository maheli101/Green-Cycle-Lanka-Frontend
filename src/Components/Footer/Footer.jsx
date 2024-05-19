import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-success text-white text-center py-3" style={{  width: '100%' }}>
      <Container>
        <Row>
          <Col>
            <p className="mb-1"><strong>Address:</strong> 2303 23Fl Lee Garden Two, Galle Road, Sri Lanka</p>
            <p className="mb-1"><strong>E-mail:</strong> <a href="mailto:greencycleLanka@gmail.com" className="text-white">greencycleLanka@gmail.com</a></p>
            <p className="mb-1"><strong>Phone No:</strong> <a href="tel:+940703892337" className="text-white">+94 0703892337</a></p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
};

export default Footer;
