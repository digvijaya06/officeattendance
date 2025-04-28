import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import Attendance from "./components/Attendance";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserContext } from "./context/UserContext";

export default function AppRouter() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            Office Attendance
          </Link>

          <div className="d-flex align-items-center ms-auto">
            <Link className="nav-link mx-2 text-dark fw-semibold" to="/">
              Home
            </Link>
           
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/logout" element= {<Logout/>} />
        <Route path ="/login" element = {<Login/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/usercontext" element = {<UserContext/>}/>
      </Routes>
    </Router>
  );
}
