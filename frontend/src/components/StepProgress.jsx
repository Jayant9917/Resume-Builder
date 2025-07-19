import React from 'react'
import { shimmerStyle } from '../assets/dummystyle'

const StepProgress = ({ progress }) => {
  return (
    <>
      <style>{shimmerStyle}</style>

      <div className='relative w-full h-4 bg-white/5 backdrop-blur-2xl overflow-hidden rounded-full
      border border-white/10'>

        <div className='absolute insert-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 animate-pulse'/>
        {/* Main Progress BAR */}
        <div className='relative h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-600 animate-flow 
        bg-[length:200%_100%] transition-all duration-700 ease-out rounded-full overflow-hidden animate-pulse-glow' 
        style={{width: `${progress}%`}}>
            <div className='absolute insert-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer'/>

            {/* ANIMATED BUBBLES */}
        </div>
      </div>
    </>
  )
}

export default StepProgress
