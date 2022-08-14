import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const Slider = ({ imagesData = [], title=[], description=[], url='/'}) => {
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)
    const handleNext = () => {
        setIndex((index + 1) % imagesData.length)
        setIndex1((index1 + 1) % imagesData.length)
    }
    const handlePrev = () => {
        if (index > 0) {
            setIndex((index - 1) % imagesData.length)
            setIndex1((index1 - 1) % imagesData.length)
        }
    }

    return (
        <div className='flex items-center mb-2'>
            <div
                className='relative h-[70vh] md:h-[40vh] lg:h-[45vh] overflow-hidden mx-6 lg:mx-24 w-full bg-cover flex justify-between ease-in duration-500'
                style={{ backgroundImage: `url(${imagesData[index]})` }}
            >
                <button
                    className='w-10 h-auto text-3xl font-extrabold text-[#ff784f] z-20'
                    onClick={handlePrev}
                > <AiOutlineLeft size={40} /></button>
                <div className='z-10 flex flex-wrap items-center justify-center '>
                    <h4 className='text-xl font-semibold text-white lg:text-2xl'> {title[index]} </h4>
                    <p className='text-sm tracking-widest text-white md:text-lg lg:text-xl'> {description[index]} </p>
                    <Link href={url}>
                    <button className='px-12 py-2 font-semibold text-white bg-sky-500'>Ver más</button>
                    </Link>
                </div>
                <button
                    className='w-10 h-auto text-3xl font-extrabold text-[#ff784f] z-20 '
                    onClick={handleNext}
                ><AiOutlineRight size={40}/> </button>
            <div className='absolute w-full h-full bg-black/40'></div>
            </div>

        </div>
    )
}

export default Slider

/*
<div 
            className='relative h-[70vh] overflow-hidden border-2 w-96 rounded-xl'>
                <Image className={`absolute bg-cover z-20 w-full h-full p-4`} src={images[index]} alt='' />
            </div>
*/