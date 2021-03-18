import React from "react";
import {useParams, useLocation} from "react-router-dom";

function Perfil() {
  let {id} = useParams();
  return <div>Soy Perfil: {id} </div>;

}

export default Perfil;