import React from 'react'

const GridSection = ({title,number}) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full z-[10] '>
            <h5 className='font-bold text-center text-white md:text-2xl'> +{title} </h5>
            <p className='text-2xl font-semibold text-white'> {number} </p>
        </div>
    )
}

export default GridSection