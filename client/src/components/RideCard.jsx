import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ButtonElement from "./clickables/ButtonElement";
function RideCard({
  name = "Brajendra Suman",
  wallet,
  arrow = "---->",
  departure,
  board = "Guwahati",
  dest = "Campus",
  cost = "1600 Rs",
}) {
  return (
    <Container d-flex justify-content-start fluid className="ride-card">
      <Row>
        <Col>
          <div
            className="allign "
            style={{ marginBottom: "10px", paddingBottom: "10px" }}
          >
            <h4>{name}</h4>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <p>
            <span style={{ fontSize: "x-large" }} className="bold">
              <b>19.55</b>
            </span>
            <br />
            <b>{board}</b>
          </p>
        </Col>
        <Col>
          <div className="allign">
            <b>{arrow}</b>
          </div>
        </Col>
        <Col>
          <div>
            <p>
              <span style={{ fontSize: "x-large" }} className="bold">
                <b>19.55</b>
              </span>
              <br />
              <b>{dest}</b>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <b style={{ fontSize: "xx-large" }}>{cost}</b>
          </div>
        </Col>

        <Col>
          <div className="">
            <ButtonElement
              insideText={"Show more"}
              // onClick={navigateToLogin}
              buttonType={"ride-show-more"}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
}

export default RideCard;
