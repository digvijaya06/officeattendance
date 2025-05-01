import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Card } from "react-bootstrap";

function AdminPage() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    setAttendanceRecords(records);
  }, []);

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h1 className="mb-3 text-success fw-bold">Welcome Admin</h1>
              <p className="mb-4 text-muted">This is the Admin Dashboard</p>

              <h2 className="mb-4">Attendance Records</h2>

              {attendanceRecords.length === 0 ? (
                <p className="text-danger">No attendance records found.</p>
              ) : (
                <Table striped bordered hover responsive className="text-center">
                  <thead className="table-success">
                    <tr>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Check In Time</th>
                      <th>Check Out Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceRecords.map((record, index) => (
                      <tr key={index}>
                        <td>{record.userName}</td>
                        <td>{record.userEmail}</td>
                        <td>{record.checkInTime}</td>
                        <td>{record.checkedOutTime || "Not checked out yet"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
