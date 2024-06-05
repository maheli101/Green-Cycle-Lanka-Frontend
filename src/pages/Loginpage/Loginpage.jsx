import { useState } from "react";
import { Row, Col, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import Backphoto from "../../assets/loginPhotos/loginhome.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/loginRoute", { email, password });
      if (response.data.success) {
        // Save token to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('isDriver', response.data.isDriver);

       console.log(response.data.token,response.data.userId,response.data.isDriver);

        
        navigate("/home"); // Replace with your desired route
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <Row style={{ height: "100vh" }}>
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
            src={Backphoto}
            alt="Login background"
            style={{ width: "100%", borderRadius: "25px" }}
          />
        </div>
      </Col>
      <Col sm={12} lg={6} md={4}>
        <div className="login-form-content" style={{ margin: "20% auto", width: "50%" }}>
          <h2>Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FloatingLabel>
            <Button className="Log-in-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </Form>
          <div className="login-footer" style={{ margin: "5% 10%" }}>
            <p>Dont have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
