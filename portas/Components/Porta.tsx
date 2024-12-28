import React from 'react'
import PortaModel from '../Model/porta';
import Presente from './Presente';

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

const Porta = (props: PortaProps) => {
    const porta = props.value
    const selecionada: string = porta.selecionada && !porta.aberta? "selecionada" : "";

    const alternarSelecao = () => props.onChange(porta.alternarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className='flex flex-col items-center bg-[chocolate]  p-4 flex-1'>
                <div className='text-5xl numero'>{porta.numero}</div>
                <div className='w-5 h-5 rounded-xl bg-amber-900 absolute top-2/4 right-[40px] macaneta'
                    onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className='flex flex-col w-[200px] h-[310px] items-center m-[5px] relative' onClick={alternarSelecao}>
            <div className={`flex flex-1 w-[100%] flex-col-reverse border-r-[5px] border-t-[5px] border-l-[5px] border-r-amber-900 bg-[#0005] border-l-amber-900  border-t-amber-900 ${selecionada} `}>
                {porta.fechada ? 
                renderizarPorta():
                porta.temPresente ? <Presente></Presente> :  false}
            </div>
            <div className='h-[10px] w-full bg-[#ddd]'></div>
        </div>

    )
}

export default Porta