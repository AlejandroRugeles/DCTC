import React from "react";

const UserHome = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      User Home
      <h1>Bienvenido {user.name}</h1>
    </div>
  );
};

export default UserHome;
