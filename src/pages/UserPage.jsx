import React from "react";
import Attendance from "../components/Attendance";
import { Container, Row, Col, Card } from "react-bootstrap";

function UserPage() {
  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h1 className="text-primary fw-bold">Welcome User</h1>
              <p className="text-muted mb-4">This is the User Dashboard</p>

              <Attendance />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPage;
