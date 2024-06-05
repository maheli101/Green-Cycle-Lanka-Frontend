import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
// import "./userprofile.css";
// import { get } from "../../Api/Axios.js"; // Uncomment and correct the import path for Axios

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("http://localhost:8000/User/getUser");
        setUserData(response[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div style={styles.userProfileAll}>
              <div style={styles.userProfileInsideElements}>
                <div style={styles.userProfileHeader}>
                  <h1>User Profile</h1>
                </div>

                <Form className="user-profile-form">
                  <Form.Group as={Row} controlId="formFirstName">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={userData.name || ''}
                        onChange={handleInputChange}
                        readOnly={!edit}
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
                        onChange={handleInputChange}
                        readOnly={!edit}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPhoneNumber">
                    <Form.Label column sm={2}>Phone Number</Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={userData.phoneNumber || ''}
                        onChange={handleInputChange}
                        readOnly={!edit}
                      />
                    </Col>
                  </Form.Group>

                  {edit && (
                    <>
                      <Form.Group as={Row} controlId="formPassword">
                        <Form.Label column sm={2}>Password</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={userData.password || ''}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formNewPassword">
                        <Form.Label column sm={2}>New Password</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="password"
                            placeholder="New Password"
                            name="newPassword"
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formConfirmPassword">
                        <Form.Label column sm={2}>Confirm Password</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Group>
                    </>
                  )}

                  <div style={styles.userProBtnSection}>
                    <Button
                      onClick={() => setEdit(!edit)}
                      style={styles.userProBtn}
                    >
                      {edit ? "Cancel" : "Edit"}
                    </Button>
                    {edit && (
                      <Button
                        style={styles.userProBtn}
                        type="submit"
                      >
                        Update
                      </Button>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  userProfileAll: {
    width: '50%',
    height: 'auto',
    border: '2px solid #020000',
    backgroundColor: '#fbfeff',
    margin: '20px auto',
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
  userProfileAllLetters: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: '20px',
  },
  userProLetters: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    background: 'transparent',
    color: '#333',
    fontSize: '16px',
    border: 'none',
    borderBottom: '2px solid #ccc',
    outline: 'none',
    padding: '10px 0',
    marginBottom: '20px',
    fontStyle: 'italic',
  },
  userProBtnSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
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
  },
  userProBtnHover: {
    backgroundColor: 'darkgreen',
  },
  userProBtnActive: {
    backgroundColor: 'white',
    border: '2px solid rgb(0, 61, 244)',
    color: 'rgb(0, 61, 244)',
  },
  placeholder: {
    color: '#020000',
  },
};
