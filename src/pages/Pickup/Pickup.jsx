import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Button, Paper, CssBaseline } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { keyframes } from '@emotion/react';

// Constants for latitude and longitude (replace with actual values)
const DEFAULT_LATITUDE = 40.7128; // New York City
const DEFAULT_LONGITUDE = -74.0060;

// Convert the MUI LocationOn icon to an HTML string
const iconHTML = ReactDOMServer.renderToString(
  <LocationOnIcon style={{ color: red[500], fontSize: '40px' }} />
);

// Create a custom icon using Leaflet's divIcon
const customIcon = L.divIcon({
  html: iconHTML,
  className: '', // Set to an empty string to avoid the default Leaflet marker styling
  iconSize: [25, 41], // Set the size of the icon if needed
  iconAnchor: [12, 41], // Anchor the icon appropriately
  popupAnchor: [0, -41], // Position the popup appropriately
});

// Define the bottom-to-top sweep animation
const sweepUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  } 
`;

// Define the top-to-bottom sweep animation for the button
const sweepDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Pickup = () => {
  const [position, setPosition] = useState([DEFAULT_LATITUDE, DEFAULT_LONGITUDE]);

  useEffect(() => {
    // Fetch location from the database or use static variables
    // Example: Fetch location from an API endpoint or set it statically
    // const fetchLocation = async () => {
    //   try {
    //     const response = await fetch('your-api-endpoint');
    //     const data = await response.json();
    //     setPosition([data.latitude, data.longitude]);
    //   } catch (error) {
    //     console.error('Error fetching location:', error);
    //   }
    // };

    // Uncomment the following line to fetch location when component mounts
    // fetchLocation();

    // For demonstration, set position statically
    // setPosition([DEFAULT_LATITUDE, DEFAULT_LONGITUDE]);
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" style={styles.container}>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h4" align="center" gutterBottom style={styles.heading}>
            Pickup Request
          </Typography>
          <div style={styles.mapContainer}>
            <MapContainer 
              center={position} 
              zoom={13} 
              style={styles.map}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  Location: {position[0]}, {position[1]}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div style={styles.buttonContainer}>
            <Button
              variant="contained"
              style={styles.button}
              sx={{ '&:hover': { backgroundColor: '#006400' } }} // Dark green background on hover
            >
              Start Ride
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    marginBottom:'10px',
    paddingBottom: '40px',
    borderRadius: '20px',
    backgroundColor: '#f5f5f5', // Light gray background for the container
  },
  paper: {
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for a modern look
    backgroundColor: '#ffffff', // White background for the paper
  },
  mapContainer: {
    marginBottom: '20px',
    borderRadius: '20px', // Increased border radius
    overflow: 'hidden',
    height: '300px', // Increased map height
    animation: `${sweepUp} 1s ease-out`, // Apply the bottom-to-top sweep animation
  },
  map: {
    height: '100%', // Adjusted map height
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: '200px', // Adjusted button width
    padding: '10px',
    marginTop: '20px',
    borderRadius: '25px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)', // Softer shadow for the button
    fontSize: '16px', // Font size for the button
    animation: `${sweepDown} 2s ease-out`, // Apply the top-to-bottom sweep animation
  },
  heading: {
    fontWeight: 'bold',
    color: '#333', // Dark gray color for the heading
  },
};

export default Pickup;
