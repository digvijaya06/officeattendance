import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, checkInTime, setCheckInTime, checkedOutTime, setCheckedOutTime } = useUser();

  const handleLogout = () => {
    setUser(null); // Logging out
    toast.success('Successfully logged out');
    navigate('/');
  };

  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now.toLocaleString());
    toast.success('Checked In Successfully!');
  };

  const handleCheckOut = () => {
    const now = new Date();
    setCheckedOutTime(now.toLocaleString());
    toast.info('Checked Out Successfully!');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={4} className="mx-auto p-4 border rounded shadow-sm">
          <Card>
            <Card.Body className="text-center">
              {/* Displaying Welcome Message */}
              <Card.Title>Welcome, {user ? user : 'Guest'}</Card.Title>

              {/* Check In and Check Out Buttons */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button variant="success" className="w-50" onClick={handleCheckIn} disabled={checkInTime !== null}>
                  Check In
                </Button>
                <Button variant="danger" className="w-50" onClick={handleCheckOut} disabled={!checkInTime || checkedOutTime !== null}>
                  Check Out
                </Button>
                <Button variant='secondary' onClick={handleLogout}>Logout</Button>
              </div>
              {/* Display Check In and Check Out Times */}
              <div className="mt-3 text-center">
                {checkInTime && <p>Checked In At: {checkInTime}</p>}
                {checkedOutTime && <p>Checked Out At: {checkedOutTime}</p>}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
