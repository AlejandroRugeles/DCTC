import React from "react";
import { Container, Row, CardGroup, Card, Button } from "react-bootstrap";

import Brocoli from "../assets/img/brocoli.jpg";
import Apio from "../assets/img/apio.jpg";
import Espinaca from "../assets/img/espinaca.png";

const ResultVegetales = () => {
  const listData = {
    vegetables: [
      { title: "Brocoli", price: 2500, measure: "unidad", photo: Brocoli },
      { title: "Apio", price: 1400, measure: "unidad", photo: Apio },
      { title: "Espinaca", price: 1000, measure: "unidad", photo: Espinaca },
    ],
  };

  const renderCards = (selectedProduct) => {
    var products = listData[selectedProduct];
    var cards = [];
    products.map((item) => {
      var card = (
        <Card>
          <Card.Img variant="top" src={item.photo} width="100" height="200" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.measure}: ${item.price}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      );

      cards.push(card);
    });

    return cards;
  };
  return (
    <Container>
      <Row>
        <CardGroup>{renderCards("vegetables")}</CardGroup>
      </Row>
    </Container>
  );
};

export default ResultVegetales;
