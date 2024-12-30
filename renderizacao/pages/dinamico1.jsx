import React from 'react'

export function getServerSideProps(){
    return{
        props:{
            numero : Math.random()
        }
    }
}

const Dinamico1 = (props) => {
  return (
    <div>
        <h1>Dinamico #01</h1>
        <h2>{props.numero}</h2>
    </div>
  )
}

export default Dinamico1