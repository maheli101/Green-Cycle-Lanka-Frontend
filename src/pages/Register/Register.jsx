import { useState } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import registerBCK from "../../assets/registerphotos/Regback.jpeg";
import { Link } from "react-router-dom";
import { post } from "../../Api/Axios.js";
import Upload from "../../utilities/upload.js";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    NIC: "",
    password: "",
    type: "User",
    profilePicture :"null"
  });
  const [response, setResponse] = useState("No response yet");
  const [errors, setErrors] = useState({});
  const[file,setFile]=useState(null)

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]*$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateContactNumber = (contactNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(contactNumber);
  };

  const validateNIC = (NIC) => {
    const regex = /^\d{12}$/;
    return regex.test(NIC);
  };

  const handleChange = (e) => {
    const { name, value,files } = e.target;
    let newErrors = { ...errors };

    switch (name) {
      case "name":
        newErrors.name = validateName(value) ? "" : "Name should contain only letters";
        break;
      case "email":
        newErrors.email = validateEmail(value) ? "" : "Please enter a valid email";
        break;
      case "contactNumber":
        newErrors.contactNumber = validateContactNumber(value)
          ? ""
          : "Contact number should contain exactly 10 numbers";
        break;
      case "NIC":
        newErrors.NIC = validateNIC(value) ? "" : "NIC should contain exactly 12 numbers";
        break;
      default:
        break;
    }
    console.log(formData)
    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
    if (name === "profilePicture") {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e) => {    //function to form submit
    e.preventDefault();
   
    if (!file) {
      alert("Please upload a profile picture");
      return;
    }

    console.log(formData)

      let url="";
    try{
     
      url=await Upload(file)
    }catch(err){
          console.log("Can't upload files")
    }

    console.log(formData)
    console.log(url)
    try {
       const response = await post('http://localhost:8000/user/postUser',{...formData,profilePicture:url});
      
      setResponse(response)
      console.log(response)
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        NIC: "",
        password: "",
        type: "",
        profilePicture :""

      });
      // Redirect to login page after successful registration
     
    }catch (error) {
      console.log(error);
      console.log("can't send data from frontend")
      
    }
  
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
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
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
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
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
                isInvalid={!!errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
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
                isInvalid={!!errors.NIC}
              />
              <Form.Control.Feedback type="invalid">{errors.NIC}</Form.Control.Feedback>
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
                required
              >
                <option value="Driver" name="Driver">Driver</option>
                <option value="User" name="User">User</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formProfilePicture" className="mb-4">
              <Form.Label>Upload Your Photo</Form.Label>
              <Form.Control
                type="file"
                name="profilePicture"
                onChange={handleChange}
              />
            </Form.Group>
            
            <Button type="submit" variant="primary" className="me-3" >
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
