import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import registerBCK from "../../assets/registerphotos/Regback.jpeg";
import { Link } from "react-router-dom";
import { post } from "../../Api/Axios.js";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    NIC: "",
    password: "",
    type: "Driver",
  });
  const [response, setResponse] = useState("No response yet");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      console.log(formData)
      
      const response = await post("http://localhost:8000/user/postUser", formData);   //response ekata link eken wena tika gannawa
      console.log(response);
      setResponse(response);
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        NIC: "",
        password: "",
        type: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        
        <Col md={6}>
          <img
            src={registerBCK}
            alt="Register Background"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h1 className="mb-4">Register Form</h1>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formContactNumber" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNIC" className="mb-3">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                placeholder="NIC"
                name="NIC"
                value={formData.NIC}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formUserType" className="mb-4">
              <Form.Label>User Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Driver">Driver</option>
                <option value="User">User</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary" className="me-3">
              Register
            </Button>
            <Link to="/login" className="text-decoration-none">
              Already have an account? Sign in
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}