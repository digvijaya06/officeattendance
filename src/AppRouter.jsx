import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/home" element={<Home />} />
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/user' element={<UserPage/>}/>
    </Routes>
  );
};

export default AppRouter;
