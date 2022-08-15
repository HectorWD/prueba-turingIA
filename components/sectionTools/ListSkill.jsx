import React from 'react'

const ListSkill = ({ children, title = ''}) => {
    return (
            <section className='text-center'>
                <h5 className='px-6 py-2 mb-4 text-3xl font-semibold text-white border-b-2'>{title}</h5>
                <ul className='pl-4 text-lg font-semibold text-white'>
                    {children}
                </ul>
            </section>
        
    )
}

export default ListSkill