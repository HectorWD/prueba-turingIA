import React from 'react'
import Link from 'next/link'

const NavIcon = ({ icon, url='/' }) => {
    return (
        <Link href={url}>
        <li 
        className='p-1 mx-2 my-1 text-2xl text-white rounded-full cursor-pointer lg:text-3xl hover:text-blue-800'>
            {icon}
        </li>
        </Link>
    )
}

export default NavIcon