import React from 'react'

const SectionArticle = ({children,title,imgUrl}) => {
  return (
    <section className='flex flex-col items-center justify-center m-auto mb-12 w-[80%] lg:w-[60%] lg:grid lg:grid-cols-2'>
        <article className=''>
        <h4 className='my-2 text-2xl font-semibold lg:text-center'>{title} </h4>
        <p className='text-lg font-semibold text-justify text-slate-600 lg:text-xl'>
        {children}
        </p>
        </article>
        <figure className='w-[80%] my-2 mx-4 '>
          <img
          src={imgUrl}
          />
        </figure>
      </section>
  )
}

export default SectionArticle