import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Paper, CssBaseline, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

const Start = () => {
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
            SEE LOCATION
          </Typography>
          <div style={styles.mapContainer} className="map-animation">
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
        </Paper>
      </Container>
   <Container className='d-flex row mb-3 mt-4 '>
    <div className='ml-3 col-4 '> 
      <Button  variant="contained" style={styles.button}>
        Back
        </Button>
    </div> 
    <div className='justify-content-center align-content-center col'>
        <Button variant="contained" style={styles.button} className="button-animation w-50">
          END TRIP
        </Button>
    </div>
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
    '&:hover': {
      background: 'linear-gradient(to right, #434343, #000000)',
      transform: 'scale(1.05)',
    },
  },
};

export default Start;
