import React from 'react'
import Image from 'next/image'

const SliderItem = ({ imgUrl='/', descriptionImage='' }) => {
    return (
        <>
            <Image src={imgUrl} alt='hola' layout='responsive' height={20} width={20} />
            <div className='absolute h-[30%] md:w-[60%] md:h-[30%] lg:w-[80%] lg:h-[35%] w-[70%] left-10 bg-white border-2 bottom-0 hover:bg-blue-600'>
                <p className='flex items-center h-full font-semibold text-center whitespace-normal text-md hover:text-white'>{descriptionImage} </p>
            </div>
        </>

    )
}

export default SliderItem