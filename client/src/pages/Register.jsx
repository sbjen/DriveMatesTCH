import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FillDetails from "../components/Register/FillDetails";
// import stacker from "../assets/stacker.jpg"




const Projects = () => {
  return (

    <Container fluid className="project-section">
      
      <Container>


        <h1 className="project-heading">
          Recent Work <strong className="yellow"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my few projects recently I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          {/* lnkiit */}

          <Col >

          <FillDetails></FillDetails>
          
          </Col>






        </Row>
      </Container>
    </Container>
  )
}

export default Projects