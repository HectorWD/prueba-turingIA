import React from 'react'
import Link from 'next/link'

const SectionService = ({children,title='',imgUrl,url=''}) => {
  return (
    <section  className='flex flex-col items-center justify-center'>
    {title!=''&&  <h4 className='self-start mb-4 text-lg font-semibold md:text-2xl'>{title}</h4>}
    <p className='mb-4 text-sm font-semibold md:text-lg md:self-start'>
     {children}
    </p>
    { url != '' &&
    <Link href={url}>
    <button className='px-6 py-2 font-semibold text-white bg-blue-500 '>Más información</button>
    </Link>}
    {imgUrl
    && <img src={imgUrl} className='m-2 mb-20 rounded-md md:mb-40 lg:w-[40%] '/>}
  </section>
  )
}

export default SectionService