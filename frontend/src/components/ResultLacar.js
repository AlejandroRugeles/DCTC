/* import React from "react";
import { Container, Row, CardGroup, Card, Button } from "react-bootstrap";
import Manzana from "../assets/img/manzana.jpg";

const ResultList = () => {
  var selProduct = localStorage.getItem("selProduct");

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
        photo: "../assets/img/uvas.jpg",
      },
      { title: "Fresas", price: 1800, measure: "libra", photo: "photourl" },
    ],
    vegetables: [
      { title: "Brocoli", price: 2500, measure: "unidad", photo: "photourl" },
      { title: "Apio", price: 1400, measure: "unidad", photo: "photourl" },
      { title: "Espinaca", price: 1000, measure: "unidad", photo: "photourl" },
    ],
    dairy: [
      {
        title: "Queso campesino",
        price: 4000,
        measure: "libra",
        photo: "photourl",
      },
      { title: "Jamón", price: 4800, measure: "libra", photo: "photourl" },
      {
        title: "Leche entera",
        price: 2400,
        measure: "litro",
        photo: "photourl",
      },
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
            <Button
              variant="primary"
              /*               onClick={() => manageCar("add", item.title)} */
/*>
              Comprar
            </Button>
          </Card.Body>
        </Card>
      );

      cards.push(card);
    });

    return cards;
  };
  /* 
  const manageCar = (action, product) => {
    var carrito = JSON.parse(localStorage.getItem("carrito"));
    if (action == "add") {
      carrito.push(product);
    } else {
      carrito.pop(product);
    }
  }; */
/*
  return (
    <Container>
      <Row>
        <CardGroup>{renderCards(selProduct)}</CardGroup>
      </Row>
    </Container>
  );
};

export default ResultList;
 */

//----------------------------------------------------------------------------------------

import React from "react";
import { Container, Row, CardGroup, Card, Button } from "react-bootstrap";

import Queso from "../assets/img/queso.jpg";
import Leche from "../assets/img/leche.jpg";
import Jamon from "../assets/img/jamon.jpg";

const ResultLacar = () => {
  const listData = {
    dairy: [
      {
        title: "Queso campesino",
        price: 4000,
        measure: "libra",
        photo: Queso,
      },
      { title: "Jamón", price: 4800, measure: "libra", photo: Jamon },
      {
        title: "Leche entera",
        price: 2400,
        measure: "litro",
        photo: Leche,
      },
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
        <CardGroup>{renderCards("dairy")}</CardGroup>
      </Row>
    </Container>
  );
};

export default ResultLacar;
