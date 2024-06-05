import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Button, Paper, CssBaseline, Grid, Snackbar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

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
  const [positions, setPositions] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://localhost:8000/order/locations');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPositions(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleRequestClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={styles.container}>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h4" align="center" gutterBottom style={styles.heading}>
            Pickup Requests
          </Typography>
          <div style={styles.mapContainer}>
            <MapContainer 
              center={[6.0328139, 80.214955]} // Center around one of the locations initially
              zoom={10} 
              style={styles.map}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {positions.map((position, index) => (
                <Marker key={index} position={[position.latitude, position.longitude]} icon={customIcon}>
                  <Popup className="popup-animation">
                    <div className="popup-content">
                      <div className="popup-line">Town: {position.town}</div>
                      <div className="popup-line">Location: {position.latitude}, {position.longitude}</div>
                      <div className="popup-line">Amount: {position.amount}</div>
                      <div className="popup-line">Material: {position.material}</div>
                      <Button variant="contained" className="popup-button" onClick={handleRequestClick}>
                        REQUEST TO JOURNEY
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <Grid container justifyContent="center" style={styles.buttonContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <Link to='/Start'>
                <Button
                  variant="contained"
                  fullWidth
                  style={styles.button}
                  sx={{ '&:hover': { backgroundColor: '#006400' } }}
                >
                  Start Ride
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Request was sent!"
      />
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

        @keyframes sweepLine {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .map-animation {
          animation: mapSweep 1s ease-out forwards;
        }

        .button-animation {
          animation: buttonZoomIn 0.5s ease-out forwards;
        }

        .popup-animation .popup-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .popup-animation .popup-line {
          animation: sweepLine 0.5s ease-out forwards;
        }

        .popup-animation .popup-line:nth-child(1) {
          animation-delay: 0s;
        }

        .popup-animation .popup-line:nth-child(2) {
          animation-delay: 0.2s;
        }

        .popup-animation .popup-line:nth-child(3) {
          animation-delay: 0.4s;
        }

        .popup-animation .popup-line:nth-child(4) {
          animation-delay: 0.6s;
        }

        .popup-button {
          margin-top: 10px;
          animation: sweepLine 0.8s ease-out forwards;
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
