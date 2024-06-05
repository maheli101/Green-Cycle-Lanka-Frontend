import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Paper, CssBaseline, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red, blue, green } from '@mui/material/colors';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';

const DEFAULT_LOCATIONS = [
  { latitude: 40.7128, longitude: -74.0060, color: red[500] },
  { latitude: 34.0522, longitude: -118.2437, color: blue[500] },
  { latitude: 41.8781, longitude: -87.6298, color: green[500] },
];

const createIcon = (color) => {
  const iconHTML = ReactDOMServer.renderToString(
    <LocationOnIcon style={{ color, fontSize: '40px' }} />
  );

  return L.divIcon({
    html: iconHTML,
    className: '',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });
};

const Start = () => {
  const [positions, setPositions] = useState(DEFAULT_LOCATIONS);
  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    // Fetch locations from the database or use static variables
    setPositions(DEFAULT_LOCATIONS);
  }, []);

  const handleMapClick = (e) => {
    setSelectedPosition({ latitude: e.latlng.lat, longitude: e.latlng.lng });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={styles.container}>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h4" align="center" gutterBottom style={styles.heading}>
            SEE LOCATIONS
          </Typography>
          <div style={styles.mapContainer} className="map-animation">
            <MapContainer 
              center={[DEFAULT_LOCATIONS[0].latitude, DEFAULT_LOCATIONS[0].longitude]} 
              zoom={4} 
              style={styles.map}
              onClick={handleMapClick} // Add onClick event handler
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {positions.map((position, index) => (
                <Marker 
                  key={index} 
                  position={[position.latitude, position.longitude]} 
                  icon={createIcon(position.color)}
                >
                  <Popup>
                    Location: {position.latitude}, {position.longitude}
                  </Popup>
                </Marker>
              ))}
              {selectedPosition && (
                <Marker 
                  position={[selectedPosition.latitude, selectedPosition.longitude]} 
                  icon={createIcon('#000')}
                >
                  <Popup>
                    Selected Location: {selectedPosition.latitude}, {selectedPosition.longitude}
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </Paper>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={styles.buttonContainer}>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" style={styles.button} className="button-animation" fullWidth>
                  END TRIP
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" style={styles.button} className="button-animation" fullWidth>
                  PICKED UP
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Link to='/Pickup'>
              <Button variant="contained" style={styles.button} fullWidth>
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <style jsx global>{`
        @keyframes mapSweep {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .map-animation {
          animation: mapSweep 1s ease-out forwards;
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
    backgroundColor: '#f8f8f8',
    border: '2px solid #ccc',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
  paper: {
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  mapContainer: {
    marginBottom: '20px',
    borderRadius: '20px',
    overflow: 'hidden',
    height: '400px',
    width: '100%',
    backgroundColor: '#000',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    border: '2px solid #fff',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  heading: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  button: {
    background: 'linear-gradient(to right, #000000, #434343)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '30px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background 0.3s ease, transform 0.3s ease',
    width: '100%',
  },
};

export default Start;
