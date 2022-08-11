import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import ErrorComponente from "./Error";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

// const [SelectCriptoMonedas] = useSelectMonedas("Elije tu Criptomoneda");

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu moneda", monedas);
  const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas(
    "Elije tu Cripto Moneda",
    criptos
  );

  useEffect(() => {
    const cnosultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      console.log("cargandooo");
      const respouesta = await fetch(url);
      const resultado = await respouesta.json();
      // console.log(resultado.Data);

      const arraydeCripto = resultado.Data.map((cripto) => {
        const objetoCripto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objetoCripto;
      });
      console.log("cargado completo ");
      setCriptos(arraydeCripto);
    };
    cnosultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);

      return;
    }
    setError(false);
    setMonedas({ moneda, criptomoneda });
  };

  return (
    <>
      {error && (
        <ErrorComponente>Todos los campos son obligatorios</ErrorComponente>
      )}
      <form onSubmit={handleSubmit}>
        <SelectMonedas></SelectMonedas>
        {/* {moneda} */}
        <SelectCriptoMonedas></SelectCriptoMonedas>
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
