import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBIcon,
} from "mdb-react-ui-kit";
import Profile from "../components/Profile";
import RideCard from "../components/RideCard";

import React, { useState, useContext, useEffect } from "react";

import { TransactionContext } from "../context/TransactionContext";
import { Col, Container, Row } from "react-bootstrap";

let buttonStyle;

export default function Dashboard() {
  const [tabCss, setTabCss] = useState([[], [], []]);
  const [basicActive, setBasicActive] = useState("tab1");

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

  <i class="fas fa-car-side"></i>;
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
                  <h4>Rides</h4>
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
                {" "}
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
