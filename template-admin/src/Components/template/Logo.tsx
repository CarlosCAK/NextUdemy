import React from 'react'

const Logo = () => {
    return (
        <div className='bg-white  rounded-full h-10 w-10 flex flex-col justify-center items-center'>
            <div className='w-3 h-3 rounded-full bg-red-600 mb-0.5'></div>
            <div className='flex mt-0.5'>
                <div className='w-3 h-3 rounded-full bg-yellow-500 mr-0.5'></div>
                <div className='w-3 h-3 rounded-full bg-green-600 ml-0.5'></div>
            </div>
        </div>
    )
}

export default Logo