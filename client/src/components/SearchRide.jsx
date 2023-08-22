import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SearchRide({ children }) {
  return (
    <Form className="search-ride-form ">
      <h4 style={{ marginBottom: "30px", marginTop: "30px" }}>
        {" "}
        Search Available Rides
      </h4>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>City</Form.Label>

        <Form.Select defaultValue="Choose...">
          <option>Guwahati</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Banglore</option>
          <option>Delhi</option>
          <option>Hyderabad</option>
        </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Day</Form.Label>
          <Form.Control placeholder="01" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Month</Form.Label>
          <Form.Control placeholder="01" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Year</Form.Label>
          <Form.Control placeholder="2023" variant="dark" />
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}
