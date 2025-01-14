import AuthInput from '@/Components/auth/AuthInput'
import { IconeAviso } from '@/Components/icons'
import useAuthContext from '@/data/hook/useAuthContext'
import React, { useState } from 'react'

const Autenticacao = () => {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState<string | null>(null)   

    const {usuario, loginGoogle} = useAuthContext();

    function submeter() {
        if (modo === 'login') {
            console.log('login')
            exibirErro("Ocorreu um erro no login ")
        } else {
            console.log('Cadastrar')
            exibirErro("ocorreu um erro no cadastro")
        }
    }
    function exibirErro(msg : string,tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)

    }

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-1/2 hidden md:w-1/2 md:block lg:w-2/3'>
                <img
                    src="https://images.unsplash.com/photo-1736192252876-e086cd9fa39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                    className='h-screen w-full object-cover'
                    alt='Imagem da tela de autenticação'
                />
            </div>
            <div className=' m-10 w-full md:w-1/2 lg:w-1/3'>
                <h1 className='text-3xl font-bold mb-5'>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {
                    erro ? (
                        <div className='flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg'>
                            {IconeAviso()}
                            <span className='ml-3 text-sm'>{erro}</span>
                        </div>
                    ) :
                    false
                        
                    
                }


                <AuthInput
                    label='Email'
                    tipo='email'
                    valor={email}
                    obrigatorio
                    valorMudou={setEmail}
                />
                <AuthInput
                    label='Senha'
                    tipo='password'
                    valor={senha}
                    obrigatorio
                    valorMudou={setSenha}
                />

                <button onClick={submeter} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>


                <button onClick={loginGoogle} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 mt-6`}>
                    Entrar com o google
                </button>

                {modo === 'login' ? (
                    <p className='mt-8'>
                        Novo por aqui ?
                        <a onClick={() => setModo('cadastro')} className='text-blue-500 hover:text-blue-700 cursor-pointer font-semibold'>
                            Criar uma conta gratuitamente
                        </a>
                    </p>
                ) :
                    (
                        <p className='mt-8'>
                            Já faz parte da nossa comunidade?
                            <a onClick={() => setModo('login')} className='text-blue-500 hover:text-blue-700 cursor-pointer font-semibold'>
                                Entre com as suas credenciais
                            </a>
                        </p>
                    )}



            </div>
        </div>
    )
}

export default Autenticacao