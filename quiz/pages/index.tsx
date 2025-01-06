
import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";



const BASE_URL = 'http://quiz-next-sepia.vercel.app/api'

export default function Home() {
  
  const router = useRouter()
  const [idsDasQuestoes, setIdDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
 
  async function carregarIdsDasQuestoes(){
    const resposta = await fetch(`${BASE_URL}/questionario`)
    
    const idsDasQuestoes = await resposta.json()

    setIdDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao:number){
    const resposta = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    
    const json = await resposta.json()

    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)

    setQuestao(novaQuestao)

  }
  useEffect(() => {
    carregarIdsDasQuestoes();
  }, [])

  useEffect(() => {

    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])

  }, [idsDasQuestoes])


  
  function questaoRespondida(questaoRespondida : QuestaoModel){
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou 
    setRespostasCertas(respostasCertas +  (acertou ?  1 : 0 ))
  }

  function idProximaPergunta(){
    if(questao){
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1 
      return idsDasQuestoes[proximoIndice]
    }
 
  }

  function irParaOProximoPasso(){
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  function irPraProximaQuestao(proximoId : number){
    carregarQuestao(proximoId)
  }

  function finalizar(){
      router.push({
        pathname: '/resultado',
        query:{
          total : idsDasQuestoes.length,
          certas : respostasCertas
        }
      })
  }

  
    return questao && (

        <Questionario

          questao={questao}
          ultima={idProximaPergunta() === undefined}
          questaoRespondida={questaoRespondida}
          irParaOProximoPasso={irParaOProximoPasso}
        
        />
    );
;
}
