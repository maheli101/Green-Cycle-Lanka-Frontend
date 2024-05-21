
import { Col, Row } from 'react-bootstrap'
import './Register.css'
import registerBCK from '../../assets/registerphotos/Regback.jpeg'
import { Link } from 'react-router-dom'
export default function Register() {
  return (


    <div>
        <Row style={{height:"100vh"}}>
        <Col sm={12} lg={6} md={8} >
          <div
            className="photo-hanger-register"
            style={{
              width: "85%",
              margin: "10% 12%",
              borderRadius: "25px",
            }}
          >
            <img
              src={registerBCK}
              alt="Login background"
              style={{ width: "100%", borderRadius: "25px" }}
            />
          </div>
        </Col>
            <Col lg={6} md={8} sm={12}>
            <form action="" className="custom-reg-full">
     <div className="custom-reg-allparts">
     <div className="custom-reg-head">
      <div className="custom-reg-hair">
        <h1 className="custom-reg-word">Register Form</h1>
      </div>
    </div>

    <div className="custom-reg-infield">
      <input type="text" placeholder="Enter Name" required />
      <input type="text" placeholder="Enter Email" required />
      <input type="text" placeholder="Contact Number" required />
      <input type="text" placeholder="NIC" required /> 
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Repeat Password" required />
    </div>

    <div className="custom-reg-dropdown">
      <label htmlFor="userType">Choose Your Type:</label>
      <select id="userType">
        <option value="driver">Driver</option>
        <option value="buyer">User</option>
    
      </select>
    </div>
    <div className="custom-reg-infield"> 
      <input type="text" placeholder="Enter Verify Number" required />
    </div>

    <div className="custom-reg-lastf">
      <Link to="/login">
      <button type="submit" className="custom-reg-reg-btn">Register</button>
      </Link>

      <div className="custom-reg-sign-reg">
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  </div>
</form>

            </Col>
        </Row>
       
    </div>
  )
}
