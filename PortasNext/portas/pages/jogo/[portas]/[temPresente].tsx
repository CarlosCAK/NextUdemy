import Porta from '@/Components/Porta'
import { atualizarPortas, criarPortas } from '@/functions/portas'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PortaModel from '@/Model/porta'

const Jogo = () => {

    const router = useRouter()
    const [portas, setPortas] = useState<PortaModel[]>([])
    const [valido, setValido]= useState(false);


    // router.query.portas
    // router.query.temPresente
    useEffect(() => {

        const quantidadeDePortas = router.query.portas ? +router.query.portas : 0;
        const temPresente = router.query.temPresente ? +router.query.temPresente : 0;
        setPortas(criarPortas(quantidadeDePortas,temPresente))

    }, [router?.query])

    useEffect(() => {
        const qtdePortasValidas =  portas.length >= 3  && portas.length <= 100
        const temPresente = router.query.temPresente ? +router.query.temPresente : 0;
        const temPortaPresente = temPresente < portas.length

        setValido(qtdePortasValidas && temPortaPresente)

    }, [portas])


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
                {valido ? 
                renderizarPortas():
                <h2>Valores inválidos</h2>
                }
            </div>
            <div className='flex justify-center mt-10 items-center '>
                <Link href={"/"} passHref>
                    <button className='bg-[#c03982] text-white text-3xl  py-3 px-6'>Reeniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}

export default Jogo