import React from 'react'

const NavIcon = ({ icon, url,bgcolor }) => {
    return (
        <div
            className={`text-white rounded-full mx-2 my-1 hover:bg-sky-400 p-1 cursor-pointer text-2xl`}
        >
            {icon}
        </div>
    )
}

export default NavIcon