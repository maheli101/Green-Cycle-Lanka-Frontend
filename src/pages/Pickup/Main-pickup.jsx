import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import Pickup from './Pickup';

const App = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <Pickup />
    </LoadScript>
  );
};

export default App;
