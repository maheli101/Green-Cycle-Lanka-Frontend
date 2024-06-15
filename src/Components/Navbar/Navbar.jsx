import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ColorSchemesExample() {
  const [user, setUser] = useState(null); // Initialize user state as null or an empty object
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if (token) {
      axios.get(`http://localhost:8000/user/getCurrentUser/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        const userData = response.data; // Parse directly to an object
        setUser(userData); // Set the user data object
        console.log(userData);
      }).catch(error => {
        console.log('Error fetching user profile:', error);
        
      });
    }
  }, []);

  return (
    <>
      <Navbar fixed="top" bg="success" expand="lg" style={{ color: 'white' }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "24px", marginRight: "90px", color: 'white' }} href="#home">
            Green Cycle Lanka
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ gap: '30px' }}>
              <Nav.Link style={{ color: 'white' }} href="home">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="supplier">
                Supplier
              </Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="buyer">
                Buyer
              </Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="login">
                Login
              </Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="vehicle">
                Add Your Vehicle
              </Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="aboutUs">
                About us
              </Nav.Link>
            </Nav>
            <Nav>
              {user && ( 
                <NavDropdown style={{marrginLeft:"200px"}}
                  title={
                    <img src={user.profilePicture} style={{ width: '50px', height: '50px', borderRadius: '100px' }} alt="profile" />
                  }
                  id="collapsible-nav-dropdown"
                  
                >
                  <NavDropdown.Item href="/user" style={{ color: 'black' }}>Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" style={{ color: 'black' }}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;
