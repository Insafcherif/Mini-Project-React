import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
const formStyle = {width: '400px', marginLeft:"350px", marginTop:"100px"}

function SingnIn() {
  return (
    <Form style={formStyle}>
    <Form>
    <Row>
      <Col>
        <Form.Label>First name</Form.Label>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Label>Last name</Form.Label>
        <Form.Control placeholder="Last name" />
      </Col>
    </Row>
  </Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default SingnIn