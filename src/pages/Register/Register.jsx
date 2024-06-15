import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Importing necessary components from React Bootstrap
import registerBCK from "../../assets/registerphotos/Regback.jpeg"; // Importing background image for registration page
import { Link, useNavigate } from "react-router-dom"; // Importing Link and useNavigate hook from React Router
import { post } from "../../Api/Axios.js"; // Importing custom post function from Axios API module
import Upload from "../../utilities/upload.js"; // Importing file upload utility function
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS for toast notifications
import { toast, ToastContainer } from "react-toastify"; // Importing toast notifications from Toastify

export default function Register() {
  const navigate = useNavigate(); // Hook from React Router for navigation
  const [formData, setFormData] = useState({
    // State hook to manage form data
    name: "",
    email: "",
    contactNumber: "",
    NIC: "",
    password: "",
    type: "User", // Default type is "User"
    profilePicture: "null", // Default profile picture placeholder
  });
  const [response, setResponse] = useState("No response yet"); // State hook to manage response message
  const [errors, setErrors] = useState({}); // State hook to manage form validation errors
  const [file, setFile] = useState(null); // State hook to manage uploaded file (profile picture)

  // Validation functions
  const validateName = (name) => {
    const regex = /^[a-zA-Z ]*$/; // Regular expression to allow only letters and spaces
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating email format
    return regex.test(email);
  };

  const validateContactNumber = (contactNumber) => {
    const regex = /^\d{10}$/; // Regular expression to match exactly 10 digits
    return regex.test(contactNumber);
  };

  const validateNIC = (NIC) => {
    const regex = /^\d{12}$/; // Regular expression to match exactly 12 digits
    return regex.test(NIC);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Password must be at least 6 characters long
  };

  // Function to handle input changes in the form
  const handleChange = (e) => {
    const { name, value, files } = e.target; // Destructure name, value, and files from event target
    let newErrors = { ...errors }; // Create a copy of errors state object

    switch (name) {
      case "name":
        newErrors.name = validateName(value)
          ? ""
          : "Name should contain only letters"; // Validate name field
        break;
      case "email":
        newErrors.email = validateEmail(value)
          ? ""
          : "Please enter a valid email"; // Validate email field
        break;
      case "contactNumber":
        newErrors.contactNumber = validateContactNumber(value)
          ? ""
          : "Contact number should contain exactly 10 numbers"; // Validate contact number field
        break;
      case "NIC":
        newErrors.NIC = validateNIC(value)
          ? ""
          : "NIC should contain exactly 12 numbers"; // Validate NIC field
        break;
      case "password":
        newErrors.password = validatePassword(value)
          ? ""
          : "Password should be at least 6 characters"; // Validate password field
        break;
      default:
        break;
    }

    setErrors(newErrors); // Update errors state with newErrors object
    setFormData({ ...formData, [name]: value }); // Update formData state with new value
    if (name === "profilePicture") {
      setFile(files[0]); // Set file state with uploaded file (profile picture)
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!file) {
      toast.error("please upload a picture"); // Display error toast if no picture is uploaded
      return;
    }

    let url = "";
    try {
      url = await Upload(file); // Upload file (profile picture) and get URL
    } catch (err) {
      toast.error("Can't upload files"); // Display error toast if file upload fails
      return;
    }

    try {
      const response = await post("http://localhost:8000/user/postUser", {
        ...formData,
        profilePicture: url,
      });
      setResponse(response.data); // Set response message state with data from API response

      toast.success(response.message); // Display success toast with message

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        NIC: "",
        password: "",
        type: "User",
        profilePicture: " ", // Clear profile picture field after submission
      });

      // Delay navigation for 3 seconds
      setTimeout(() => {
        navigate("/login"); // Navigate to login page after 3 seconds
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      console.log(error);
      toast.error("e-mail and NIC must be unique"); // Display error toast for unique email and NIC constraint
    }
  };

  // JSX returned by the component
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <ToastContainer position="top-center" />{" "}
      {/* Toast notification container */}
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
            {" "}
            {/* Form component with onSubmit event handler */}
            <h1 className="mb-4">Register Form</h1>{" "}
            {/* Heading for the registration form */}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                isInvalid={!!errors.name} // Display invalid state if there are errors
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>{" "}
              {/* Display error message */}
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
                isInvalid={!!errors.email} // Display invalid state if there are errors
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>{" "}
              {/* Display error message */}
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
                isInvalid={!!errors.contactNumber} // Display invalid state if there are errors
              />
              <Form.Control.Feedback type="invalid">
                {errors.contactNumber}
              </Form.Control.Feedback>{" "}
              {/* Display error message */}
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
                isInvalid={!!errors.NIC} // Display invalid state if there are errors
              />
              <Form.Control.Feedback type="invalid">
                {errors.NIC}
              </Form.Control.Feedback>{" "}
              {/* Display error message */}
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
                isInvalid={!!errors.password} // Display invalid state if there are errors
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>{" "}
              {/* Display error message */}
            </Form.Group>
            <Form.Group controlId="formUserType" className="mb-4">
              <Form.Label>User Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="Driver" name="Driver">
                  Driver
                </option>{" "}
                {/* Option for Driver */}
                <option value="User" name="User">
                  User
                </option>{" "}
                {/* Option for User */}
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
