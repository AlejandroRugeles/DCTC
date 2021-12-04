import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../assets/img/Fruver.png";
import Image from "react-bootstrap/Image";

const NavBar = (props) => {
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/Login";
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={Logo}
              roundedCircle
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Del campo a tu casa
          </Navbar.Brand>
        </Container>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "50px" }}
              navbarScroll
            >
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Frutas</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Verduras</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Lacteos y carnes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Promociones</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
              <Button
                type="submit"
                class="btn btn-dark"
                onClick={logout} // {{logout}}
              >
                Salir
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
