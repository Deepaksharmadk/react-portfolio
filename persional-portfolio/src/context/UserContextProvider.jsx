import { useState } from "react";
import UserContext from "./UserContext";
import Header from "../components/Header/Header";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
