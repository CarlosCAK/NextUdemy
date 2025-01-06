import Link from 'next/link'
import React from 'react'

interface MenuItemProps{
    url? : string,
    texto : string,
    icone : any,
    onClick? : (evento : any) => void,
    className?: string
}

const MenuItem = (props : MenuItemProps) => {

  function renderizarLink(){
    return (
    <a className={`flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200 ${props.className}`}>
      {props.icone}
      <span className='text-xs font-light'>{props.texto}</span>
      </a>
    ) 
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`}>
      {props.url ? (
        <Link href={props.url} legacyBehavior >
            {renderizarLink()}
        </Link>
      ) :
        renderizarLink()}
        
    </li>
  )
}

export default MenuItem