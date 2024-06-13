import React, { useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap'; 
import axios from 'axios';
import { Link } from "react-router-dom";

function RecyclingForm() {
  const [material, setMaterial] = useState('plastic');
  const [amount, setAmount] = useState(10);
  const [town, setTown] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 
  const [errors, setErrors] = useState({}); 

  const townsInColombo = [
    'Angoda', 'Athurugiriya', 'Avissawella', 'Battaramulla', 'Battaramulla South',
    'Biyagama', 'Borella', 'Colombo 1', 'Colombo 2', 'Colombo 3', 
    'Colombo 4', 'Colombo 5', 'Colombo 6', 'Colombo 7', 'Colombo 8', 
    'Colombo 9', 'Colombo 10', 'Colombo 11', 'Colombo 12', 'Colombo 13', 
    'Colombo 14', 'Colombo 15', 'Dalugama', 'Dehiwala', 'Hanwella', 
    'Hokandara', 'Homagama', 'Kaduwela', 'Kalubowila', 'Kesbewa', 
    'Kiribathgoda', 'Kaduwela', 'Kotte', 'Maharagama', 'Malabe', 
    'Moratuwa', 'Mount Lavinia', 'Mulleriyawa', 'Nawala', 'Nugegoda', 
    'Pannipitiya', 'Piliyandala', 'Rajagiriya', 'Ratmalana', 
    'Sri Jayawardenepura Kotte', 'Thalawathugoda', 'Wellampitiya'
  ];

  const handleMaterialChange = (e) => setMaterial(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleTownChange = (e) => setTown(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; 
    try {
      const response = await axios.post('http://localhost:8000/Order/postOrder', {
        material,
        amount,
        town,
        email
      });
      setModalMessage('Congratulations! Your order has been successfully placed! We will keep you updated with the delivery status. Thank you for joining forces with Green Cycle Lanka! 🌱🚚');
      setShowModal(true); 
      setMaterial('plastic');
      setAmount(10);
      setTown('');
      setEmail('');
    } catch (error) {
      console.error('Error placing order:', error);
      setModalMessage('Oops! 😓 Something went wrong placing your order. Please try again later or contact support. We apologize for any inconvenience. 🛠️ ');
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => setShowModal(false); 

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!town.trim()) {
      errors.town = 'Town is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <Container style={{ marginTop: '150px', width: "50%" }}>
      <Form onSubmit={handleSubmit}>
        <h3 className='text-success'>Please fill the form to proceed with your order.</h3>
        <Form.Group controlId="materialDropdown">
          <Form.Label>Select Material</Form.Label>
          <Form.Control as="select" onChange={handleMaterialChange} value={material}>
            <option value="plastic">Plastic</option>
            <option value="paper">Paper</option>
            <option value="metal">Metal</option>
            <option value="glass">Glass</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="amountInput">
          <Form.Label>Amount (kg)</Form.Label>
          <Form.Control type="number" min={10} step={1} value={amount} onChange={handleAmountChange} />
        </Form.Group>
        <Form.Group controlId="townDropdown">
          <Form.Label>Select Town</Form.Label>
          <Form.Control as="select" onChange={handleTownChange} value={town}>
            <option value="">Select your town</option>
            {townsInColombo.map((town, index) => (
              <option key={index} value={town}>{town}</option>
            ))}
          </Form.Control>
          {errors.town && <Form.Text className="text-danger">{errors.town}</Form.Text>}
        </Form.Group>
        <Form.Group controlId="emailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
          {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
        </Form.Group>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "28px" }}>
          <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
            Place Order
          </Button>
          <Link to={"/buyer"}>
            <Button variant="secondary">Back</Button>
          </Link>
        </div>
      </Form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RecyclingForm;
