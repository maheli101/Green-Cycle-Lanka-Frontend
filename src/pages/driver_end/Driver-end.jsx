import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button as MUIButton, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function End() {
  const [comment, setComment] = useState('');
  const [mood, setMood] = useState('');

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleMoodChange = (e) => setMood(e.target.value);
  const navigate = useNavigate()
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/order/driver_comments', { comment, mood });
      alert('Comment saved successfully');
      console.log(response.data);
      navigate("/welcome")
    } catch (error) {
      console.error('Error saving comment:', error);
      alert('Failed to save comment');
    }
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundColor: '#ffffff' }}>
      <style>
        {`
          .comment-container {
            background-color: #ffffff;
            height: 80%;
            width: 90%;
          }

          .comment-content {
            background-color: #274e2a;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
            animation: fadein 2s;
            padding: 2rem;
            color: white;
          }

          .comment-button {
            border-radius: 20px;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            animation: slidein 2s;
            margin-top: 20px;
          }

          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slidein {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <Row className="justify-content-center w-100">
        <Col xs={11} sm={10} md={8} lg={6} className="comment-container">
          <div className="text-center p-5 mb-4 comment-content">
            <Typography variant="h4" component="h1" gutterBottom>Thank You, Driver!</Typography>
            <Typography variant="h6" component="h2" gutterBottom>We appreciate your service. Please leave a comment and let us know your mood about our service.</Typography>
            <FormControl component="fieldset" className="mb-3">
              <FormLabel component="legend" style={{ color: 'white' }}>Your Mood</FormLabel>
              <RadioGroup row aria-label="mood" name="row-radio-buttons-group" value={mood} onChange={handleMoodChange}>
                <FormControlLabel value="happy" control={<Radio style={{ color: 'white' }} />} label="Happy" style={{ color: 'white' }} />
                <FormControlLabel value="satisfied" control={<Radio style={{ color: 'white' }} />} label="Satisfied" style={{ color: 'white' }} />
                <FormControlLabel value="neutral" control={<Radio style={{ color: 'white' }} />} label="Neutral" style={{ color: 'white' }} />
                <FormControlLabel value="dissatisfied" control={<Radio style={{ color: 'white' }} />} label="Dissatisfied" style={{ color: 'white' }} />
                <FormControlLabel value="unhappy" control={<Radio style={{ color: 'white' }} />} label="Unhappy" style={{ color: 'white' }} />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Your Comment"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={comment}
              onChange={handleCommentChange}
              className="mb-3"
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white' },
              }}
            />
            <MUIButton variant="contained" color="primary" onClick={handleSubmit} className="comment-button">
              Save Comment
            </MUIButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default End;
