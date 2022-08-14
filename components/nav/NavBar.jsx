import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './structure/NavLink'

import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineFacebook, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavIcon from './structure/NavIcon'

const NavBar = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleNav = () => {
        console.log('hola')
        setIsOpen(!isOpen)
    }
    return (
        // TODO: Quitar el fondo
        //TODO: Hacerlo para small and md scale
        <div className='relative grid w-full grid-cols-3 pt-8 duration-150 ease-in md:grid-cols-2 lg:cols-span-1'>
            <div className='flex items-center justify-center w-full h-20 col-span-2 md:col-span-3 md:h-10 lg:h-20 '>
                <Link href={'/'}>
                    <h1 className='text-3xl font-bold text-white cursor-pointer lg:text-5xl'>TURING-IA</h1>
                </Link>
            </div>
            <div className='hidden w-full h-20 md:justify-center md:items-center md:flex md:col-span-3 '>
                <ul className='flex m-2 font-bold text-white lg:w-full lg:justify-around'>
                    <NavLink title={'Inicio'} URL='/' />
                    <NavLink title={'Nosotros'} URL='/Nosotros' />
                    <NavLink title={'Servicios'} URL='/Servicios' />
                    <NavLink title={'Tableau'} URL='/Tableau' />
                    <NavLink title={'Blog'} URL='/Blog' />
                    <NavLink title={'Contacto'} URL='/' />
                </ul>
            </div>
            {/* Se activa en tamaño sm (Menu desplegable) */}
            <div
                className='flex items-center justify-center w-full text-white cursor-pointer md:hidden'
                onClick={handleNav}>
                <AiOutlineMenu size={25} />
            </div>
            <div className='hidden md:block'></div>
            <div className='hidden md:block'>
                <ul className='flex items-center justify-center'>
                    <NavIcon icon={<RiLinkedinBoxFill />} url='/' />
                    <NavIcon icon={<FiInstagram />} url='/' />
                    <NavIcon icon={<FiTwitter />} url='/' />
                    <NavIcon icon={<AiOutlineFacebook />} url='/' />
                </ul>
            </div>
            <div className='h-40 col-span-3 m-auto text-white '>

                <h3 className='p-4 text-5xl text-center lg:text-7xl '>{title}</h3>
                <p className='text-2xl text-center lg:text-4xl'>{description}</p>

            </div>


            {/* Menu desplegable */}
            <div
                className={isOpen
                    ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''}
            >
                <div className={isOpen
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 '
                    : 'fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500'} >
                    <div>
                        <div className='flex items-center justify-between w-full'>
                            <Link href={'/'}>
                                <h1 className='text-3xl font-bold cursor-pointer text-sky-500'>TURING-IA</h1>
                            </Link>
                            <div
                                className='p-3 rounded-full shadow-xl cursor-pointer shadow-gray-400'
                                onClick={handleNav}
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='my-4 border-b border-gray-300'>
                            <p className='w-[85%] md:w-[90%] py-4 '>
                                Hacemos los datos faciles de utilizar
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setIsOpen(false)} className='py-4 text-sm cursor-pointer'>Inicio</li>
                            </Link>
                            <Link href='/Nosotros'>
                                <li onClick={() => setIsOpen(false)} className='py-4 text-sm cursor-pointer'>Nosotros</li>
                            </Link>
                            <Link href='/Servicios'>
                                <li onClick={() => setIsOpen(false)} className='py-4 text-sm cursor-pointer'>Servicios</li>
                            </Link>
                            <Link href='/Tableau'>
                                <li onClick={() => setIsOpen(false)} className='py-4 text-sm cursor-pointer'>Tableau</li>
                            </Link>
                            <Link href='/Blog'>
                                <li onClick={() => setIsOpen(false)} className='py-4 text-sm cursor-pointer'>Blog</li>
                            </Link>
                            <Link href='/'>
                                <li onClick={() => setIsOpen(false)} className='py-4 text-sm cursor-pointer'>Contacto</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5] '>Let s Connect</p>
                            <div className='flex items-center justify-between my-4 sm:w-[80%] '>
                                <NavIcon icon={<RiLinkedinBoxFill />} url='/' />
                                <NavIcon icon={<FiInstagram />} url='/' />
                                <NavIcon icon={<FiTwitter />} url='/' />
                                <NavIcon icon={<AiOutlineFacebook />} url='/' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default NavBar

//<h2 className='block w-full text-3xl font-bold md:text-4xl lg:text-6xl bg-red-500/20'>{title} </h2>
//<p className='text-xl md:text-3xl lg:text-6xl'>{description}</p>