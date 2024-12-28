import React from 'react'

export function getStaticProps(){
    return{
        props:{
            numero : Math.random()
        }
    }
}

const estatico = (props : any) => {
  return (
    <div>
        <span>Aleatório: {props.numero}</span   >
    </div>
  )
}

export default estatico