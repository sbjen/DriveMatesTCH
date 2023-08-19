import { CONTRACT_ADDRESS, ABICODE } from "../assets/constants";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Smallbutton from "../components/clickables/ButtonElement";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { Contract } from "web3";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState(
    "This message will disappear after 60 seconds"
  );
  const [dots, setDots] = useState("");



  const [userFound, setUserFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [userName, setUserName] = useState("");

  // metamask initialization

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

    initialize();
  }, []);

  return (
    <MDBContainer fluid className="Login-page">
      <h1>{"Match Found"}</h1>

      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "600px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">{userName}</h2>
              <p className="text-white-50 mb-5">
                enter user Id for verification
              </p>

              <div
                class="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                @ Wallet Address: {accounts[0]}
                {/* <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a> */}
              </div>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="User ID"
                id="formControlLg"
                type="password"
                size="lg"
              />
              {/* 
              <p className="small mb-3 pb-lg-2">
              <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p> */}
              {/* <MDBBtn outline className="mx-2 px-5 Login-submit-btn" color="dark" size="lg" >
                Call Metmask
              </MDBBtn> */}

              <Smallbutton
                insideText={"Call Metamask"}
                // onClick={navigateToLogin}
                buttonType={"log-in-btn"}
              />

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>

              <div>
                {}
                <p className="mb-0">
                  Not Registered to our platform?{" "}
                  <a href="#!" class="text-white-50 fw-bold">
                    Register Here
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
