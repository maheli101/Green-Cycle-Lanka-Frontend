import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function ColorSchemesExample() {
  return (
    <>
   
      <Navbar fixed="top"   bg="success" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontSize: "40px", marginRight: "90px" }} href="#home">
            Green Cycle Lanka
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ marginRight: "40px" }} href="home">
                Home
              </Nav.Link>
              <Nav.Link style={{ marginRight: "40px" }} href="supplier">
                Supplier
              </Nav.Link>
              <Nav.Link style={{ marginRight: "40px" }} href="buyer">
                Buyer
              </Nav.Link>
              <Nav.Link style={{ marginRight: "40px" }} href="login">
                Login
              </Nav.Link>
              <Nav.Link style={{ marginRight: "40px" }} href="vehicle">
                Add Your Vehicle
              </Nav.Link>
              <Nav.Link style={{ marginRight: "40px" }} href="aboutUs">
                About us
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <i className="bi bi-person-circle" style={{ fontSize: '30px' }}></i>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default ColorSchemesExample;