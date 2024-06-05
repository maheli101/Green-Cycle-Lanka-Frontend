
import "./userprofile.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
//import { get } from "../../Api/Axios.js";


export default function userprofile() {
 
import { Container, Col, Row } from "react-bootstrap";
import { get } from "../../Api/Axios.js";
import { useEffect, useState } from "react";

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


                <Form  className="user-profile-form">
            <div className="user-profile-all-letters">
                <div className="user-pro-letters">
                    <Form.Group as={Row} controlId="formFirstName">
                        <Form.Label column sm={2}> Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder=" Name"
                                name="Name"
                                
                                
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
                              
                               
                            />
                        </Col>
                    </Form.Group>

                    

                  

                    

                   

                <div style={styles.userProfileAllLetters}>
                  <div style={styles.userProLetters}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userData.name || ''}
                      onChange={handleInputChange}
                      readOnly={!edit}
                      required
                      style={styles.input}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.email || ''}
                      onChange={handleInputChange}
                      readOnly={!edit}
                      required
                      style={styles.input}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={userData.email || ''}
                      onChange={handleInputChange}
                      readOnly={!edit}
                      required
                      style={styles.input}
                    />
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={userData.phoneNumber || ''}
                      onChange={handleInputChange}
                      readOnly={!edit}
                      required
                      style={styles.input}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userData.password || ''}
                      onChange={handleInputChange}
                      readOnly={!edit}
                      required
                      style={styles.input}
                    />
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      required={edit}
                      style={styles.input}
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required={edit}
                      style={styles.input}
                    />
                  </div>

                </div>
            </div>
        </Form>


                <div className="user-pro-btnsection">
                  <Button
                
                    className="save-btn-pro"
                    type="submit"
                    style={{
                      width: "80px",
                      height: "50px",
                      backgroundColor: "rgb(3, 138, 52)",
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "40px",
                    }}
                  >
                    Edit
                  </Button>
                  <button
                    className="cansel-btn-pro"
                    type="submit"
                    style={{
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90px",
                      marginLeft: "20px",
                      backgroundColor: " rgb(137, 186, 226)",
                    }}
                  >
                    Update

                <div style={styles.userProBtnSection}>
                  <button
                    onClick={() => setEdit(!edit)}
                    style={styles.userProBtn}
                  >
                    {edit ? "Cancel" : "Edit"}

                  </button>
                  {edit && (
                    <button
                      style={styles.userProBtn}
                      type="submit"
                    >
                      Update
                    </button>
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
