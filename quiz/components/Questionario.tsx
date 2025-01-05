import QuestaoModel from '@/model/questao'
import React from 'react'
import Questao from './Questao'
import Botao from './Botao'

interface QuestionarioProps {
    questao: QuestaoModel,
    ultima: boolean,
    questaoRespondida: (questao: QuestaoModel) => void,
    irParaOProximoPasso: () => void
}



const Questionario = (props: QuestionarioProps) => {
   
    function respostaFornecida(indice: number) {
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.respoderCom(indice))
        }
    }
   
    return (

        <div className='flex flex-col justify-center items-center h-screen'>
            {props.questao && (
                <Questao
                    valor={props.questao}
                    tempoParaResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irParaOProximoPasso}
                />
            )}

            <Botao
                onClick={props.irParaOProximoPasso}
                texto={props.ultima ? 'Finalizar ' : 'Proximo'}
            />
        </div>
    )
}

export default Questionario