import React, { useState } from "react";
import "./Carros.css";
import { Container, Row, Col } from "react-bootstrap";
import Carro from "./Carro";
import carros from "./data/carros.json";

function Carros() {
  const [conteudoDisplay, setConteudoDisplay] = useState("none");
  const [msgDisplay, setMsgDisplay] = useState("block");
  const [carro, setCarro] = useState({
    name: "",
    motor: "",
    power: "",
    production: "",
    price: "",
    imgCapa: "",
    imgCapa2: "",
    info: "",
  });

  return (
    <Container fluid>
      <Row>
        <Col xs="8">
          <Row xs="12">
            {carros.map((carro, index) => {
              return (
                <Col
                  xs="4"
                  key={index}
                  onClick={() => {
                    setCarro(carro);
                    setMsgDisplay("none");
                    setConteudoDisplay("block");
                  }}
                >
                  <Carro
                    imgCapa={carro.imgCapa}
                    name={carro.name}
                    motor={carro.motor}
                    power={carro.power}
                    production={carro.production}
                    price={carro.price}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs="4" className="painel">
          <div id="right-message" style={{ display: msgDisplay }}>
            <p>Clique na imagem para exibir mais detalhes!</p>
          </div>

          <div className="right-content" style={{ display: conteudoDisplay }}>
            <p className="conteudo-titulo">{carro.name}</p>
            <img id="conteudo-imagem" src={carro.imgCapa2} alt="" />
            <p id="car_info">{carro.info}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Carros;
