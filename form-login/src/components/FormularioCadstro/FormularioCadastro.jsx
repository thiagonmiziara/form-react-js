import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

function FormularioCadastro({aoEnviar,validarCPF}) {
  
  return(
    <>
    <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
    <DadosUsuario/>
    </>
  );
}
export default FormularioCadastro;
