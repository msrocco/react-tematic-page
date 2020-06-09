import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Carro.css";

function Carro(props) {
  return (
    <Container className="carro" >
      <Row>
        <Col className="capa">
          <img src={props.imgCapa} alt={props.name}/>
        </Col>

        <Col className="infos">
          <p>{props.name}</p>
          <p>{props.motor}</p>
          <p>{props.power}</p>
          <p>{props.production}</p>
          <p>{props.price}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Carro;
