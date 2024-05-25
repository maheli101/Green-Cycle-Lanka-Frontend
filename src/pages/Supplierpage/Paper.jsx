import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PaperImage from '../../assets/SupplierPhotos/Paper.jpg';

function Paper() {
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!amount) {
            newErrors.amount = 'Amount is required';
        } else if (!/^\d+(\.\d+)?$/.test(amount)) {
            newErrors.amount = 'Amount must be a valid number';
        }

        if (!address) {
            newErrors.address = 'Address is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <Container
            fluid
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 50px)',
                padding: '20px',
                backgroundColor: '#f8f9fa',
            }}
        >
            <div
                style={{
                    backgroundSize: 'cover',
                    padding: '30px',
                    borderRadius: '8px',
                    textAlign: 'left',
                    maxWidth: '700px',
                    width: '100%',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <img
                    src={PaperImage}
                    alt="Request Image"
                    style={{
                        width: '100%',
                        maxWidth: '150px',
                        objectFit: 'cover',
                        marginBottom: '30px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
                <h3 style={{ color: 'green', textAlign: 'center', marginBottom: '30px' }}>Request Details</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicAmount">
                        <Form.Label>Amount/Weight (kg)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter amount in kg"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            isInvalid={!!errors.amount}
                        />
                        <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="justify-content-center">
                        <Col xs={6} md={4}>
                            <Button variant="success" type="submit" className="rounded-pill w-100">
                                Next
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

export default Paper;
