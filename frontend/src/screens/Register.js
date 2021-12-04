import React, { Component } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import NavBarR from "../components/NavBarR";
import Logo from "../assets/img/bregister.jpg";
import UserDataService from "../services/user.service";

/* 
export default class Register extends Component {
  constructor(props) {}
  render(){return(

  )}
}
*/
const Register = () => {
  const registerForm = {
    nombres: "",
    dir: "",
  };
  function onchange(e) {
    registerForm[e.target.name] = e.target.value;
    //console.log(registerForm);
  }
  function sendData() {
    alert(JSON.stringify(registerForm));
    UserDataService.create(registerForm)
      .then((respuesta) => {
        console.log(respuesta);
        //Si se guardo, redict, modal
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div style={{ backgroundImage: `url(${Logo})`, backgroundSize: "cover" }}>
      <NavBarR />
      <Container
        style={{ maxWidth: "600px", marginLeft: "50%" }}
        className="mt-5"
      >
        <div align="center" className={("fw-bold", "fs-3")}>
          {" "}
          REGISTRO DE NUEVO USUARIO{" "}
        </div>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              name="nombres"
              onChange={onchange}
              placeholder="Ingrese nombres y apellidos aquí"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="dir"
              onChange={onchange}
              placeholder="Dirección con calle, manzana, etc..."
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="Phone"
                placeholder="Celular o teléfono de contacto"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mt-5" as={Col} controlId="formGridUserName">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group className="mt-3" as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mt-3" as={Col} controlId="formGridPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme su contraseña"
              />
            </Form.Group>
          </Row>

          <Row>
            <Col> </Col>
            <Col>
              <Button
                className="mt-5"
                variant="primary"
                type="cancel"
                size="lg"
              >
                Cancelar
              </Button>
            </Col>

            <Col>
              <Button
                onClick={sendData}
                className="mt-5"
                variant="primary"
                size="lg"
              >
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
