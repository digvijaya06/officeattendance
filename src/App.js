import React from "react";
import AppRouter from "./AppRouter";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <ToastContainer/>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
