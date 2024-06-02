import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import homeImage from '../../assets/img/homeImage.jpg';



function Dashboard() {
  return (
    <div>
      <main>
        <img style={{width:"100%"}} src={homeImage} alt="homeImage" className="img-fluid"  />

        <Container className="my-5">
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-success">Welcome To Green Cycle Lanka!</h2>
              <p>
                Here, Suppliers, Buyers, Yard Management, and Drivers Unite For Seamless Supply Chain Integration. Our Innovative Platform Connects All Key Stakeholders, Transforming How Recyclable Materials Are Traded, Transported, And Processed.
              </p>
              <p>
                Buyers Effortlessly Discover, Negotiate, and Secure High-Quality, Environmentally Friendly Materials. Suppliers Efficiently Expand Their Market Reach, Maximizing Revenue While Reducing Waste.
              </p>
              <p>
                Embrace The Future of Sustainable Material Management With Us Today, Where Green Cycle Links Every Step In The Recycling Ecosystem, From Supplier Production To Yard Collection.
              </p>
            </Col>
          </Row>

          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-success">Our Services</h2>
              <p>
                Supplier Portal: Connect with trusted suppliers to responsibly dispose of waste materials and contribute to a cleaner environment.
              </p>
              <Link to="/supplier">
                <Button variant="success" className="mb-3">Go to Supplier Interface</Button>
              </Link>
              <p>
                Buyer Marketplace: Explore a wide range of recycled products and materials sourced from reliable suppliers.
              </p>
              <Link to="/buyer">
                <Button variant="success" className="mb-3">Go to Buyer Interface</Button>
              </Link>
            </Col>
          </Row>

          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-success">Join Us in Building a Sustainable Future</h2>
              <p>
                Join our community of environmentally-conscious businesses and individuals committed to reducing waste and promoting sustainability. Together, we can make a positive impact on the planet while driving innovation in waste management practices.
              </p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col>
              <h2 className="text-success">Ready to take the first step towards a greener future?</h2>
              <p>
                Sign up now to access our platform and start making a difference!
              </p>
              <Link to="/signup">
                <Button variant="success" size="lg">Sign Up</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
