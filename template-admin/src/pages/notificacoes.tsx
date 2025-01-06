import Layout from '@/Components/template/Layout'
import React from 'react'
import useAppData from '@/data/hook/useAppData'



const notificacoes = () => {

  const context = useAppData()
  return (
    <Layout subtitulo='Aqui você irá gerenicar as suas notificações' titulo='Notificacoes'>
        <h3>Conteúdo</h3>
        <h3>{context.nome}</h3>

    </Layout>
  )
}

export default notificacoes