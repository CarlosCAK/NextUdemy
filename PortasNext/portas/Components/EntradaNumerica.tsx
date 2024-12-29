import React from 'react'

interface entradaNumericaProps {
    text: string
    value: number,
    onChange: (newValue: number) => void
}

const EntradaNumerica = (props: entradaNumericaProps) => {

    const decremento = () =>  props.onChange(props.value - 1)
    const incremento = () =>  props.onChange(props.value + 1)
       
    

    return (
        <div className='flex flex-col justify-center items-center text-black flex-1'>
            <span className='text-gray-500 text-2xl'>{props.text}</span>
            <span className='text-8xl'>{props.value}</span>
            <div className='flex'>
                <button className='flex justify-center items-center text-5xl h-20 w-20 m-5 bg-slate-200' onClick={decremento}>-</button>
                <button className='flex justify-center items-center text-5xl h-20 w-20 m-5 bg-slate-200' onClick={incremento}>+</button>
            </div>
        </div>
    )
}

export default EntradaNumerica