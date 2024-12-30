import React from 'react'

export async function getStaticProps() {

  const response = await fetch("http://localhost:3000/api/produtos")
  const produtos = await response.json()

  return {
    props: {
      produtos
    },
  }
}

const Estatico4 = (props) => {

  function renderizarProdutos() {
    return props.produtos.map(produto => {
      return (

          <li key={produto.id}>{produto.id}-{produto.nome} tem preco de: {produto.preco}</li>
        
      )
    })
  }

  return (
    <div>
      <h1>Estatico #04</h1>
      {renderizarProdutos()}
    </div>
  )
}

export default Estatico4