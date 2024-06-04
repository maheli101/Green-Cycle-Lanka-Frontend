import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import supplierImg from '../../assets/img/supplierImg.jpg';
import categoryImg1 from '../../assets/img/categoryImg1.jpg'; // Import category images
import categoryImg2 from '../../assets/img/categoryImg2.jpg';
import categoryImg3 from '../../assets/img/categoryImg3.jpg';
import categoryImg4 from '../../assets/img/categoryImg4.jpg';

function ContainerFluidExample() {
  const sectionStyle = {
    backgroundColor: "#d8e8d8", // Light sage green color
    borderRadius: "20px", // Rounded corners
    padding: "15px", // Padding
    textAlign: "center" // Center text
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer"
  };

  const imageStyle = {
    width: "250px",
    height: "250px",
    
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col >
          <h4 style={sectionStyle} className="text-success">Welcome to the Supplier Interface Of Green Cycle Lanka!</h4>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
          <img style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }} src={supplierImg} alt="supplierImg" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col >
          <h4 style={sectionStyle} className="text-success">Select your category from below!</h4>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col xs={6} sm={3} >
          <button style={buttonStyle} onClick={() => alert("Category 1 clicked!")}>
            <img src={categoryImg1} alt="Category 1" style={imageStyle} />
          </button>
        </Col>
        <Col xs={6} sm={3} >
          <button style={buttonStyle} onClick={() => alert("Category 2 clicked!")}>
            <img src={categoryImg2} alt="Category 2" style={imageStyle} />
          </button>
        </Col>
        <Col xs={6} sm={3} >
          <button style={buttonStyle} onClick={() => alert("Category 3 clicked!")}>
            <img src={categoryImg3} alt="Category 3" style={imageStyle} />
          </button>
        </Col>
        <Col xs={6} sm={3} >
          
          <button style={buttonStyle} onClick={() => alert("Category 4 clicked!")}>
            <img src={categoryImg4} alt="Category 4" style={imageStyle} />
          </button>
          
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;
