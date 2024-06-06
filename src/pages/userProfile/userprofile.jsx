import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [edit, setEdit] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if (token) {
      axios.get(`http://localhost:8000/user/getCurrentUser/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response.data);
        setUserData(response.data); // Set the user data
      }).catch(error => {
        console.error('Error fetching user profile:', error);
      });
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value // Update the corresponding field in userData
    }));
  };

  // Handle update button click
  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if (token) {
      try {
        const response = await axios.put(`http://localhost:8000/user/updateCurrentUser/${id}`, userData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log('User updated successfully:', response.data);
        setEdit(false); // Disable edit mode after successful update
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    }
  };

  return (
    <div>
      <Container style={{marginTop:"40px"}}>
        <Row>
          <Col>
            <div style={styles.userProfileAll}>
              <div style={styles.userProfileInsideElements}>
                <div style={styles.userProfileHeader}>
                  <h1>User Profile</h1>
                </div>

              

                <Form className="user-profile-form">
                  <div className="user-profile-all-letters">
                    <div className="user-pro-letters">
                      <Form.Group as={Row} controlId="formFirstName">
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={userData.name || ''}
                            readOnly={!edit} // Make the field editable only if edit mode is enabled
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formEmail">
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={userData.email || ''}
                            readOnly={!edit}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formPhoneNumber">
                        <Form.Label column sm={2}>Phone Number</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            name="contactNumber"
                            value={userData.contactNumber || ''}
                            readOnly={!edit}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Group>
                    </div>
                  </div>
                </Form>

                <div style={styles.userProBtnSection}>
                  <Button
                    onClick={() => setEdit(!edit)} // Toggle edit mode
                    style={styles.userProBtn}
                  >
                    {edit ? "Cancel" : "Edit"}
                  </Button>
                  {edit && (
                    <Button
                      onClick={handleUpdate} // Call handleUpdate on button click
                      style={styles.userProBtn}
                    >
                      Update
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Styling for the component
const styles = {
  userProfileAll: {
    width: '50%',
    margin: '20px auto',
    border: '2px solid #020000',
    backgroundColor: '#fbfeff',
    borderRadius: '10px',
    padding: '20px',
  },
  userProfileInsideElements: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  userProfileHeader: {
    backgroundColor: 'rgb(3, 138, 52)',
    width: '50%',
    margin: '20px auto',
    textAlign: 'center',
    borderRadius: '10px',
    color: 'white',
    padding: '10px',
    fontSize: '24px',
  },
  userProBtnSection: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  userProBtn: {
    padding: '10px 20px',
    borderRadius: '10px',
    backgroundColor: 'rgb(0, 61, 244)',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    marginRight: '10px',
  },
};
