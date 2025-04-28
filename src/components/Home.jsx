import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./Home.css";

function Home() {
  const { isLoggedIn, login, logout, userName } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const status = login(email, password);
    if (status === "success") {
      setMessage("Login successful!");
      setEmail("");
      setPassword("");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    logout();
    setMessage("Logged out successfully.");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: "400px", borderRadius: "20px" }}>
        <h3 className="text-center mb-4">Office Login</h3>

        {!isLoggedIn ? (
          <>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-4">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button className="btn btn-primary w-100" onClick={handleLogin}>
               Log In
            </button>
          </>
        ) : (
          <>
            <h5 className="text-center mb-3">Welcome, {userName} </h5>
            <button className="btn btn-danger w-100" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}

        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </div>
    </div>
  );
}

export default Home;
