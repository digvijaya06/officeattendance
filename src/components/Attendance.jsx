import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Attendance.css";

export default function Attendance() {
  const {
    checkedIn,
    checkIn,
    checkOut,
    userName,
    attendance,
    logout,
    isLoggedIn,
  } = useContext(UserContext);

  const [status, setStatus] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const getToday = () => new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/"); // Redirect to login if not logged in
      return;
    }

    const today = getToday();
    const userData = attendance[userName];

    if (checkedIn && userData?.lastCheckOut === today) {
      setButtonDisabled(true);
    } else if (!checkedIn && userData?.lastCheckIn === today) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }

    setStatus(
      checkedIn
        ? `${userName}, you are CHECKED IN`
        : `${userName}, you are CHECKED OUT`
    );
  }, [checkedIn, attendance, userName, isLoggedIn, navigate]);

  const handleClick = () => {
    
    let result = "";

    if (checkedIn) {
      result = checkOut(userName);
    } else {
      result = checkIn(userName);
    }

    if (result === "alreadyCheckedIn") {
      alert("You have already checked in today.");
    } 
    else if (result === "alreadyCheckedOut") {
      alert("You have already checked out today.");
    }
  };

  const handleLogout = () => {
    logout(); // clears state
    navigate("/"); // go back to login
  };

  return (
    <Container className="mt-5 text-center">
      <Card className="p-5 shadow-lg">
        <h2 className="mb-4">{status}</h2>
        <Button
          variant={checkedIn ? "danger" : "success"}
          className={`animated-button ${checkedIn ? "checkout" : "checkin"}`}
          onClick={handleClick}
          disabled={buttonDisabled}
        >
          {checkedIn ? "Check Out" : "Check In"}
        </Button>
        {buttonDisabled && (
          <p className="mt-3 text-danger fw-bold">
            You have already completed this action today.
          </p>
        )}
        <hr />
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </Container>
  );
}
