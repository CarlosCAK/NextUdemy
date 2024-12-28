import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const index = () => {

  const router = useRouter();
  return (
    <div>
        <h1>Rotinhas</h1>
        <ul>
          <Link href="/rotas/123/params">
          <button>teste</button>
          </Link>
        </ul>

        <div className='flex'>
            <button onClick={() => router.push("/rotas/123/buscar")} className='bg-red-900'>Buscar</button>
        </div>
    </div>
  )
}

export default index