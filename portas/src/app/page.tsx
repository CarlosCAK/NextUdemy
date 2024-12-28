"use client";


import { useState } from "react";
import Porta from "../../Components/Porta";
import Presente from "../../Components/Presente";
import PortaModel from "../../Model/porta";
import { atualizarPortas, criarPortas } from "../../functions/portas";

export default function Home() {
  const  [p1,setP1] = useState(new PortaModel(1))
  const [texto, setTexto] = useState("...")

  const [portas,setPortas] = useState(criarPortas(3,2))

  function renderizarPortas(){

    return portas.map((porta) => {
      return (
        <Porta value={porta} key={porta.numero} onChange={novaPorta => setPortas(atualizarPortas(portas,novaPorta))}></Porta>
      )
    })
  }

  return (
    <div className="flex">
      {renderizarPortas()}
       

    </div>
  );
}
