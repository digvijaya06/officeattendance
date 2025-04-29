import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

const Logout = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    toast.success('Successfully logged out');
    navigate('/');
  }, [setUser, navigate]);

  return null;
};

export default Logout;
