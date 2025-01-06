import React from 'react'
import MenuItem from './MenuItem'
import { iconeAjustes, IconeCasa, iconeSair, iconeSino } from '../icons'
import Logo from './Logo'


const MenuLateral = () => {
  return (
    <aside className='flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-700'>
        <div className='bg-gradient-to-r from-indigo-500 to-purple-800 w-20 h-20 flex flex-col items-center justify-center '>
          <Logo/>
        </div>
        <ul className='flex-grow'>
          <MenuItem url='/' texto='início' icone={IconeCasa}/>
          <MenuItem url='/ajustes' texto='Ajustes' icone={iconeAjustes}/>
          <MenuItem url='/notificacoes' texto='notificacoes' icone={iconeSino}/>
        </ul>
        <ul className=''>
          <MenuItem url='/' texto='Sair' icone={iconeSair} onClick={() => console.log("logo")} 
          className={`text-red-600 dark:text-red-400 dark:hover:text-white hover:bg-red-400 hover:text-white`}/>
        </ul>
    </aside>
  )
}

export default MenuLateral