import projImg1 from "../assets/images/jenny-ueberberg-v_1k3vRX4kg-unsplash.jpg";
import projImg2 from "../assets/images/sincerely-media-dGxOgeXAXm8-unsplash.jpg";
import projImg3 from "../assets/images/dan-nelson-ah-HeguOe9k-unsplash.jpg";
import projImg4 from "../assets/images/artur-aldyrkhanov-tC0g72uns0M-unsplash.jpg";
import projImg5 from "../assets/images/kylie-paz-aml-5TDo2_k-unsplash.jpg";
import projImg6 from "../assets/images/signIn.jpg";


import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../stylesheet/home.css'
import CardButton from '../components/clickables/CardButton/CardButton'

const Home = () => {
  const projects = [
    {
      title: "Female Drivers",
      description: "Available on request to make your rides safe at odd hours",
      imgUrl: projImg1,
    },
    {
      title: "Student Benefits",
      description: "We can't help you with coursework, but with a valid ID, your travel is made easy.",
      imgUrl: projImg2,
    },
    {
      title: "Maximum Security",
      description: "Blockchain Technology ensures maximum data privacy for our users.",
      imgUrl: projImg3,
    },
  ];

  const vehiclesdescription = [
    {
      title: "Well-Equipped Navigation System",
      description: "To ensure you reach your destinations on time.",
      imgUrl: projImg6,
    },
    {
      title: "Spacious",
      description: "..or not, if you're a party of 2. Our vehicles comfortably fit any number of people.",
      imgUrl: projImg5,
    },
    {
      title: "Well-Maintained",
      description: "Comfortable rides on the worst of roads are ensured.",
      imgUrl: projImg4,
    },
  ];




  return (
    <Container fluid className="Home d-flex justify-content-center">
    <Container>
    <Row className="align-horizontal-centre">
                        {
                          projects.map((project, index) => {
                            return (
                              <Col md={4}>
                                <a href="gogle.com">

                                <CardButton
                                key={index}
                                {...project}
                                />

                                </a>
                              
                              </Col>
                            
                            
                            )
                          })
                        }
                      </Row>

    </Container>

  </Container>
  );
}

export default Home