import React from 'react'
import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import useAuthContext from '@/data/hook/useAuthContext'
import router from 'next/router'

const ForcarAutenticacao = (props : any) => {


    const {usuario, carregando} = useAuthContext()

    function renderizarConteudo(){
        return(
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return(
            <div className={`
                flex justify-center items-center h-screen
            
            `}>
                <Image src={loading} alt='Loading'/>
            </div>
        )
    }

    if(!carregando && !usuario?.email){
        return renderizarCarregando()
    }else if(carregando){
        return renderizarCarregando()
    }else{
        router.push('/autenticacao')
        return null
    }

}

export default ForcarAutenticacao