import React from 'react'
import Link from 'next/link'

const NavLink = ({title,URL='/'}) => {
    return (
        <Link href={`${URL}`}>
            <li 
            className='ml-10 duration-300 ease-in cursor-pointer md:text-lg lg:text-2xl hover:text-blue-800'>
                {title} 
            </li>
        </Link>
    )
}

export default NavLink