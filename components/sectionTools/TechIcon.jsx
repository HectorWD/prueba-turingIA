import React from 'react'
import Image from 'next/image'

const TechIcon = ({img,alt}) => {
  return (
    <figcaption 
    className='w-40 h-auto md:w-48 hover:scale-105'
    >
        <Image
        alt={alt}
        src={img}
        />
    </figcaption>
  )
}

export default TechIcon