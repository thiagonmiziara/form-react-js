import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadstro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" color="secondary">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
