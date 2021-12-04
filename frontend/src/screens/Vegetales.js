import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResultVegetales from "../components/ResultVegetales";
import NavBar from "../components/NavBar";

const Vegetales = () => {
  return (
    <div>
      <NavBar />

      <Container>
        <Row>
          <Col>
            <ResultVegetales />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vegetales;
