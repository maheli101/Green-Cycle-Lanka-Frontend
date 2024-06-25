import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Updates() {
  const [totals, setTotals] = useState({ plastic: 700, glass: 300, paper: 500, metal: 600 });
  const [newEntry, setNewEntry] = useState({ type: 'plastic', amount: '', requestType: 'order' });

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
    const fetchData = async () => {
      await Promise.all([fetchAndProcessRequests(), fetchAndProcessOrders()]);
    };
    fetchData();
  }, []);

  const handleAccept = () => {
    const { type, amount, requestType } = newEntry;
    const action = requestType === 'order' ? 'decrease' : 'increase';
    updateTotals(type, parseInt(amount), action);
    setNewEntry({ type: 'plastic', amount: '', requestType: 'order' });
  };

  const renderProgressBar = (type, value) => {
    const colors = {
      plastic: '#277521',
      glass: '#2175A7',
      paper: '#A77521',
      metal: '#752121'
    };
    return (
      <div key={type} style={{ margin: '20px 0' }}>
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
      <br/>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '30px' }}>
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#277521', color: 'white', fontSize: '20px' }}>Type</th>
            <th style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#277521', color: 'white', fontSize: '20px' }}>Amount (kg)</th>
            <th style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#277521', color: 'white', fontSize: '20px' }}>Request Type</th>
            <th style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#277521', color: 'white', fontSize: '20px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#abdf94', fontSize: '18px' }}>
              <select value={newEntry.type} onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value })}>
                <option value="plastic">Plastic</option>
                <option value="glass">Glass</option>
                <option value="paper">Paper</option>
                <option value="metal">Metal</option>
              </select>
            </td>
            <td style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#abdf94', fontSize: '18px' }}>
              <input
                type="number"
                value={newEntry.amount}
                onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
                style={{ width: '100%', padding: '8px' }}
              />
            </td>
            <td style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#abdf94', fontSize: '18px' }}>
              <select value={newEntry.requestType} onChange={(e) => setNewEntry({ ...newEntry, requestType: e.target.value })}>
                <option value="order">Order</option>
                <option value="pickup">Pickup</option>
              </select>
            </td>
            <td style={{ padding: '12px', textAlign: 'center', border: '2px solid white', backgroundColor: '#abdf94', fontSize: '18px' }}>
              <button
                onClick={handleAccept}
                style={{ backgroundColor: '#752121', color: 'white', borderRadius: '5px', border: 'none', padding: '8px 16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
              >
                Accept
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <Link to="/yard">
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
