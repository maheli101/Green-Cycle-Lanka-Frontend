import React, { useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap'; 
import axios from 'axios';
import { Link } from "react-router-dom";

function RequestForm() {
  const [material, setMaterial] = useState('plastic'); // Set default to 'plastic'
  const [amount, setAmount] = useState(10);
  const [town, setTown] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 

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
    // Validation
    if (!email.trim() || !town.trim()) {
      setModalMessage('Please fill out all fields.');
      setShowModal(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setModalMessage('Please enter a valid email address.');
      setShowModal(true);
      return;
    }
    // End of Validation
    console.log({ material, amount, town, email }); // Log form data for debugging
    try {
      const response = await axios.post('http://localhost:8000/Request/postRequest', {
        material,
        amount,
        town,
        email
      });
      console.log('Request placed successfully:', response.data);
      setModalMessage('Your request has been submitted successfully! We will review it and get back to you soon. Thank you for contacting us! 🌟');
      setShowModal(true); 
      setMaterial('plastic'); // Reset to default
      setAmount(10);
      setTown('');
      setEmail('');
    } catch (error) {
      console.error('Error placing request:', error);
      setModalMessage('Oops! 😓 Something went wrong submitting your request. Please try again later or contact support. We apologize for any inconvenience. 🛠️ ');
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => setShowModal(false); 

  return (
    <Container style={{ marginTop: '150px', width: "50%" }}>
      <Form onSubmit={handleSubmit}>
        <h3 className='text-success'>Please fill the form to submit your request.</h3>
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
        </Form.Group>
        <Form.Group controlId="emailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "28px" }}>
          <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
            Submit Request
          </Button>
          <Link to={"/supplier"}>
            <Button variant="secondary">Back</Button>
          </Link>
        </div>
      </Form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request Status</Modal.Title>
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

export default RequestForm;
