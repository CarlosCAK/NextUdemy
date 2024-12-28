import React, { useState } from 'react'

const form = () => {

    const [nome,setNome] = useState<string>("");
    const [idade,setIdade] = useState<number>(0);

    function salvarUsuario(){
      fetch('http://localhost:3000/api/form',{
        method : 'POST',
        body: JSON.stringify({nome,idade})
      })
    }
    
  return (
    <div>
        <h1>Integrando com api 02</h1>
        <input type="text" value={nome}
        onChange={(e) => setNome(e.target.value)}
        />
        <input type="number"value={idade}
        onChange={e => setIdade(+e.target.value)} />
        <button onClick={salvarUsuario}></button>
    </div>
  )
}

export default form