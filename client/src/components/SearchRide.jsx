import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SearchRide({
  onSubmit,
  city,
  day,
  month,
  year,
  handleInputChange,
}) {
  return (
    <Form className="search-ride-form " onSubmit={onSubmit}>
      <h4 style={{ marginBottom: "30px", marginTop: "30px" }}>
        {" "}
        Search Available Rides
      </h4>

      <Form.Group className="mb-3" controlId="city">
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

      <Row className="mb-3">
        <Form.Group as={Col} controlId="day">
          <Form.Label>Day</Form.Label>
          <Form.Control
            placeholder="01"
            type="number"
            name="day"
            value={day}
            onChange={handleInputChange}
            defaultValue="07"
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="month">
          <Form.Label>Month</Form.Label>
          <Form.Control
            placeholder="01"
            name="month"
            type="number"
            value={month}
            defaultValue="07"
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            placeholder="2023"
            name="year"
            type="number"
            defaultValue="2002"
            value={year}
            onChange={handleInputChange}
            required
            variant="dark"
          />
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}
