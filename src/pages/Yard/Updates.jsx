import React from "react";
import UpdateImage from '../../assets/Photos/pic3.jpg';
import { Col, Row } from "react-bootstrap";

function Updates() {
  return (
    <>
      <Row style={{height:"100vh"}}>
        <Col xs={12} md={6} lg={6}>
        

        
        <img
          src={UpdateImage}
          alt="Update"
          style={{ width: '100%'}}
        />
      

          </Col >
          <Col xs={12} md={6} lg={6}>
           
           <div style={{margin:'10%'}}></div>
           <h3 style={{fontStyle:'italic',margin:'1%  5%'}}>Stock Update</h3>
            <h6 style={{fontStyle:'oblique',margin:'5%'}}>
Welcome to the Updates page! Here, you'll find the latest stock levels for recyclable materials like plastics, glass, paper, and metals. Our progress bars provide a quick visual of current stock percentages, helping you stay informed and make decisions easily.

Thank you for supporting our recycling efforts!

</h6>
            <div className="progress mb-4" style={{ height: "30px" ,margin:'5%'}}>
              <div className="progress-bar bg-danger" style={{ width: "70%" }}>
                Plastic - 700kg
              </div>
            </div>
            <div className="progress mb-4" style={{ height: "30px",margin:'5%' }}>
              <div className="progress-bar bg-success" style={{ width: "30%" }}>
                Glass - 300kg
              </div>
            </div>
            <div className="progress mb-4" style={{ height: "30px",margin:'5%' }}>
              <div className="progress-bar bg-warning" style={{ width: "50%" }}>
                Paper - 500kg
              </div>
            </div>
            <div className="progress mb-2" style={{ height: "30px",margin:'5%' }}>
              <div className="progress-bar bg-primary" style={{ width: "60%" }}>
                Metal - 600kg
              </div>
            </div> 
            
            <button style={{ backgroundColor: "#752121", color: "white",width:"15%", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer", float: "right", marginRight: "1%",  marginTop: "5%" }}>Back</button>
        </Col>
      </Row>
      
   
  


    </>
  );
}

export default Updates;
