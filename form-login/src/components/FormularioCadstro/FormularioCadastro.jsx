import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome + " " + sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tmpNome = event.target.value;
          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substring(0, 3);
          }
          setNome(tmpNome);
        }}
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Nome"
        color="secondary"
        variant="outlined"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
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
        boxShadow={3}
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
