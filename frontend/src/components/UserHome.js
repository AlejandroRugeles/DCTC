import React from "react";
import { Container, Row, Card } from "react-bootstrap";

import lacar from "../assets/img/lacar.png";
import Button from "react-bootstrap/Button";
import fruticas from "../assets/img/fruticas.png";
import verduras from "../assets/img/verduras.png";
import CardGroup from "react-bootstrap/CardGroup";

const UserHome = () => {
  const buttonClick = (option) => {
    localStorage.setItem("product", option);
  };
  return (
    <Container>
      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={lacar} width="100" height="220" />
            <Card.Body>
              <Button
                variant="primary"
                href="/Lacar"
                onClick={() => buttonClick("Lacar")}
              >
                LACTEOS Y CARNES
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={fruticas} width="100" height="220" />
            <Card.Body>
              <Button
                variant="primary"
                href="/Frutas"
                onClick={() => buttonClick("Frutas")}
              >
                FRUTAS
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={verduras} width="100" height="220" />
            <Card.Body>
              <Button
                variant="primary"
                href="/Vegetales"
                onClick={() => buttonClick("Verduras")}
              >
                VERDURAS
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default UserHome;
