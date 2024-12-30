import React from 'react'

export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        },
    }
}

const Estatico2 = (props) => {
  return (
    <div>
        <h1>Estatico #02</h1>
        <h2>{props.numero}</h2>
    </div>
  )
}

export default Estatico2