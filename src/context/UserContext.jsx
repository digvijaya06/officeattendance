import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [abc, setAbc] = React.useState(() => {
    const storedAbc = localStorage.getItem('abc');
    return storedAbc ? JSON.parse(storedAbc) : null;
  });
  const [checkInTime, setCheckInTime] = React.useState(null);
  const [checkedOutTime, setCheckedOutTime] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  React.useEffect(() => {
    if (abc) {
      localStorage.setItem('abc', JSON.stringify(abc));
    } else {
      localStorage.removeItem('abc');
    }
  }, [abc]);

  return (
    <UserContext.Provider value={{ user, setUser, abc, setAbc, checkInTime, setCheckInTime, checkedOutTime, setCheckedOutTime }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
