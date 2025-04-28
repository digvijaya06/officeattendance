import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  // Add predefined email credentials for login
  const [userCredentials] = useState({
    "user@example.com": { password: "password123", name: "John Doe" },
    "admin@example.com":{password: "489admin", name: "admin"}
  });

  const [attendance, setAttendance] = useState(() => {
    const saved = localStorage.getItem("attendance");
    return saved ? JSON.parse(saved) : {};
  });

  const [checkedIn, setCheckedIn] = useState(false);

  const login = (email, password) => {
    // Check for user credentials dynamically
    const user = userCredentials[email];
    if (user && user.password === password) {
      setIsLoggedIn(true);
      setUserName(user.name);
      return "success";
    }
    return "invalid";
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
  };

  const getToday = () => new Date().toISOString().slice(0, 10);

  const checkIn = (userName, code) => {
    if (code !== "1234") {
      return "wrongCode";
    }
    const today = getToday();
    const userData = attendance[userName] || {};

    if (userData.lastCheckIn === today) {
      return "alreadyCheckedIn";
    }

    const newAttendance = {
      ...attendance,
      [userName]: {
        ...userData,
        lastCheckIn: today,
      },
    };
    setAttendance(newAttendance);
    setCheckedIn(true);
    localStorage.setItem("attendance", JSON.stringify(newAttendance));
    return "success";
  };

  const checkOut = (userName, code) => {
    if (code !== "1234") {
      return "wrongCode";
    }
    const today = getToday();
    const userData = attendance[userName] || {};

    if (userData.lastCheckOut === today) {
      return "alreadyCheckedOut";
    }

    const newAttendance = {
      ...attendance,
      [userName]: {
        ...userData,
        lastCheckOut: today,
      },
    };
    setAttendance(newAttendance);
    setCheckedIn(false);
    localStorage.setItem("attendance", JSON.stringify(newAttendance));
    return "success";
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userName,
        login,
        logout,
        attendance,
        checkedIn,
        checkIn,
        checkOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
