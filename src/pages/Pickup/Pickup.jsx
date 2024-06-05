import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Button, Paper, CssBaseline, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { keyframes } from '@emotion/react';

const DEFAULT_LATITUDE = 40.7128; // New York City
const DEFAULT_LONGITUDE = -74.0060;

const iconHTML = ReactDOMServer.renderToString(
  <LocationOnIcon style={{ color: red[500], fontSize: '40px' }} />
);

const customIcon = L.divIcon({
  html: iconHTML,
  className: '',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

const sweepUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  } 
`;

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

  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={styles.container}>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h4" align="center" gutterBottom style={styles.heading}>
            Pickup Request
          </Typography>
          <div style={styles.mapContainer}>
            <MapContainer 
              center={position} 
              zoom={13} 
              style={styles.map}
              onClick={handleMapClick}
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
          <Grid container justifyContent="center" style={styles.buttonContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="contained"
                fullWidth
                style={styles.button}
                sx={{ '&:hover': { backgroundColor: '#006400' } }}
              >
                Start Ride
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <style jsx global>{`
        @keyframes mapSweep {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .map-animation {
          animation: mapSweep 1s ease-out forwards;
        }

        .button-animation {
          animation: buttonZoomIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    marginBottom: '10px',
    paddingBottom: '40px',
    borderRadius: '20px',
    backgroundColor: '#f5f5f5',
  },
  paper: {
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  mapContainer: {
    marginBottom: '20px',
    borderRadius: '20px',
    overflow: 'hidden',
    height: '300px',
    animation: `${sweepUp} 1s ease-out`,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    borderRadius: '25px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
    fontSize: '16px',
    animation: `${sweepDown} 2s ease-out`,
  },
  heading: {
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Pickup;
