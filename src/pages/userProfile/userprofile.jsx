
import { Container, Col, Row, Form, Button } from "react-bootstrap";
//import get  from "../../Api/Axios.js";
import { useEffect, useState } from "react";
import axios from "axios";


export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(()=>{

    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if(token){
     axios.get(`http://localhost:8000/user/getCurrentUser/${id}`,{
      
      headers: {
        Authorization: `Bearer ${token}`
      }

      }).then(response => {
       console.log(response.data)
        setUserData(response.data);
      })
     
    }

  

  },[])

   
 

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
                  <div className="user-profile-all-letters">
                    <div className="user-pro-letters">
                      <Form.Group as={Row} controlId="formFirstName">
                        <Form.Label column sm={2}> Name</Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder=" Name"
                            name="Name"
                            value={userData.name || ''}
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
                            value={userData.contactNumber|| ''}
                           
                            readOnly={!edit}
                          />
                        </Col>
                      </Form.Group>
                    </div>
                  </div>
                </Form>

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
