import React from 'react'

interface entradaNumericaProps {
    text: string
    value: number,
    onChange: (newValue: number) => void
}

const EntradaNumerica = (props: entradaNumericaProps) => {

    const dec = () =>  props.onChange(props.value - 1)
       
    

    return (
        <div className='flex flex-col justify-center items-center text-black flex-1'>
            <span className='text-gray-500 text-2xl'>{props.text}</span>
            <span className='text-8xl'>{props.value}</span>
            <div>
                <button className=''>-</button>
                <button className=''>+</button>
            </div>
        </div>
    )
}

export default EntradaNumerica