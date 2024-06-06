import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import jsPDF from 'jspdf';
import { Grid } from '@mui/material';

function Driver_admin() {
    const [requests, setRequests] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/reqOrder');
            const orderIds = response.data.map(order => order.order_id);
            const orderDetailsPromises = orderIds.map(orderId =>
                axios.get(`http://localhost:8000/order/${orderId}`)
            );
            const orderDetailsResponses = await Promise.all(orderDetailsPromises);
            const ordersWithData = orderDetailsResponses.map((orderResponse, index) => ({
                ...response.data[index],
                orderDetails: orderResponse.data
            }));
            setRequests(ordersWithData);
        } catch (error) {
            console.error('Error fetching data from backend:', error);
        }
    };

    const handleConfirmClick = async (id, status, order_id) => {
        if (status === 'confirmed') {
            return; // If status is already confirmed, do nothing
        }

        const updatedRequests = requests.map(request => {
            if (request._id === id) {
                return { ...request, status: 'confirmed' };
            }
            return request;
        });
        setRequests(updatedRequests);
        try {
            await axios.put(`http://localhost:8000/reqOrder/${id}`, { status: 'confirmed' });
            await axios.put(`http://localhost:8000/order/${order_id}`, { status: 'confirmed' });
        } catch (error) {
            console.error('Error sending requests to backend:', error);
        }
    };

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/reqOrder/${id}`);
            console.log("Delete ok");
            const updatedRequests = requests.filter(request => request._id !== id);
            setRequests(updatedRequests);
        } catch (error) {
            console.error('Error sending requests to backend:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredRequests = requests.filter(request => {
        return request.orderDetails && request.orderDetails.town.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const generatePDF = () => {
        const doc = new jsPDF();
        let y = 10;

        doc.text('Requests', 10, y);
        y += 10;

        filteredRequests.forEach(request => {
            doc.text(`User Name: ${request.user_name}`, 10, y);
            doc.text(`Location: ${request.orderDetails.town}`, 10, y + 5);
            doc.text(`Material: ${request.orderDetails.material}`, 10, y + 10);
            doc.text(`Amount: ${request.orderDetails.amount}`, 10, y + 15);
            doc.text(`Status: ${request.status}`, 10, y + 20);
            y += 30;
        });

        doc.save('requests.pdf');
    };

    var i = 0;
    return (
        <Container className="mt-4">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Driver Admin</h2>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <input
                        className='border-1 rounded-3 p-2  px-4'
                        type="text"
                        placeholder="Search by Location"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ marginBottom: '20px', width: '100%', height: '40px' }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button className="btn-primary" onClick={generatePDF}>Generate PDF</Button>
                </Grid>
            </Grid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Location</th>
                        <th>Material</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRequests.map(request => (
                        <tr key={request._id}>
                            <td>{++i}</td>
                            <td>{request.user_name}</td>
                            <td>{request.orderDetails ? request.orderDetails.town : 'N/A'}</td>
                            <td>{request.orderDetails ? request.orderDetails.material : 'N/A'}</td>
                            <td>{request.orderDetails ? request.orderDetails.amount : 'N/A'}</td>
                            <td>{request.status}</td>
                            <td className="d-flex justify-content-center">
                                <Button
                                    className="btn-success mx-2"
                                    onClick={() => handleConfirmClick(request._id, request.status, request.orderDetails ? request.orderDetails._id : null)}
                                    disabled={request.status === 'confirmed'}
                                    style={{ marginRight: '5px' }}
                                >
                                    CONFIRM
                                </Button>
                                <Button
                                    className="btn-danger"
                                    disabled={request.status === 'confirmed'}
                                    onClick={() => handleDeleteClick(request._id)}
                                >
                                    DELETE
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Driver_admin;
