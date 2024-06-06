import { Button, Col, Form, Row } from "react-bootstrap";
import "./Vehicleregister.css";
import vehicleBCK from "../../assets/vehiclePhotos/Vehicleback.jpeg";
import { useState } from "react";
import axios from "axios";


export default function Vehicleregister() {
 
  const [vehicleModel, setVehicleModel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [lisonNumber, setLisonNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [inusaranceCard, setInusaranceCard] = useState("");
  const [fuel, setFuel] = useState("");

  function sendData(event) {
    const token = localStorage.getItem('Token');  // Ensure 'Token' is in quotes if it's the key name

    event.preventDefault();
    
    const newDriver = {
      vehicleModel,
      capacity,
      lisonNumber,
      vehicleNumber,
      inusaranceCard,
      fuel
    };
    
    axios.post("http://localhost:8000/Vehicle/add", newDriver, {
      headers: {
        id:localStorage.getItem('userId'),
        isDriver:localStorage.getItem('isDriver')
        
      }
    })
    .then(() => {
      alert("Success");
    })
    .catch((err) => {
      alert(`Can't connect to back end: ${err}`);
    });
    
    console.log(token);
    

  }
  
  return (
    <div>
      <Row style={{ height: "100vh" }}>
        <Col sm={12} lg={6} md={8}>
          <img
            src={vehicleBCK}
            alt="Login background"
            style={{
              width: "100%",
              borderRadius: "25px",
              height: "auto",
              margin: "20% 5%",
            }}
          />
        </Col>
        <Col sm={12} lg={6} md={8}>
          <Form className="vehi-reg-full" onSubmit={sendData}>
            <div className="vehi-reg-allparts">
              <div className="vehi-reg-head">
                <h3 className="vehi-reg-word">Register Your Vehicle</h3>
              </div>

              <Row className="vehi-reg-infield">
                <Col>
                  <Form.Group controlId="formVehicleModel">
                    <Form.Control
                      type="text"
                      placeholder="Vehicle model"
                      required
                      name="model"
                      onChange={(event) => setVehicleModel(event.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCapacity">
                    <Form.Control
                      type="number"
                      placeholder="Capacity (KG)"
                      required
                      name="capacity"
                      value={capacity}
                      onChange={(event) => setCapacity(event.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="vehi-reg-infield">
                <Col>
                  <Form.Group controlId="formLisonNumber">
                    <Form.Control
                      type="text"
                      placeholder="Lison-number"
                      required
                      name="lisonnumber"
                      value={lisonNumber}
                      onChange={(event) => setLisonNumber(event.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formVehicleNumber">
                    <Form.Control
                      type="text"
                      placeholder="Vehicle-number"
                      required
                      name="vehiclenumber"
                      value={vehicleNumber}
                      onChange={(event) => setVehicleNumber(event.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group
                controlId="formInsuranceCardNumber"
                className="vehi-reg-infield"
              >
                <Form.Control
                  type="text"
                  placeholder="Insurance card-number"
                  required
                  name="insuarance"
                  value={inusaranceCard}
                  onChange={(event) => setInusaranceCard(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                controlId="formFuelType"
                className="vehi-reg-dropdown"
              >
                <Form.Label>Fuel Type:</Form.Label>
                <Form.Select
                  as="select"
                  value={fuel}
                  onChange={(event) => setFuel(event.target.value)}
                >
                  <option value="Petrol" name="petrol">
                    Petrol
                  </option>
                  <option value="Diesel" name="disel">
                    Diesel
                  </option>
                </Form.Select>
              </Form.Group>

              <div className="vehi-reg-lastf">
                <Button
                  type="submit"
                  className="vehi-reg-reg-btn"
                >
                  Register
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
