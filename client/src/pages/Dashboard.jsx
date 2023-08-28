import React, { useState, useEffect } from "react";
import SearchRide from "../components/SearchRide";
import RideCard from "../components/RideCard";
import RegisterRideForm from "../components/RegisterRideForm";
import { Col, Container, Row } from "react-bootstrap";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import Web3 from "web3";
import { CONTRACT_ADDRESS, ABICODE } from "../assets/constants";

// import Profile from "../components/Profile";

// import { TransactionContext } from "../context/TransactionContext";

export default function Dashboard() {
  const [tabCss, setTabCss] = useState([[], [], []]);
  const [basicActive, setBasicActive] = useState("tab1");
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [userName, setUserName] = useState("");
  const [userFound, setUserFound] = useState(false);

  const [searchFormData, setSearchFormData] = useState({
    city: "",
    day: "",
    month: "",
    year: "",
  });

  const [registerRideFormData, setRegisterRideFormData] = useState({
    onSubmit: "",
    boarding: "",
    destination: "",
    city: "",
    price: "",
    gender: "",
    handleInputChange: "",
    date: "",
  });

  // checking metamask metamask interface instance
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

  // serach ride function
  const searchRides = async (contract) => {
    try {
      console.log(contract);
      let CITY_DATE_CODE =
        searchFormData.city.toLowerCase() +
        searchFormData.day +
        searchFormData.month +
        searchFormData.year;
      console.log(CITY_DATE_CODE);
      // calling on static input will change it
      const tx = await contract.methods
        .searchRides("guwahati07072002")
        .send({ from: accounts[0] });

      // call transaction doesnt return reciept so cant get events from it

      const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);

      // Extract logs from the receipt
      const logs = receipt.logs;
      console.log("-------------logs--------------");
      console.log(logs); // Display logs in console
    } catch (error) {
      alert("error in searching rides");
      console.log(error);
    }
  };


  const RegisterRide = async (contract) => {
    try {
      const tx = await contract.methods.registerRide(
        registerRideFormData.city,
        registerRideFormData.destination,
        registerRideFormData.boarding,
        registerRideFormData.price,
        7072002,
        3,
        12,
        16,
        "guwahati07072002",
        ).send({ from: accounts[0] });

        console.log("-------------logs of ride register--------------");
        console.log(tx); // Display logs in console

      console.log("working");
     
    } catch (error) {
      alert("error Registering ride");
      console.log(error);
    }
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    if (value === "tab1") {
      setTabCss([["red"], [], []]);
    } else if (value === "tab2") {
      setTabCss([[], ["red"], []]);
    }

    setBasicActive(value);
  };

  // searcha form handling

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", searchFormData);
    searchRides(contract);
    // loading all rides
  };

  // register form handling
  const handleRegisterRideFormInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterRideFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterRideFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Register ride Form data submitted:", registerRideFormData);

    console.log("register ride submit clicked");
    RegisterRide(contract);

    // data is being retreaved in object lets call

  };

  // <i class="fas fa-car-side"></i>;
  return (
    <>
      <MDBTabs justify className="mb-6 ">
        <MDBTabsItem>
          <MDBTabsLink
            color="dark"
            className="dashboard-tabs"
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            <div>Available Rides</div>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            color="dark"
            className="dashboard-tabs"
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            Register Ride
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            color="dark"
            className="dashboard-tabs"
            onClick={() => handleBasicClick("tab3")}
            active={basicActive === "tab3"}
          >
            Profile
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        {/* available ride tab ofdashboard */}
        <MDBTabsPane show={basicActive === "tab1"}>
          <Container fluid className="available-ride-section">
            <Row className="align-items-center red">
              <Col className=" text-center take-min-heigt available-rides-ride-col green">
                <div className="yellow centered-div search-ride-div">
                  <SearchRide
                    onSubmit={handleSubmit}
                    city={searchFormData.city}
                    day={searchFormData.day}
                    month={searchFormData.month}
                    year={searchFormData.year}
                    handleInputChange={handleInputChange}
                  ></SearchRide>
                </div>
              </Col>
            </Row>

            <Row className="trips-cards orange">
              <Col className="grey trip-card-col">
                <div
                  className="yellow trip-card-div"
                  style={{ height: "90vh", overflowY: "auto" }}
                >
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                className="take-min-height available-rides-deatails-col"
                md={8}
              >
                <Container fluid>
                  <Row>
                    <Col flex>fdsf</Col>
                  </Row>
                </Container>{" "}
              </Col>
            </Row>
          </Container>
        </MDBTabsPane>

        {/* register ride tab of dashboard */}

        <MDBTabsPane show={basicActive === "tab2"}>
          <Container fluid className="available-ride-section">
            <Row className="align-items-center red">
              <Col className=" text-center take-min-heigt available-rides-ride-col green">
                <div className="yellow centered-div search-ride-div">
                  <RegisterRideForm
                    onSubmit={handleRegisterRideFormSubmit}
                    boarding={registerRideFormData.boarding}
                    destination={registerRideFormData.destination}
                    city={registerRideFormData.city}
                    price={registerRideFormData.price}
                    gender={registerRideFormData.gender}
                    handleInputChange={handleRegisterRideFormInputChange}
                    date={registerRideFormData.date}
                  >
                    {" "}
                  </RegisterRideForm>
                </div>
              </Col>
            </Row>
          </Container>
        </MDBTabsPane>

        {/* profile tab of dashboard */}
        <MDBTabsPane show={basicActive === "tab3"}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
