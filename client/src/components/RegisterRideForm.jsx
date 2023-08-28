import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function RegisterRideForm({
  onSubmit,
  boarding,
  destination,
  city,
  price,
  gender,
  handleInputChange,
  Date,
}) {
  return (
    <Form className="search-ride-form " onSubmit={onSubmit}>
      <h4 style={{ marginBottom: "30px", marginTop: "30px" }}>
        {" "}
        Register Ride
      </h4>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="boarding">
          <Form.Label>Borading Point</Form.Label>
          <Form.Control
            type="text"
            name="boarding"
            value={boarding}
            onChange={handleInputChange}
            placeholder="Jalukbari"
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            value={destination}
            onChange={handleInputChange}
            placeholder="Campus"
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>

          <Form.Select
            name="city"
            value={city}
            onChange={handleInputChange}
            required
            defaultValue="guwahati"
          >
            <option value="guwahati">Guwahati</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Banglore">Banglore</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="price">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            placeholder=""
            type="number"
            name="price"
            value={price}
            onChange={handleInputChange}
            defaultValue={98872752}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="gender">
          <Form.Label>gender</Form.Label>

          <Form.Select
            name="gender"
            value={gender}
            onChange={handleInputChange}
            required
            defaultValue="Male"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-4" controlId="city"></Form.Group>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            // placeholder="01"
            name="Date"
            type="Date"
            value={Date}
            defaultValue="07"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}
