import React from "react";
import Fondo from "../assets/img/notfound.png";
import "../css/notf.css";

import { Col, Button, Container } from "react-bootstrap";
import NavBarR from "../components/NavBarR";

const NotFound = () => {
  const buttonClick = (option) => {
    localStorage.setItem("Go Back", option);
  };

  return (
    <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover" }}>
      <NavBarR />
      <Container
        style={{
          maxWidth: "1000px",
          marginLeft: "50%",
          marginTop: "50%",
        }}
        className="mt-6"
      >
        <Col>
          <Button
            className="mt-5"
            variant="primary"
            type="cancel"
            size="lg"
            left="10%"
            href="/Home"
            onClick={() => buttonClick("Go Back")}
          >
            Go Back
          </Button>
        </Col>
      </Container>
    </div>
  );
};

export default NotFound;
