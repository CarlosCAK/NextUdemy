import React from 'react'

interface AuthInputProps {
    label: string,
    valor: any,
    obrigatorio : boolean,
    tipo? : 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void

}

const AuthInput = (props: AuthInputProps) => {
    return (
        <div className='flex flex-col  mt-2'>
            <label className=''>{props.label}</label>
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)} 
                required={props.obrigatorio}
                className={`px-4 py-4 rounded-lg bg-gray-200 border focus:border-blue-500 focus:outline-none focus:bg-white` }/>
        </div>
    )
}

export default AuthInput