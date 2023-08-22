import React from "react";
import { CONTRACT_ADDRESS, ABICODE } from "../assets/constants";
import Web3 from "web3";

import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import FillDetails from "../components/Register/FillDetails";
// import stacker from "../assets/stacker.jpg"
import RegisterForm from "../components/RegisterForm";

const Projects = () => {
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [userName, setUserName] = useState("");
  const [userFound, setUserFound] = useState(false);

  const [registerFormData, setRegisterFormData] = useState({
    onSubmit: "",
    firstName: "",
    lastName: "",
    city: "",
    contactNo: "",
    gender: "",
    handleInputChange: () => {},
    password: "",
  });

  // register youself on network

  const Register = async (contract) => {
    console.log(contract);

    try {
      const tx = await contract.methods
        .registerMe(
          registerFormData.firstName,
          registerFormData.gender,
          registerFormData.contactNo,
          registerFormData.password,
          registerFormData.city
        )
        .send({ from: accounts[0] });

      // call transaction doesnt return reciept so cant get events from it

      const events = tx;
      const RIDES_IN_CITY = [];

      console.log("-------------Register Account on Network--------------");
      console.log(events);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", registerFormData);
    // searchRides(contract);
    // loading all rides
    Register(contract);
  };

  useEffect(() => {
    const initialize = async () => {
      // Check if web3 is injected by the browser (Mist/MetaMask)
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          setWeb3(web3);
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
          const contract = new web3.eth.Contract(ABICODE, CONTRACT_ADDRESS);
          setContract(contract);
          console.log("------contracts--------");
          console.log(contract);
          const username = await contract.methods
            .getUserName(accounts[0])
            .call();
          console.log(`userName deteccted on Network: ${username}`);
          setUserName(username);
          setUserFound(true);
        } catch (error) {
          console.error("Error initializing Web3:", error);
          alert(
            "either metamsk is not installed or you connected to different blockchain network."
          );
        }
      } else {
        console.log("Please install MetaMask!");
      }
    };
    if (accounts.length === 0) {
      initialize();
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <RegisterForm
            onSubmit={handleSubmit}
            firstName={registerFormData.firstName}
            lastName={registerFormData.lastName}
            city={registerFormData.city}
            day={registerFormData.day}
            contactNo={registerFormData.contactNo}
            month={registerFormData.month}
            year={registerFormData.year}
            gender={registerFormData.gender}
            handleInputChange={handleInputChange}
            password={registerFormData.password}
          ></RegisterForm>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
