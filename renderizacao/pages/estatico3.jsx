import React from 'react'

export function getStaticProps(){
    return {
        revalidate : 7,
        props: {
            numero: Math.random()
        },
    }
}

const Estatico3 = (props) => {
  return (
    <div>
        <h1>Estatico #03</h1>
        <h2>{props.numero}</h2>
    </div>
  )
}

export default Estatico3