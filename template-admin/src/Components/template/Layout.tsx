import React, { ReactNode } from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import AppContext from '@/data/context/AppContext'
import useAppData from '@/data/hook/useAppData'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'

interface LayoutProps {
    titulo: string,
    subtitulo: string,
    children?: ReactNode
}

const Layout = (props: LayoutProps) => {

    const { tema } = useAppData();
    console.log(tema)
    return (
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen `}>
                <MenuLateral />
                <div className={`flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7`}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>

            </div>
        </ForcarAutenticacao>
    )
}

export default Layout