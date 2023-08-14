import Web3 from "web3";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS,ABICODE } from "../assets/constants";
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
import projImg6 from "../assets/images/signIn.jpg";
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
      } else if (window.ethereum) {
        var web3 = await new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        accounts = await web3.eth.getAccounts();
        account = accounts[0];
        console.log(account);

        let contract = await new web3.eth.Contract(ABICODE, CONTRACT_ADDRESS);
        userName =   String(await contract.methods.getUserName(account));
        console.log(userName)

      }
    } catch {}
  }

  const projects = [
    {
      title: "Female Drivers",
      description: "Available on request to make your rides safe at odd hours",
      imgUrl: projImg1,
    },
    {
      title: "Student Benefits",
      description:
        "We can't help you with coursework, but with a valid ID, your travel is made easy.",
      imgUrl: projImg2,
    },
    {
      title: "Maximum Security",
      description:
        "Blockchain Technology ensures maximum data privacy for our users.",
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
      description:
        "..or not, if you're a party of 2. Our vehicles comfortably fit any number of people.",
      imgUrl: projImg5,
    },
    {
      title: "Well-Maintained",
      description: "Comfortable rides on the worst of roads are ensured.",
      imgUrl: projImg4,
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
        <Row style={{ paddingTop: "200px" }}></Row>{" "}
        <Smallbutton
          insideText={
            account == null ? "CONNECT TO WALLET" : "connected with: " + account
          }
          onClick={connectToWallet}
          buttonType={account == null ? "button-connect-wallet" : "button2"}
          disabled={account == null ? false : true}
        ></Smallbutton>
        {account == null ? (
          <div></div>
        ) : (
          <div>
            <p>If not Registered to Commnunity </p>

            <Smallbutton insideText={"Registger Here"} buttonType={"button2"}>
              {"     "}
              Register Here{"    "}
            </Smallbutton>
            <span> {userName} </span>
          </div>
        )}
        <Row style={{ paddingTop: "200px" }}>
          <Col md={6}>
            <Blockchain></Blockchain>
          </Col>
          <Col md={6}>
            <h1>Itro</h1>
          </Col>
        </Row>
      </Container>
      <h1>Our Services</h1>


      <Container fluid d-flex>
        <Row
          className="justify-content-center d-flex  "
          style={{ paddingTop: "50px" }}
        >
          {projects.map((project, index) => {
            return (
              <Col md={4}>
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
              buttonType={"button2"}
            ></Smallbutton>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
