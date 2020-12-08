import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetatos, setDados] = useState("");

  useEffect(() => {
    if (etapaAtual === formulario.length - 1) aoEnviar(dadosColetatos);
  });

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
    <Typography variant="h4" align="center" color="textPrimary">
      Obrigado pelo Cadastro!
    </Typography>,
  ];
  function coletarDados(dados) {
    setDados({ ...dadosColetatos, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
