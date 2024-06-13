import { Button, Col, Form, Row } from "react-bootstrap";
import "./Vehicleregister.css";
import vehicleBCK from "../../assets/vehiclePhotos/Vehicleback.jpeg";
import { useState } from "react";
import axios from "axios";

export default function Vehicleregister() {
  const [formData, setFormData] = useState({
    //form data's default values

    vehicleModel: "",
    capacity: "",
    lisonNumber: "",
    vehicleNumber: "",
    inusaranceCard: "",
    fuel: "Petrol",
  });
  const [response, setResponse] = useState(null);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      console.log(formData);
        console.log(localStorage.getItem('isDriver'))
      axios.post("http://localhost:8000/Vehicle/postVehicle", formData, {
         headers: {
          id:localStorage.getItem('userId'),
           driver:localStorage.getItem('isDriver')

        
         }
      });
      setResponse(response);
      console.log("Successfully added vehicle");

      //after succsess submission

      setFormData({
        vehicleModel: "",
        capacity: "",
        lisonNumber: "",
        vehicleNumber: "",
        inusaranceCard: "",
        fuel: "petrol",
      });
    } catch (err) {
      console.log("can't send data to back end");
      console.log(err);
    }
  };
  

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
          <Form className="vehi-reg-full" onSubmit={handleSubmit}>
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
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
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
                      value={formData.capacity}
                      onChange={handleChange}
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
                      name="lisonNumber"
                      value={formData.lisonNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formVehicleNumber">
                    <Form.Control
                      type="text"
                      placeholder="Vehicle-number"
                      required
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleChange}
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
                  name="inusaranceCard"
                  value={formData.inusaranceCard}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formFuelType"
                className="vehi-reg-dropdown"
              >
                <Form.Label>Fuel Type:</Form.Label>
                <Form.Select
                  as="select"
                  value={formData.fuel}
                  onChange={handleChange}
                  name=" fuel"
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
                <Button type="submit" className="vehi-reg-reg-btn">
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
