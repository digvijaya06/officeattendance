import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function Logout(){
  const { logout } = useContext(UserContext);

  useEffect (() => {
    logout();
  }, [logout]);
  return null;
}
