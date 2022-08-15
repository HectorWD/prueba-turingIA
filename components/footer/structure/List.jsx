import React from 'react'
import Link from 'next/link';

const List = ({ listItems = [], name = '' }) => {
    return (
        <div className='w-[80%] py-3 '>
            {name != ''
                ? <h4 className='text-lg font-semibold text-white'>{name}</h4>
                : ''}
            <ul>
                {listItems.map(({ url, title, index }) => (
                    <Link href={`${url}`} key={index}>
                        <li className='text-white'>
                            {title}
                        </li>
                    </Link>
                ))}

            </ul>
        </div>
    )
}

export default List