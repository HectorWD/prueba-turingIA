import React from 'react'
import NavBar from '../nav/NavBar'


const Banner = ({navTitle,navDescription,videoURL='/'}) => {
    return (
        <header className=' min-h-[50vh] lg:h-[70vh] relative'>
            <video
                loop autoPlay playsInline muted
                poster="assets/img/posters/index.png"
                className='absolute top-0 left-0 object-cover w-full h-full '
            >
                <source
                    src={`${videoURL}`}
                />
            </video>
            <div className='absolute w-full h-full bg-black/40 lg:bg-black/50'/>
            <NavBar title={navTitle} description={navDescription} />
        </header>

    )
}

export default Banner
