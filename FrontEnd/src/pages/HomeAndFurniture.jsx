import React, { useState, createContext, useContext } from "react";
import Navbar from '../components/Navbar';

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Aswin");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  const user = useContext(UserContext);
  return <p>{`Welcome back, ${user}`}</p>;
}

const HomeandFurniture = () => {
  return (
    <>
      <Navbar />
      <div>
        <Component1 />
      </div>
    </>
  );
}

export default HomeandFurniture;
