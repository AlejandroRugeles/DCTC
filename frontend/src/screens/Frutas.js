import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResultFrutas from "../components/ResultFrutas";
import NavBar from "../components/NavBar";

const Frutas = () => {
  return (
    <div>
      <NavBar />

      <Container>
        <Row>
          <Col>
            <ResultFrutas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Frutas;
