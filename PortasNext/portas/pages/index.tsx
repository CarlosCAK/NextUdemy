"use client";


import { use, useState } from "react";
import Porta from "../Components/Porta";
import Presente from "../Components/Presente";
import PortaModel from "../Model/porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import Cartao from "@/Components/Cartao";
import Link from 'next/link'
import EntradaNumerica from "@/Components/EntradaNumerica";


export default function Formulario() {

  const [quantidadePortas, setQtDePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex">
      <Cartao bgcolor="bg-red-500">
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao >
        <EntradaNumerica text="Qtde Portas" 
        value={quantidadePortas} 
        onChange={novaQtde => setQtDePortas(novaQtde)}/>
      </Cartao>
      </div>
      <div className="flex">
        <Cartao>
          <EntradaNumerica text="Porta com presente" 
          value={comPresente}
          onChange={novoLugarPresente => setComPresente(novoLugarPresente)}/>
        </Cartao>
        <Cartao bgcolor="bg-green-600">
          <Link href={`/jogo/${quantidadePortas}/${comPresente}`}>
            <h2 className="flex-1 m-0 flex">Iniciar</h2>
          </Link>
        </Cartao>
      </div>
      
     

       

    </div>
  );
}
