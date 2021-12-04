import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../assets/img/Fruver.png";
import Image from "react-bootstrap/Image";

const NavBarR = (props) => {
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
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarR;
