import React, { ReactNode } from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'

interface LayoutProps {
    titulo: string,
    subtitulo: string,
    children?: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <div className={`flex h-screen w-screen dark`}>
            <MenuLateral />
            <div className={`flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>

        </div>
    )
}

export default Layout