import { useRef } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState({});
  const pdfRef = useRef();

  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if (token) {
      axios
        .get(`http://localhost:8000/user/getCurrentUser/${id}`, {
          headers: {
            'x-auth-token': token,
            Authorization: `Beare'x-auth-token': token,r ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserData(response.data); // Set the user data
        })
        .catch((error) => {
          console.log('Error fetching user profile:', error);
          // Handle error fetching user profile
        });
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validate the name field to allow only letters
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {
      error = 'Name can only contain letters';
    }

    // Validate the email field
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email address';
    }

    // Validate the phone number field
    if (name === 'contactNumber' && !/^0[0-9]{9}$/.test(value)) {
      error = 'Phone number must start with 0 and be 10 digits long';
    }

    // Validate the NIC field for Sri Lankan NIC numbers
    if (name === 'NIC' && !/^([0-9]{9}[VvXx]|[0-9]{12})$/.test(value)) {
      error = 'Invalid NIC number. It must be in the format 123456789V or 123456789X (old format) or 12 digits (new format)';
    }

    setUserData((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding field in userData
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  // Handle update button click
  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');
console.log(token);
    if (token) {
      try {
        const response = await axios.put(
          `http://localhost:8000/user/updateCurrentUser/${id}`,
          userData,
          {
            headers: {
              'x-auth-token': token,
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('User updated successfully:', response.data);
        toast.success('Successfully Updated');

        setEdit(false); // Disable edit mode after successful update
      } catch (error) {
        console.error('Error updating user profile:', error);
        toast.error("Can't update data");
        // Handle error updating user profile
      }
    }
  };

  // PDF Document Component
  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>User Profile</Text>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone Number: {userData.contactNumber}</Text>
          <Text>NIC Number: {userData.NIC}</Text>
          <Text>Type: {userData.type}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <Container style={{ marginTop: '40px' }}>
        <ToastContainer position="top-center" />
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
                      <Form.Group
                        as={Row}
                        controlId="formFirstName"
                        style={{ marginTop: '10px' }}
                      >
                        <Form.Label column sm={2}>
                          Name
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={userData.name || ''}
                            readOnly={!edit} // Make the field editable only if edit mode is enabled
                            onChange={handleInputChange}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="formEmail"
                        style={{ marginTop: '20px' }}
                      >
                        <Form.Label column sm={2}>
                          Email
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={userData.email || ''}
                            readOnly={!edit}
                            onChange={handleInputChange}
                            isInvalid={!!errors.email}
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="formPhoneNumber"
                        style={{ marginTop: '20px' }}
                      >
                        <Form.Label column sm={2}>
                          Phone Number
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            name="contactNumber"
                            value={userData.contactNumber || ''}
                            readOnly={!edit}
                            onChange={handleInputChange}
                            isInvalid={!!errors.contactNumber}
                            pattern="^0[0-9]{9}$"
                            maxLength="10"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.contactNumber}
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="formNIC"
                        style={{ marginTop: '20px' }}
                      >
                        <Form.Label column sm={2}>
                          NIC Number
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="NIC"
                            name="NIC"
                            value={userData.NIC || ''}
                            readOnly={!edit}
                            onChange={handleInputChange}
                            isInvalid={!!errors.NIC}
                            pattern="^([0-9]{9}[VvXx]|[0-9]{12})$"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.NIC}
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="formType"
                        style={{ marginTop: '20px' }}
                      >
                        <Form.Label column sm={2}>
                          Type
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Type"
                            name="type"
                            value={userData.type || ''}
                            readOnly
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
                    {edit ? 'Cancel' : 'Edit'}
                  </Button>
                  {edit && (
                    <Button onClick={handleUpdate} variant="outline-warning">
                      Update
                    </Button>
                  )}
                  <PDFDownloadLink
                    document={<MyDocument />}
                    fileName="user_profile.pdf"
                    style={{ textDecoration: 'none', marginLeft: 'auto' }}
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? 'Loading document...' : 'Download PDF'
                    }
                  </PDFDownloadLink>
                </div>

                <Link to="/vieworder">
                  <Button
                    variant="outline-success"
                    style={{
                      marginTop: '22px',
                      width: '50%',
                      marginLeft: '22%',
                      height: '40px',
                      fontWeight: 'bold',
                    }}
                  >
                    View My Orders
                  </Button>
                </Link>

                <Link to="/viewrequest">
                  <Button
                    variant="outline-success"
                    style={{
                      marginTop: '22px',
                      width: '50%',
                      marginLeft: '22%',
                      height: '40px',
                      fontWeight: 'bold',
                    }}
                  >
                    View My Pickup Requests
                  </Button>
                </Link>

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
    width: '70%',
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
    margin: '10px auto',
    textAlign: 'center',
    borderRadius: '10px',
    color: 'white',
    padding: '10px',
    fontSize: '24px',
  },
  userProBtnSection: {
    display: 'flex',
    justifyContent: 'start',
    marginTop: '20px',
  },
  userProBtn: {
    backgroundColor: 'red',
    padding: '10px 20px',
    borderRadius: '10px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    marginRight: '10px',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
};
