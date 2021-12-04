import React from "react";
import { Container, Row, CardGroup, Card, Button } from "react-bootstrap";
import Manzana from "../assets/img/manzana.jpg";
import Uvas from "../assets/img/uvas.jpg";
import Fresas from "../assets/img/Fresas2.jpg";
import Brocoli from "../assets/img/brocoli.jpg";
import Apio from "../assets/img/apio.jpg";
import Espinaca from "../assets/img/espinaca.png";
import Queso from "../assets/img/queso.jpg";
import Leche from "../assets/img/leche.jpg";
import Jamon from "../assets/img/jamon.jpg";

const ResultFrutas = () => {
  const listData = {
    fruits: [
      {
        title: "Manzana",
        price: 1200,
        measure: "unidad",
        photo: Manzana,
      },
      {
        title: "Uvas",
        price: 1500,
        measure: "libra",
        photo: Uvas,
      },
      { title: "Fresas", price: 1800, measure: "libra", photo: Fresas },
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
        <CardGroup>{renderCards("fruits")}</CardGroup>
      </Row>
    </Container>
  );
};

export default ResultFrutas;
