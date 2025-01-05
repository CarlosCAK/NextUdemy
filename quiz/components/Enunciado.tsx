import React from 'react'

interface EnunciadoProps{
    texto: string
}

const Enunciado = (props : EnunciadoProps) => {
  return (
    <div className='flex'>
            <p className='text-4xl font-bold'>{props.texto}</p>
    </div>
  )
}

export default Enunciado