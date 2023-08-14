import Web3 from "web3";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABICODE } from "../assets/constants";
import { useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardButton from "../components/clickables/CardButton/CardButton";
import NavBar from "../components/Navbar/Navbar";
import "../style.css";
import Blockchain from "../components/lottieComponents/blockchain1";
import Smallbutton from "../components/clickables/ButtonElement";
import projImg1 from "../assets/images/jenny-ueberberg-v_1k3vRX4kg-unsplash.jpg";
import projImg2 from "../assets/images/sincerely-media-dGxOgeXAXm8-unsplash.jpg";
import projImg3 from "../assets/images/dan-nelson-ah-HeguOe9k-unsplash.jpg";
import projImg4 from "../assets/images/artur-aldyrkhanov-tC0g72uns0M-unsplash.jpg";
import projImg5 from "../assets/images/kylie-paz-aml-5TDo2_k-unsplash.jpg";
import imgCar from "../assets/imae/imageCar.jpg";
import imgTech from "../assets/imae/imageTech.jpg";
import imgWomanDrive from "../assets/imae/womanDrive.jpg";
import { Contract } from "web3";
const { ethereum } = window;

let account = null;
let accounts;
let userName = "";

const Home = () => {
  const [address, setAddress] = useState("wallet not connected ");
  async function connectToWallet() {
    try {
      console.log("fkjsdfnaskfdnkj,s");
      if (account != null) {
        account = accounts[0];
        setAddress(account);
        console.log(account);
      } else if (window.ethereum != "undefined") {
        var web3 = await new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        accounts = await web3.eth.getAccounts();
        account = await accounts[0];
        console.log(account);
        setAddress(account);

        let contract = await new web3.eth.Contract(ABICODE, CONTRACT_ADDRESS);
        userName = String(await contract.methods.getUserName(account));
        console.log(userName);

        if (account != null) {
          connectToWallet();
          console.log(account);
        }
      }
    } catch {}
  }

  const projects = [
    {
      title: "Tech-Verified Commute Connections",
      description:
        "Connect with other verified tech professionals who share your route and timing preferences. Build a network of like-minded individuals for safe and reliable commuting.",
      imgUrl: imgTech,
    },
    {
      title: "Flexible Ride Options",
      description:
        "Tailor your commute according to your preferences. Choose between carpooling or bikepooling, and even decide if you prefer a quiet work-focused ride or a chatty one to share tech insights.",
      imgUrl: imgCar,
    },
    {
      title: "Maximum Security",
      description:
        " Empowering female passengers with the option to choose their travel companions. We prioritize safety and comfort, allowing female passengers to make informed decisions about their commuting partners.",
      imgUrl: imgWomanDrive,
    },
  ];

  const vehiclesdescription = [
    {
      title: "Well-Equipped Navigation System",
      description: "To ensure you reach your destinations on time.",
      imgUrl: imgTech,
    },
    {
      title: "Spacious",
      description:
        "..or not, if you're a party of 2. Our vehicles comfortably fit any number of people.",
      imgUrl: imgTech,
    },
    {
      title: "Well-Maintained",
      description: "Comfortable rides on the worst of roads are ensured.",
      imgUrl: imgTech,
    },
  ];

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      <Container fluid>
        <Row>
          <NavBar></NavBar>
        </Row>
        <Row style={{ paddingTop: "200px" }}>
          {account == null ? <></> : <h4>{account} </h4>}
        </Row>{" "}
        <Row style={{ paddingTop: "200px" }}>
          <Col md={6}>
            <Blockchain></Blockchain>
          </Col>
          <Col md={6}>
            <h1 style={{ fontSize: "2.6em" }}>
              {/* <span className="yellow"> */}
              What Is DriveMatesTCH
              {/* </span>  */}
            </h1>
            <br></br>

            <p className="home-about-body">
              Uniting Tech Professionals Through
              <b> Blockchain-Powered Commutes </b>
              across cities such as <b>Bangalore,</b> <b>Hyderabad </b>and
              <b> Pune.</b>
              <br />
              <br />
              Harnessing the innovation of blockchain technology,
              <b> DriveMatesTCH </b>
              Connect brings verified tech experts together for shared rides in
              these bustling tech cities
              <br />
              <br />
              Seamlessly discover, connect, coordinate, and cost-share through
              our
              <b className="highlight"> advanced blockchain-driven platform </b>
              <br />
              Your carpooling and bikepooling experience becomes not only secure
              but also transparent and efficient
              <br />
              <br />
              With
              <b> DriveMatesTCH </b>
              Connect, carpooling and bikepooling become effortless and secure,
              enhancing your daily journey.
              <br />
              <br />
              <i>
                <b>
                  Elevate your daily office commute with a touch of blockchain,
                  making it an enjoyable and tech-powered journey every day."
                </b>{" "}
              </i>
              <br />
              <br />
            </p>

            <div>
              <Container className="d-flex align-items-center justify-content-center">
                <Row c>
                  <Col>
                    {account == null ? (
                      <Smallbutton
                        insideText={"LOGIN"}
                        // onClick={connectToWallet}
                        buttonType={"log-in-btn"}
                      ></Smallbutton>
                    ) : (
                      <></>
                    )}
                  </Col>
                  <Col>
                    {account == null ? (
                      <Smallbutton
                        insideText={"REGISTER"}
                        // onClick={connectToWallet}
                        buttonType={"log-in-btn"}
                      ></Smallbutton>
                    ) : (
                      <></>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="home-services">
        <h1 style={{ fontSize: "2.6em" }}>
          Services Offered for Customized Commuting{" "}
        </h1>

        <Container fluid d-flex>
          <Row
            className="justify-content-center d-flex  "
            style={{ paddingTop: "50px" }}
          >
            {projects.map((project, index) => {
              return (
                <Col md={4} className="justify-content-center d-flex">
                  <a href="gogle.com">
                    <CardButton align-items-center key={index} {...project} />
                  </a>
                </Col>
              );
            })}
          </Row>

          <Row>
            <a href="http://localhost:3000/donate">
              <Smallbutton
                insideText={"DONATE US"}
                buttonType={"button-connect-wallet"}
              ></Smallbutton>
            </a>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
