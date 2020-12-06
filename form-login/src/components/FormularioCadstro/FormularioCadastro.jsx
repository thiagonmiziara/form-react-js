import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Nome"
        color="secondary"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Sobrenome"
        color="secondary"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="CPF"
        color="secondary"
        variant="outlined"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked />}
      />

      <Button variant="contained" color="secondary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormularioCadastro;
