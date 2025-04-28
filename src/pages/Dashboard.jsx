import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { userName, checkedIn, checkIn, checkOut } = useContext(UserContext);

  const handleCheckIn = () => {
    const status = checkIn(userName, "1234");
    if (status === "success") {
      alert("Checked in successfully!");
    } else if (status === "alreadyCheckedIn") {
      alert("Already checked in today!");
    } else if (status === "wrongCode") {
      alert("Invalid code for check-in.");
    }
  };

  const handleCheckOut = () => {
    const status = checkOut(userName, "1234");
    if (status === "success") {
      alert("Checked IN successfully!");
    } else if (status === "alreadyCheckedOut") {
      alert("Already checked out today");
    } else if (status === "wrongCode") {
      alert("Invalid code for check-out.");
    }
  };

  return (
    <div>
      <h1>Welcome, {userName}</h1>
      <button onClick={handleCheckIn} disabled={checkedIn}>
        Check In
      </button>
      <button onClick={handleCheckOut} disabled={!checkedIn}>
        Check Out
      </button>
    </div>
  );
}

export default Dashboard;
