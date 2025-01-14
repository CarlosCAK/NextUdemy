import React from 'react'
import Link from 'next/link'
import useAuthContext from '@/data/hook/useAuthContext'

interface AvatarUsuarioProps{
    className?:string
}

const AvatarUsuario = (props : AvatarUsuarioProps) => {
    const {usuario} = useAuthContext()
  return (
    <Link href={'/perfil'} passHref>
    
        <img src={usuario?.imagemUrl ?? '/images/avatar.svg'} alt="Avatar do usuario" 
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}/>

    </Link>
  )
}

export default AvatarUsuario