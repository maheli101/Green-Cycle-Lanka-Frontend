import { useState } from "react";
import { Row, Col, FloatingLabel, Form, Button, Alert } from "react-bootstrap"; // Importing necessary components from React Bootstrap
import Backphoto from "../../assets/loginPhotos/loginhome.jpeg"; // Importing background image
import { Link, useNavigate } from "react-router-dom"; // Importing Link and useNavigate hook from React Router
import axios from "axios"; // Importing axios for making HTTP requests

function LoginPage() {
  // State variables using useState hook
  const [email, setEmail] = useState(""); // State for email input field
  const [password, setPassword] = useState(""); // State for password input field
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State to manage loading state
  const navigate = useNavigate(); // Hook from React Router for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    setError(""); // Clear any previous error messages

    try {
      // Send a POST request to "/loginRoute" endpoint with email and password
      const response = await axios.post("/loginRoute", { email, password });
      console.log(response.data.isDriver);
      if (response.data.success) {
        // If login is successful:
        // Save user data to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userName', response.data.Name);
        localStorage.setItem('isDriver', response.data.isDriver);

        console.log(response.data); // Log the response data to console
        console.log(response.data.token, response.data.userId, response.data.isDriver); // Log specific data to console

        // Check if the email is "admin@gmail.com"
        if (email === "admin@gmail.com") {
          navigate("/yard"); // Navigate to the admin page if email matches
          return; // Exit the function to prevent further navigation
        }

        // If user is a driver, navigate to profile page; otherwise navigate to home page
        if (response.data.isDriver=="Driver") {
          navigate("/welcome");
        } else {
          navigate("/home"); // Replace with your desired route for non-drivers
        }
      } else {
        setError(response.data.message); // Set error message from response data
      }
    } catch (err) {
      setError("Server error. Please try again later."); // Set error message for server errors
    }

    setLoading(false); // Set loading state to false after handling request
  };

  // JSX returned by the component
  return (
    <Row style={{ height: "100vh" }}>
      {/* Left column with background image */}
      <Col sm={12} lg={6} md={8} style={{ backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)" }}>
        <div
          className="photo-hanger"
          style={{
            width: "75%",
            margin: "10% 12%",
            border: "2px solid black",
            borderRadius: "25px",
          }}
        >
          <img
            src={Backphoto} // Background image for the left column
            alt="Login background"
            style={{ width: "100%", borderRadius: "25px" }}
          />
        </div>
      </Col>

      {/* Right column with login form */}
      <Col sm={12} lg={6} md={4}>
        <div className="login-form-content" style={{ margin: "20% auto", width: "50%" }}>
          <h2>Login</h2> {/* Heading for the login form */}
          {error && <Alert variant="danger">{error}</Alert>} {/* Display error message if there is any */}
          <Form onSubmit={handleSubmit}> {/* Form component with onSubmit event handler */}
            {/* Email input field */}
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
                required
              />
            </FloatingLabel>
            {/* Password input field */}
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state on change
                required
              />
            </FloatingLabel>
            {/* Submit button */}
            <Button className="Log-in-btn" type="submit" variant="outline-success" style={{marginTop:"20px"}}>
              {loading ? "Logging in..." : "Log in"} {/* Display appropriate text based on loading state */}
            </Button>
          </Form>
          {/* Link to registration page */}
          <div className="login-footer" style={{ margin: "5% 0%" }}>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
