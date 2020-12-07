import React from "react";
import { TextField, Button } from "@material-ui/core";
function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        fullWidth
        margin="normal"
        color="primary"
        variant="outlined"
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        fullWidth
        margin="normal"
        color="primary"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default DadosUsuario;
