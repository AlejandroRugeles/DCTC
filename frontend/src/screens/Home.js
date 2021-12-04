import React from "react";
import NavBar from "../components/NavBar";
import UserHome from "../components/UserHome";
import { Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  if (user == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavBar />
      <h3 align="center">Bienvenido {user.name}</h3>
      <Container>
        <Row>
          <Col>
            <UserHome />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
