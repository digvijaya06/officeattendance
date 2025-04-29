import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ToastContainer } from 'react-toastify';
import { UserProvider, useUser } from './context/UserContext';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user } = useUser();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#eee' }}>
      <h3>Office Attendance</h3>
      {user && (
        <a href="/logout">
          <button style={{ padding: '6px 12px' }}>Logout</button>
        </a>
      )}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar /> {/* ✅ Moved inside Router + UserProvider */}
        <AppRouter />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </UserProvider>
  );
}

export default App;
