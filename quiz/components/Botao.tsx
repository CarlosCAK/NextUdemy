import Link from 'next/link'
import React from 'react'

interface BotaoProps {
    href?: string,
    texto: string,
    onClick?: (e: any) => void
}



const Botao = (props: BotaoProps) => {

    function renderizarBotao() {

        return (
            <button className='bg-purple-300 text-white rounded-lg font-extralight text-xl py-3 px-6 mt-10 cursor-pointer 
            duration-200 ease-in-out hover:scale-110'
                onClick={props.onClick}>
                {props.texto}
            </button>
        )
    
    }

    return props.href ? (
           <Link href={props.href}>
                {renderizarBotao()}
           </Link> 
        ):
        (
            renderizarBotao()
        )
    
}

export default Botao