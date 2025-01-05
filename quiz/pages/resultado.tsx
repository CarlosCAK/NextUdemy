import React from 'react'
import { useRouter } from 'next/router'
import Estatistica from '@/components/Estatistica'
import Botao from '@/components/Botao'

const resultado = () => {

  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)
  return (
    <div className='flex flex-col justify-center items-center h-screen text-3xl '>
      <h1>Resultado Final</h1>
      <div className='flex'>
        <Estatistica texto="Perguntas" valor={total} 
          corFundo='' />
        <Estatistica texto="Certas" valor={certas}
          corFundo='bg-green-400' />
        <Estatistica texto="Percentual" valor={`${percentual}%`}
            corFundo='bg-orange-500' />

      </div>
      <Botao href='/' texto='Tentar Novamente'/>

    </div>
  )
}

export default resultado