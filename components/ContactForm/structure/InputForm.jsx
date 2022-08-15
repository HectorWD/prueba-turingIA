import React from 'react'

const InputForm = ({type='text',placeholder=''}) => {
  return (
    <input type={type} placeholder={placeholder} className='w-full h-10 pl-4 mb-[.5px] border-2' />
  )
}

export default InputForm