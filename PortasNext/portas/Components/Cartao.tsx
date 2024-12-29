import React, { ReactNode } from 'react'

interface CartaoProps {
    bgcolor? : string,
    children? : ReactNode
}

const Cartao = (props : CartaoProps) => {
  return (
    <div className={`flex w-[300px] h-[300px] text-white ${props.bgcolor ? props.bgcolor : "bg-white"} m-1 text-4xl p-5 justify-center items-center`} >
        {props.children}
    
    </div>
  )
}

export default Cartao