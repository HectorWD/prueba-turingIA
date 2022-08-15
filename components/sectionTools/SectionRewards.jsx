import React from 'react'
import {AiTwotoneTrophy} from 'react-icons/ai'


const SectionRewards = ({title}) => {
  return (
    <div className='flex flex-col items-center'>
    <AiTwotoneTrophy size={35} className='text-xl text-yellow-500'/>
    <p className='font-semibold text-center'>{title}</p>
    <img src='https://www.turing-ia.com/assets/img/tecnoly-tableau.png' alt='' className='md:w-[25vw] lg:w-[10vw] '/>
  </div>
  )
}

export default SectionRewards