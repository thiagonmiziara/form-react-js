import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetatos, setDados] = useState("");
  
  useEffect(() => {
   console.log(dadosColetatos);
  });

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
  ];
  function coletarDados(dados){
    setDados({...dadosColetatos, ...dados});
       proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formulario[etapaAtual]}</>;
}

export default FormularioCadastro;
