import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function RideCard({
  name = "fdsf",
  wallet,
  arrow = "---->",
  departure,
  board = "Guwahati",
  dest = "Campus",
  cost = "1600 Rs",
}) {
  return (
    <Container flex className="ride-card">
      <Row>
        <Col>{name}</Col>
      </Row>
      <Row>
        <Col>
          <p>
            19.55
            <br />
            {board}
          </p>
        </Col>
        <Col>
          <p>{arrow}</p>
        </Col>
        <Col>
          <p>
            19.55
            <br />
            {dest}
          </p>
        </Col>
        <Col>
          {" "}
          <p>{cost}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default RideCard;
