// Import necessary hooks and components from React and third-party libraries
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import registerBCK from "../../assets/registerphotos/Regback.jpeg"; // Import an image asset
import { Link, useNavigate } from "react-router-dom"; // Import hooks from react-router-dom for navigation and linking
import { post } from "../../Api/Axios.js"; // Import the post function for making API calls
import Upload from "../../utilities/upload.js"; // Import the Upload function for handling file uploads
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS for notifications
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components for showing notifications

// Define the Register component as a functional component
export default function Register() {
  const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

  // Initialize state for form data, response, validation errors, and file input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    NIC: "",
    password: "",
    type: "User",
    profilePicture: "null",
  });
  const [response, setResponse] = useState("No response yet");
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  // Validation functions for various form fields
  const validateName = (name) => {
    const regex = /^[a-zA-Z ]*$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateContactNumber = (contactNumber) => {
    const regex = /^0\d{9}$/; // Regex for a number starting with 0 and exactly 10 digits
    return regex.test(contactNumber);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const validateNIC = (NIC) => {
    const regex = /^(\d{9}[VvXx]|[0-9]{12})$/; // Regex for Sri Lankan NIC format
    return regex.test(NIC);
  };

  // Function to handle input changes in the form
  const handleChange = (e) => {
    const { name, value, files } = e.target; // Destructure name, value, and files from the event target
    let newErrors = { ...errors }; // Create a copy of the current errors state

    // Validate the input based on its name and update the errors state accordingly
    switch (name) {
      case "name":
        newErrors.name = validateName(value)
          ? ""
          : "Name should contain only letters";
        break;
      case "email":
        newErrors.email = validateEmail(value)
          ? ""
          : "Please enter a valid email";
        break;
      case "contactNumber":
        newErrors.contactNumber = validateContactNumber(value)
          ? ""
          : "Contact number should start with 0 and contain exactly 10 numbers";
        break;
      case "NIC":
        newErrors.NIC = validateNIC(value)
          ? ""
          : "Please enter a valid Sri Lankan NIC";
        break;
      case "password":
        newErrors.password = validatePassword(value)
          ? ""
          : "Password should be at least 6 characters long, contain one uppercase letter, one number, and one special character";
        break;
      default:
        break;
    }

    setErrors(newErrors); // Update the errors state with new errors
    setFormData({ ...formData, [name]: value }); // Update the form data state with the new input value

    // If the profile picture field is being updated, store the file
    if (name === "profilePicture") {
      setFile(files[0]);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if a file is uploaded, if not show an error toast
    if (!file) {
      toast.error("Please upload a picture");
      return;
    }

    let url = "";
    try {
      url = await Upload(file); // Attempt to upload the file and get the URL
    } catch (err) {
      toast.error("Can't upload files"); // Show error toast if file upload fails
      return;
    }

    try {
      // Make a POST request to register the user
      const response = await post("http://localhost:8000/user/postUser", {
        ...formData,
        profilePicture: url,
      });
      setResponse(response.data); // Update the response state with the server response

      toast.success(response.message); // Show success toast notification

      // Reset form data after successful registration
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        NIC: "",
        password: "",
        type: "User",
        profilePicture: "",
      });

      // Redirect to login page after a delay
    
        navigate("/login");
     
    } catch (error) {
      console.log(error);
      toast.error("Email and NIC must be unique"); // Show error toast if registration fails
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <ToastContainer position="top-center" /> {/* Position the toast notifications */}
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
            {/* Form field for Name */}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                isInvalid={!!errors.name} // Show validation error if name is invalid
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Form field for Email */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                isInvalid={!!errors.email} // Show validation error if email is invalid
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Form field for Contact Number */}
            <Form.Group controlId="formContactNumber" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                isInvalid={!!errors.contactNumber} // Show validation error if contact number is invalid
              />
              <Form.Control.Feedback type="invalid">
                {errors.contactNumber}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Form field for NIC */}
            <Form.Group controlId="formNIC" className="mb-3">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                placeholder="NIC"
                name="NIC"
                value={formData.NIC}
                onChange={handleChange}
                required
                isInvalid={!!errors.NIC} // Show validation error if NIC is invalid
              />
              <Form.Control.Feedback type="invalid">
                {errors.NIC}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Form field for Password */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                isInvalid={!!errors.password} // Show validation error if password is invalid
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Form field for User Type */}
            <Form.Group controlId="formUserType" className="mb-4">
              <Form.Label>User Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="Driver">Driver</option>
                <option value="User">User</option>
              </Form.Select>
            </Form.Group>
            {/* Form field for Profile Picture */}
            <Form.Group controlId="formProfilePicture" className="mb-4">
              <Form.Label>Upload Your Photo</Form.Label>
              <Form.Control
                type="file"
                name="profilePicture"
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* Submit button */}
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
