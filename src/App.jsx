import { useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imgCripto.png";

import Formulario from "./components/formulario";

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 44px;

  &:after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100 px auto 0 auto;
  display: block;
`;

function App() {
  const [monedas, setMonedas] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen Criptomonedas"></Imagen>
      <div>
        <Heading> Cotiza Cripto Monedas al Instante</Heading>
        <Formulario setMonedas={setMonedas}></Formulario>
      </div>
    </Contenedor>
  );
}

export default App;
