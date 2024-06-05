import "./userprofile.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
//import { get } from "../../Api/Axios.js";


export default function userprofile() {
  


  
  

  return (
    <div>
      <Container>

       
        <Row>
          <Col>
            <div className="user-profile-all">
              <div className="user-profile-inside-elements">
                <div className="user-profile-header">
                  <h1>My Profile</h1>
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
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
