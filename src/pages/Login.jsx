import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (email.trim() && password.trim()) {
      const status = login(email, password);
     
      if (status === "success") {
        toast.success("Login successful!")
        navigate("/dashboard");
   // Navigate to dashboard if login is successful
      } else {
        toast.error("Invalid email or password.");
      }
    } else {
      toast.error("Please enter your email and password");
    }
  };

  return (
    <div>
      <ToastContainer/>
      <h1>Employee Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
