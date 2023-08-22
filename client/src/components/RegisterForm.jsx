import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SearchRide({
  onSubmit,
  firstName,
  lastName,
  city,
  contactNo,
  gender,
  handleInputChange,
  password,
}) {
  return (
    <Form className="search-ride-form " onSubmit={onSubmit}>
      <h4 style={{ marginBottom: "30px", marginTop: "30px" }}>
        {" "}
        Search Available Rides
      </h4>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="01"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            defaultValue="Brajendra"
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="01"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            defaultValue="Suman acc2"
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

        <Form.Group as={Col} controlId="contactNo">
          <Form.Label>Contact No</Form.Label>
          <Form.Control
            placeholder="9887275"
            type="number"
            name="contactNo"
            value={contactNo}
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
        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="01"
            name="password"
            type="number"
            value={password}
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
