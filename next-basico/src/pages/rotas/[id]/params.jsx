import React from 'react'
import { useRouter } from 'next/router'

const params = () => {
    const router = useRouter();
    console.log(router);

    const nome = router.query.nome;
    
  return (
    <div>{nome}</div>
  )
}

export default params