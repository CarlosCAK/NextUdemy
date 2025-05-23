import RespostaModel from '@/model/resposta'
import React from 'react'

interface RespostaProps {
    valor: RespostaModel,
    indice: number,
    letra: string,
    corFundoLetra: string,
    respostaFornecida: (indice: number) => void
}

const Resposta = (props: RespostaProps) => {
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? '[transform:rotateY(180deg)]' : ""
    return (
        <div className='flex h-24 w-4/5 m-3 min-w-[500px] [perspective:1000px]'
            onClick={() => props.respostaFornecida(props.indice)}>
            <div className={`relative flex flex-1 ${respostaRevelada} [transform-style:preserve-3d] t duration-700 transform`}>

                <div className='frente bg-white text-black flex items-center rounded-xl p-4 h-full w-full absolute [-webkit-backgface-visibility:hidden] '>
                    <div className={`letra ${props.corFundoLetra} h-10 w-10 flex justify-center items-center rounded-3xl text-2xl font-bold mr-5 text-white`}>
                        {props.letra}
                    </div>
                    <div className='valor font-bold text-2xl'>
                        {resposta.valor}
                    </div>
                </div>

                (
                <div className='verso flex h-full  w-full absolute [-webkit-backgface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                    {
                        resposta.certa ?
                            (
                                <div className='flex-col flex justify-center items-center bg-green-600  flex-1 rounded-xl'>
                                    <div>A resposta certa é...</div>
                                    <div className='texto text-2xl font-bold'>{resposta.valor}</div>
                                </div>
                            ) :
                            (
                                <div className='flex-col flex  justify-center items-center bg-red-500 flex-1 rounded-xl'>
                                    <div>A resposta informada está errada...</div>
                                    <div className='texto text-2xl font-bold'>{resposta.valor}</div>
                                </div>
                            )
                    }
                </div>
                )



            </div>

        </div>
    )
}

export default Resposta