import React from "react";
import NavBar from "../components/NavBar";
import UserHome from "../components/UserHome";
import { Navigate } from "react-router-dom";

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (user == undefined) {
    return <Navigate to="/Login" />;
  }

  return (
    <div>
      <NavBar />
      <UserHome />
    </div>
  );
};

export default Home;
