import React from "react";
// import LoadAnim from "./lottiesComponent/LoadAnim";
// import { Container, Row, Col } from "react-bootstrap";

function PreLoader(props) {
  //   if(props.load) {
  //   var  loader =
  //   <Container  fluid className="home-about-section" style={ {height: "100vh"}  }>
  //     <Container>
  //       <Row>
  //       <Col md={4} className="myAvtar">

  //         </Col>
  //         <Col md={4} className="myAvtar">
  //         <LoadAnim></LoadAnim>;
  //         </Col>
  //         <Col md={4} className="myAvtar">

  //         </Col>
  //       </Row>
  //     </Container>

  //   </Container>

  //  }else{
  //    loader = <div id= "preloader-none"></div>
  //  }

  //   return  (
  //     loader

  //   );

  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default PreLoader;
