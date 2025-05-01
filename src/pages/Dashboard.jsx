import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, checkInTime, setCheckInTime, checkedOutTime, setCheckedOutTime } = useUser();

  const handleLogout = () => {
    setUser(null); 
    toast.success('Successfully logged out');
    navigate('/');
  };

  const handleCheckIn = () => {
    toast.success('Checked In Successfully!');
  };

  const handleCheckOut = () => {
    toast.info('Checked Out Successfully!');
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
              <Card.Title>Welcome, {user ? user.name : 'Guest'}</Card.Title>
              {user && <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>}

              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button variant="success" className="w-50" onClick={handleCheckIn}>
                  Check In
                </Button>
                <Button variant="danger" className="w-50" onClick={handleCheckOut}>
                  Check Out
                </Button>
                <Button variant="secondary" onClick={handleLogout}>Logout</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                Manage your user profile and settings.
              </Card.Text>
              <Card.Link href="/user" className="btn btn-primary">
                Go to Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
              <Card.Title>Reports</Card.Title>
              <Card.Text>
                Generate and view attendance reports.
              </Card.Text>
              <Card.Link href="/reports" className="btn btn-primary">
                Go to Reports
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
