import QuestaoModel from '@/model/questao'
import React from 'react'
import Enunciado from './Enunciado'
import Resposta from './Resposta'
import Temporizador from './Temporizador'

interface QuestaoProps{
    valor : QuestaoModel,
    tempoParaResposta? : number
    respostaFornecida : (indice : number) => void,
    tempoEsgotado : () => void,


}
const letras = [
  {valor: 'A', cor: "bg-yellow-400"},
  {valor: 'B', cor: "bg-pink-400"},
  {valor: 'C', cor: "bg-blue-400"},
  {valor: 'D', cor: "bg-green-400"},
]

const Questao = (props : QuestaoProps) => {
    const questao = props.valor

    function renderizarRespostas(){
      return questao.respostas.map((resposta,i ) => {
        return (
        <Resposta 
        key={`${questao.id}-${i}`}
        letra={letras[i].valor} 
        indice={i} 
        corFundoLetra={letras[i].cor}
        valor={resposta}
        respostaFornecida={props.respostaFornecida}/>
        )
      })
    }
  return (
    <div className="flex flex-col items-center">
        <Enunciado texto={props.valor.enunciado}/>
        <Temporizador key={questao.id} duracao={props.tempoParaResposta ?? 10} 
        tempoEsgotado={props.tempoEsgotado}/>
        {renderizarRespostas()}
      </div>
  )
}

export default Questao