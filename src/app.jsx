import { createContext, useEffect, useState } from "react";
import "./app.css";
import Layout from "./components/layout/layout";
import http from "./utils/http";

export const UserContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    http
      .get("/user-profile")
      .then((res) => {
        setLoggedUser(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <UserContext.Provider value={loggedUser}>
      <Layout />
    </UserContext.Provider>
  );
}

export default App;
