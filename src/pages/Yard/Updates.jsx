import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Updates() {
  const [totals, setTotals] = useState({ plastic: 700, glass: 300, paper: 500, metal: 600 });

  const updateTotals = (material, amount, action) => {
    setTotals(prevTotals => {
      const updatedTotal = action === 'increase' ? prevTotals[material] + amount : prevTotals[material] - amount;
      return { ...prevTotals, [material]: updatedTotal };
    });
  };

  const fetchAndProcessRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/request/getRequests');
      const acceptedRequests = response.data.filter(request => request.status === 'accepted');
      acceptedRequests.forEach(request => {
        updateTotals(request.material.toLowerCase(), request.amount, 'increase');
      });
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const fetchAndProcessOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/order/getOrders');
      const acceptedOrders = response.data.filter(order => order.status === 'accepted');
      acceptedOrders.forEach(order => {
        updateTotals(order.material.toLowerCase(), order.amount, 'decrease');
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchAndProcessRequests();
    fetchAndProcessOrders();
  }, []);

  const renderProgressBar = (type, value) => {
    const colors = {
      plastic: '#277521',
      glass: '#2175A7',
      paper: '#A77521',
      metal: '#752121'
    };
    return (
      <div style={{ margin: '20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>{type}</span>
          <span>{value} kg</span>
        </div>
        <div style={{ background: '#ddd', borderRadius: '5px' }}>
          <div style={{ width: `${(value / 1000) * 100}%`, background: colors[type.toLowerCase()], height: '24px', borderRadius: '5px' }}></div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', marginTop: '80px', backgroundColor: '#f2f2f2' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#752121' }}>Stock Update</h1>
      {Object.keys(totals).map(type => renderProgressBar(type, totals[type]))}
      <Link to="yard">
        <button
          style={{ backgroundColor: '#752121', color: 'white', width: '15%', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer', float: 'right', marginRight: '1%', marginTop: '5%' }}
        >
          Back
        </button>
      </Link>
    </div>
  );
}

export default Updates;
