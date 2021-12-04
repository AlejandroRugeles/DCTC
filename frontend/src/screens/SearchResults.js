import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ResultList from "../components/ResultList";

const SearchResults = () => {
  /* const city = localStorage.getItem("city"); */

  return (
    <Container>
      <Row>
        <Col>
          <ResultList />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
