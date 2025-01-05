import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key : any,
    duracao: number, 
    tempoEsgotado : () => void
}

const Temporizador = (props : TemporizadorProps) => {
  return (
    <div className='flex text-5xl my-5'>
        <CountdownCircleTimer 
        duration={props.duracao} 
        size={120} 
        isPlaying 
        onComplete={props.tempoEsgotado}
        colors={['#BCE596', '#F7B801', '#E74C3C']}
        colorsTime={[10, 7, 3]}
        >
            {({remainingTime}) => remainingTime}
        </CountdownCircleTimer>
        </div>
  )
}

export default Temporizador