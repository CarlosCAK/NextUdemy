// import React, { useEffect, useState } from 'react'

// const questao = () => {
    
//     const [questao, setQuestao] = useState(null)


//     useEffect(() => {
//         fetch("http://localhost:3000/api/questao/123")
//         .then(resp => resp.json())
//         .then(setQuestao) 
//     }, [])

//     const renderizarResposta = () => {
//         if(questao){
//             return questao.resposta.map((questao,i) => {
//                 return <li key={i}>{questao}</li>   
//             })
//         }
        
//         return false
        
//     }

  

  
//     return (
//     <div>
//         questao
//         <div>
//             <span>id: {questao?.id} {questao?.enunciado}</span>
//             <ul>
//                 {renderizarResposta()}
//             </ul>
//         </div>
//         </div>
//   )
// }

// export default questao