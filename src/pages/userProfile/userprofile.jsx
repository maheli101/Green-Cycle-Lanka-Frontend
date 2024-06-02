import './userprofile.css'
import { Container,Col, Row } from 'react-bootstrap'

export default function userprofile() {
  return (
    <div>
      <Container>
        <Row >
          <Col>
          <div className="user-profile-all">
  <div className="user-profile-inside-elements">
    <div className="user-profile-header">
      <h1>My Profile</h1>
    </div>

    <div className="user-profile-all-letters">
      <div className="user-pro-letters">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="password" placeholder="password" required />
        <input type="password" placeholder="New-password" required />
        <input type="password" placeholder="confirm-password" required />
      </div>
    </div>

    <div className="user-pro-btnsection">
      <button className="save-btn-pro" type="submit" style={{width:"80px",height:"50px", backgroundColor:"rgb(3, 138, 52)",color:"black",fontWeight:"bold",marginRight:"40px"}}>Edit</button>
      <button className="cansel-btn-pro"  type="submit" style={{border:"2px solid black",borderRadius:"20px",width:"90px",marginLeft:"20px",backgroundColor:" rgb(137, 186, 226)"}}>Update</button>
    </div>
  </div>
</div>

    
          </Col>
        </Row>
      </Container>
      </div>
      
  )
}
