import Porta from '@/Components/Porta'
import { atualizarPortas, criarPortas } from '@/functions/portas'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PortaModel from '@/Model/porta'

const jogo = () => {

    const router = useRouter()
    const [portas, setPortas] = useState<PortaModel[]>([])

    // router.query.portas
    // router.query.temPresente
    useEffect(() => {
        const quantidadeDePortas = router.query.portas ? +router.query.portas : 0;
        const temPresente = router.query.temPresente ? +router.query.temPresente : 0;
        setPortas(criarPortas(quantidadeDePortas,temPresente))

    }, [router?.query])


    function renderizarPortas() {

        return portas.map((porta) => {
            return (
                <Porta value={porta} key={porta.numero} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}></Porta>
            )
        })
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className='flex justify-around self-stretch flex-wrap'>
                {renderizarPortas()}
            </div>
            <div className='flex justify-center mt-10 items-center '>
                <Link href={"/"}>
                    <button className='bg-[#c03982] text-white text-3xl  py-3 px-6'>Reeniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}

export default jogo