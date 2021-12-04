import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResultLacar from "../components/ResultLacar";
import NavBar from "../components/NavBar";

const Lacar = () => {
  return (
    <div>
      <NavBar />

      <Container>
        <Row>
          <Col>
            <ResultLacar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lacar;
