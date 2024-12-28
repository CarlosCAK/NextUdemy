import React from 'react'
import {uesRouter} from 'next'
import { useRouter } from 'next/router'

const buscar = () => {
    const router = useRouter();

    console.log(router.query.id);
    
  return (
    <div>Rotas / id / buscar</div>
  )
}

export default buscar