import React from 'react'

const Presente = () => {
  return (
    <div className='flex flex-col items-center relative w-[200px]'>

        <div className='w-[100px] h-[25px] bg-[#7aa944]'></div>

        <div className='w-[90px] h-[60px] bg-[#5c7e32]'></div>

        <div className='bg-[red] w-[15px] h-[85px] absolute'></div>
        <div className='bg-[red] w-[90px] h-[15px] absolute top-10'></div>
    </div>
  )
}

export default Presente