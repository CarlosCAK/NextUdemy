import React from 'react'

interface EstatisticaProps {
    valor: any,
    texto: string,
    corFundo?: string,
    corFonte?: string
}

const Estatistica = (props: EstatisticaProps) => {
    return (
        <div className='flex flex-col m-2 items-center'>
            <div className={`flex h-44 w-44 justify-center items-center rounded-[90px] text-7xl
                    ${props.corFundo || "bg-[#FDD60F]"} 
                     ${props.corFonte || "text-[#333]"} `}>
                {props.valor}
            </div>
            <div className='text-[#ddd] text-3xl font-extralight'>
                {props.texto}
            </div>
        </div>
    )
}

export default Estatistica