import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkedOutTime, setCheckedOutTime] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, checkInTime, setCheckInTime, checkedOutTime, setCheckedOutTime }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
