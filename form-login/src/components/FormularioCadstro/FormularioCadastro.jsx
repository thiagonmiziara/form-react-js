import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Nome"
        color="secondary"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Sobrenome"
        color="secondary"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="CPF"
        color="secondary"
        variant="outlined"
      />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="secondary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormularioCadastro;
