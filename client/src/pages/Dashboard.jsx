import React, { useState, useEffect } from "react";
import SearchRide from "../components/SearchRide";
import RideCard from "../components/RideCard";
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
    console.log(contract);
    let CITY_DATE_CODE =
      searchFormData.city.toLowerCase() +
      searchFormData.day +
      searchFormData.month +
      searchFormData.year;
    console.log(CITY_DATE_CODE);
    const tx = await contract.methods
      .searchRides("guwahati07072002")
      .send({ from: accounts[0] });

    // call transaction doesnt return reciept so cant get events from it

    const events = tx;
    const RIDES_IN_CITY = [];

    console.log("-------------events--------------");
    console.log(events);
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
        <MDBTabsPane show={basicActive === "tab1"}>
          <Container fluid>
            <Row>
              <Col
                flex
                className="take-min-height available-rides-ride-col"
                md={4}
              >
                <div>
                  <SearchRide
                    onSubmit={handleSubmit}
                    city={searchFormData.city}
                    day={searchFormData.day}
                    month={searchFormData.month}
                    year={searchFormData.year}
                    handleInputChange={handleInputChange}
                  ></SearchRide>
                </div>
                <br />
                <br />
                <br />
                <br />

                <div style={{ height: "90vh", overflowY: "auto" }}>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                  <RideCard></RideCard>
                </div>
              </Col>

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
        <MDBTabsPane show={basicActive === "tab2"}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab3"}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
