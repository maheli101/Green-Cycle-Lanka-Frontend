








import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";




function MainLayout() {
  return (
    <>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row style={{ minHeight: "100vh", marginTop: "77px" }}>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default MainLayout;
