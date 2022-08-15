import React from 'react'
import { mapSite, usServices, cityInfo } from '../../public/img/assets/DataFooter'
import List from './structure/List'

import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { AiOutlineFacebook } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";



const Footer = () => {
    return (
        <footer>
            <div className='grid w-full grid-cols-1 duration-500 ease-in bg-blue-800 md:content-center md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                <div className='w-[80%]  pt-4'>
                    <h4 className='text-2xl font-semibold text-white'>Turing Inteligencia Artificial</h4>
                    <List listItems={cityInfo} />
                </div>
                <div className='w-[80%] text-white'>
                    <h4 className='font-semibold'>Telefono de contacto:</h4>
                    <p>+25 (722 936-96-65)</p>
                    <h4 className='font-semibold'>Correo electronico:</h4>
                    <p>contacto@turing-ia.com</p>
                </div>
                <List listItems={mapSite} name='Mapa de sitio' />
                <List listItems={usServices} name='Nuestros servicios' />
                <div className='w-[80%] text-white pb-4 md:col-span-2  md:text-center'>
                    <h4>Inscríbete a nuestro newsletter</h4>
                    <form>
                        <input type={'email'} placeholder={'Correo electrónico'} className='h-10' />
                        <button className='h-10 px-5 bg-blue-600'>Suscribir</button>
                    </form>
                </div>
                <div className='w-[80%]  text-white md:col-span-2 '>
                    <h4 className='font-semibold text-center'>Siguenos en nuestras redes</h4>
                    {/* Iconos de redes */}
                    <div className='flex justify-around px-2 py-2 '>
                        <FiTwitter size={25}/>
                        <FiInstagram size={25}/>
                        <AiOutlineFacebook size={25}/>
                        <RiLinkedinBoxFill size={25}/>
                    </div>
                </div>
                <p className='text-lg font-semibold text-white lg:col-span-4'>Aviso de Privacidad</p>
            </div>
            <p className='text-center'>© Copyright Turing Inteligencia Artificial. Derechos reservados</p>
        </footer>
    )
}

export default Footer