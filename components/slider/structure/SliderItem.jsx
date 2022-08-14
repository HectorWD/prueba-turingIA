import React from 'react'
import Image from 'next/image'


const SliderItem = ({ img, descriptionImage }) => {
    return (
            <div className='flex flex-wrap items-center justify-center h-full'>
                <div className='w-[90vw] h-[50vh] '>
                    <Image
                    src={img}
                    alt='imagen'
                    ></Image>
                </div>
                <div className='absolute bottom-0 w-[70vw] h-[20vh] bg-white border-2 left-0 border-black'>
                    {descriptionImage}
                </div>
            </div>

    )
}

export default SliderItem