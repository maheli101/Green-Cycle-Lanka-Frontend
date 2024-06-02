import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Backphoto from "../../assets/loginPhotos/loginhome.jpeg"
import {  FloatingLabel, Form } from "react-bootstrap";
import './login.css'
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <>
   
  
      <Row style={{ height: "100vh" }}>
        <Col sm={12} lg={6} md={8} style={{backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)"}}>
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
        {/* first row done */}
        <Col sm={12} lg={6} md={4}>
         
          <div className="login-form-content" style={{ margin: "40% auto", width: "50%" }}>
          <h2>Login</h2>
          <Form>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" name="password" placeholder="Password" />
            </FloatingLabel>
            <Link to="/">
            <button className="Log-in-btn" type="submit">Log in</button>
            </Link>
            
          </Form>
          <div className="login-footer" style={{margin:"5% 10%"}}>
          <p>Don't have an Account? <Link to="/register">Register</Link></p>
          </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Loginpage;
