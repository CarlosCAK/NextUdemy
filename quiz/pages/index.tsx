
import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useEffect, useRef, useState } from "react";


const questaoMock = new QuestaoModel(1,"Melhor cor?",[
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('preta'),
])
export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>(null);

  useEffect(() => {

    questaoRef.current = questao
  }, [questao])
  
  function respostaFornecida(indice : number){
    setQuestao(questao.respoderCom(indice))
  }
  function tempoEsgotado(){
    if(questao.naoRespondida){
      setQuestao(questao.respoderCom(-1))
    }
  }

  
    return (
      <div className="flex justify-center items-center h-screen">
        <Questao
        respostaFornecida={respostaFornecida}
        valor={questao}
        tempoEsgotado={tempoEsgotado}
        tempoParaResposta={5}
        />
      </div>
    );
;
}
