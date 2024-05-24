import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import aboutUsImg from "../../assets/img/aboutUsImg.jpg";

function BorderExample() {
  const cardStyle = {
    width: "18rem",
    maxHeight : "350px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginTop:"30px",
    
    borderRadius: "10px",
    marginBottom: "30px",
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  };

  const cardHeaderStyle = {
    backgroundColor: "#d8e8d8",
    color: "#388e3c",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <Container>
      <h2
        className="text-success"
        style={{ textAlign: "center", marginTop: "40px" }}
      >
        About Us and Our Services
      </h2>
      <hr />

      <Row style={{ marginTop: "60px" }} className="justify-content-center">
        <Col md={4} sm={12} className="d-flex justify-content-center">
          <Card style={cardStyle}>
            <Card.Header style={cardHeaderStyle}>Buy</Card.Header>
            <Card.Body>
              <Card.Text>
                Explore our Buyer Management service to effortlessly select and
                purchase recycled items of your choice. Browse through our
                diverse range of products, specify quantities, and complete your
                purchase with ease. Join us in our mission for a greener planet!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={7} className="d-flex justify-content-center">
          <img
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "10px",
            
            }}
            src={aboutUsImg}
            alt="About Us"
          />
        </Col>

        <Col md={4} sm={12} className="d-flex justify-content-center">
          <Card style={cardStyle}>
            <Card.Header style={cardHeaderStyle}>Transport</Card.Header>
            <Card.Body>
              <Card.Text>
                Getting your waste safely from point A to point B is crucial.
                With our Transportation Services, you can rest easy knowing your
                waste is in good hands. Our reliable transportation solutions
                are tailored to your needs, ensuring prompt and secure disposal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "60px" }} className="justify-content-center">
        <Col md={4} sm={12} className="d-flex justify-content-center">
          <Card style={cardStyle}>
            <Card.Header style={cardHeaderStyle}>Supply</Card.Header>
            <Card.Body>
              <Card.Text>
                Contribute to our recycling efforts by supplying us with
                recyclable materials through our Supplier Management service.
                Seamlessly connect with us to provide recyclable waste and
                support our eco-friendly initiatives. Together, let's make a
                positive impact on the environment
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="d-flex justify-content-center">
          <Card style={cardStyle}>
            <Card.Header style={cardHeaderStyle}>Join Us</Card.Header>
            <Card.Body>
              <Card.Text>
                joining our platform is easy and secure! Our User Registration
                system ensures a hassle-free signup process. Your data is safe
                with us, and our access control measures ensure only authorized
                users have access to your waste management system.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="d-flex justify-content-center">
          <Card style={cardStyle}>
            <Card.Header style={cardHeaderStyle}>Yard</Card.Header>
            <Card.Body>
              <Card.Text>
                Discover our Yard Management service to efficiently handle your
                recyclable materials. Our robust system ensures that you'll be
                notified as soon as your order is accepted. We manage your yard
                operations seamlessly, track your inventory, and coordinate
                logistics effortlessly. Join us in our mission for a greener
                planet and experience the future of sustainable yard management
                today!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

export default BorderExample;
