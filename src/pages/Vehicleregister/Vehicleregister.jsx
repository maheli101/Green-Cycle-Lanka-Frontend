import { Button, Col, Form, Row } from "react-bootstrap";
import "./Vehicleregister.css";
import vehicleBCK from "../../assets/vehiclePhotos/Vehicleback.jpeg";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Vehicleregister() {
  const [formData, setFormData] = useState({
    vehicleModel: "",
    capacity: "",
    lisonNumber: "",
    vehicleNumber: "",
    inusaranceCard: "",
    fuel: "Petrol",
  });

  const [response, setResponse] = useState(null);

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Function to restrict input to only numeric characters for lisonNumber
  function handleLisonNumberKeyPress(event) {
    const charCode = event.charCode;
    if (!/[0-9]/.test(String.fromCharCode(charCode))) {
      event.preventDefault();
    }
  }

  // Function to restrict input to only alphabetic characters for vehicleModel
  function handleVehicleModelKeyPress(event) {
    const charCode = event.charCode;
    if (!/[a-zA-Z]/.test(String.fromCharCode(charCode))) {
      event.preventDefault();
    }
  }

  // Function to handle input for vehicleNumber with specific rules
  function handleVehicleNumberKeyPress(event) {
    const { value } = event.target;
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);

    // Allow only letters if length is less than 3
    if (value.length < 3 && /[a-zA-Z]/.test(char)) {
      return;
    }

    // Allow only digits if length is 3 or 4
    if (value.length >= 3 && value.length < 7 && /[0-9]/.test(char)) {
      return;
    }

    // Block all other inputs
    event.preventDefault();
  }

  // Function to handle and validate vehicleNumber format
  function handleVehicleNumberChange(event) {
    const { name, value } = event.target;

    // Allow only up to 3 letters followed by exactly 4 digits
    const regex = /^[a-zA-Z]{0,3}[0-9]{0,4}$/;
    if (regex.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Vehicle/postVehicle",
        formData,
        {
          headers: {
            id: localStorage.getItem("userId"),
            driver: localStorage.getItem("isDriver"),
          },
        }
      );

      setResponse(response);
      console.log(response);

      // Display the toast notification upon successful submission
      toast.success("Your vehicle added");

      // Reset form data after submission
      setFormData({
        vehicleModel: "",
        capacity: "",
        lisonNumber: "",
        vehicleNumber: "",
        inusaranceCard: "",
        fuel: "Petrol",
      });

    } catch (error) {
      // Handle error here (uncomment if needed)
       toast.error("Only drivers can add vehicles");
      // console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <Row style={{ height: "100vh" }}>
        <Col sm={12} lg={6} md={8}>
          {/* Display background image */}
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
          {/* Vehicle registration form */}
          <Form className="vehi-reg-full" onSubmit={handleSubmit}>
            <div className="vehi-reg-allparts">
              <div className="vehi-reg-head">
                {/* Form title */}
                <h3 className="vehi-reg-word">Register Your Vehicle</h3>
              </div>

              {/* Row 1: Vehicle model and Capacity dropdown */}
              <Row className="vehi-reg-infield">
                <Col>
                  <Form.Group controlId="formVehicleModel">
                    {/* Vehicle model input */}
                    <Form.Control
                      type="text"
                      placeholder="Vehicle model"
                      required
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      onKeyPress={handleVehicleModelKeyPress}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCapacity">
                    {/* Capacity dropdown */}
                    <Form.Control
                      as="select"
                      required
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Capacity (KG)
                      </option>
                      <option value="0-1000KG"> 0-1000KG</option>
                      <option value="1000-1500KG">1000-1500KG</option>
                      <option value="1500-2500KG">1500-2500KG</option>
                      <option value="above 2500KG">above 2500KG</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              {/* Row 2: Lison number and Vehicle number inputs */}
              <Row className="vehi-reg-infield">
                <Col>
                  <Form.Group controlId="formLisonNumber">
                    {/* Lison number input */}
                    <Form.Control
                      type="text"
                      placeholder="Revenue lison-number"
                      required
                      name="lisonNumber"
                      value={formData.lisonNumber}
                      onChange={handleChange}
                      onKeyPress={handleLisonNumberKeyPress}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formVehicleNumber">
                    {/* Vehicle number input */}
                    <Form.Control
                      type="text"
                      placeholder="Vehicle-number"
                      required
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleVehicleNumberChange}
                      onKeyPress={handleVehicleNumberKeyPress}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Insurance card number input */}
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

              {/* Fuel type dropdown */}
              <Form.Group
                controlId="formFuelType"
                className="vehi-reg-dropdown"
              >
                <Form.Label>Fuel Type:</Form.Label>
                <Form.Select
                  value={formData.fuel}
                  onChange={handleChange}
                  name="fuel"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </Form.Select>
              </Form.Group>

              {/* Register button */}
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
