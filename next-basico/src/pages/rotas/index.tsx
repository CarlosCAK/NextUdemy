import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
        <h1>Rotinhas</h1>
        <ul>
          <Link href="/rotas/123/params">
          <li>teste</li>
          </Link>
        </ul>
    </div>
  )
}

export default index