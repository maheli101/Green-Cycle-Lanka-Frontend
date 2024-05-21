import { Col, Row } from "react-bootstrap";
import './Vehicleregister.css'
import vehicleBCK from '../../assets/vehiclePhotos/Vehicleback.jpeg'



export default function Vehicleregister() {
  return (
    <div>
      <Row style={{height:"100vh"}}>
        <Col sm={12} lg={6} md={8}>
        
            <img src={vehicleBCK} alt="Login background"style={{ width: "100%", borderRadius: "25px",height:"auto",margin:"20% 5%" }}
            />
        
        </Col>
        <Col sm={12} lg={6} md={8}>
        <form action="" className="vehi-reg-full">
  <div className="vehi-reg-allparts">
    <div className="vehi-reg-head">
      <h3 className="vehi-reg-word">Register Your Vehicle</h3>
    </div>

    <div className="vehi-reg-infield">
      <input type="text" placeholder="Vehicle model" required />
      <input type="number" placeholder="Capacity  (KG)" required />
      <input type="text" placeholder="Lison-number" required />
      <input type="text" placeholder="Vehicle-number" required />
      <input type="text" placeholder="Insurance card-number" required />
    </div>

    <div className="vehi-reg-dropdown">
      <label htmlFor="userType">Fuel Type:</label>
      <select id="userType">
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
      </select>
    </div>

    <div className="vehi-reg-infield">
      <input type="text" placeholder="Verify Code" required />
    </div>

    <div className="vehi-reg-lastf">
      <button type="submit" className="vehi-reg-reg-btn">Register</button>
    </div>
  </div>
</form>

        </Col>
      </Row>
    </div>
  )
}
