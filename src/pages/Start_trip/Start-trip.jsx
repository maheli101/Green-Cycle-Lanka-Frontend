import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Typography, Paper, CssBaseline, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red, blue, green } from '@mui/material/colors';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

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
  const [positions, setPositions] = useState([]);
  const id = localStorage.getItem('userId')
  const navigate = useNavigate();

  const navEnd= ()=>{
    navigate('/End')
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/reqOrder/${id}`); 
        setPositions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching locations from backend:', error);
      }
    };

    fetchData();
  }, []);

  const handleMapClick = (e) => {
    // Handle map click if needed
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
              center={[8.0328139, 80.214955]} 
              zoom={6} 
              style={styles.map}
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
                  <Popup className="popup-animation">
                    <div className="popup-content">
                    <div className="popup-line">Dirver Name: {position.userName}</div>
                      <div className="popup-line">Town: {position.town}</div>
                      <div className="popup-line">Location: {position.latitude}, {position.longitude}</div>
                      <div className="popup-line">Status: {position.status}</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Paper>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={styles.buttonContainer}>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" style={styles.button} className="button-animation" fullWidth onClick={navEnd}>
                  END TRIP
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
