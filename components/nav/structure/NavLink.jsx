import React from 'react'
import Link from 'next/link'

const NavLink = ({title,URL='/'}) => {
    return (
        <Link href={`${URL}`}>
            <li 
            className='ml-10 md:text-lg lg:text-xl  hover:text-blue-800 cursor-pointer ease-in duration-300'>
                {title} 
            </li>
        </Link>
    )
}

export default NavLink