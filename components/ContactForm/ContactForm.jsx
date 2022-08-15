import React from 'react'
import InputForm from './structure/InputForm'

const ContactForm = () => {
    return (
        <div className='w-[90vw] md:h-[45vh] md:w-[65vw] h-[70%] mx-auto my-4 shadow-2xl'>
            <div className='h-[90%] p-8'>
                <div className='pb-3'>
                    <h3 className='text-2xl'>O dejanos tus datos y nosotros nos pondremos en contacto.</h3>
                    <span className='text-sm b-4 text-slate-500'>Envianos tus datos</span>
                </div>
                <form className='h-[80%] '>
                    <InputForm placeholder='Tu Nombre' type='text'/>
                    <InputForm placeholder='Tu Correo' type='email'/>
                    <InputForm placeholder='Número de telefono' type='tel'/>
                    <InputForm placeholder='Empresa(Opcional)' type='text'/>
                    <textarea maxLength={250} placeholder='Escribe tu mensaje aquí' className='w-full h-20 border-2'/>
                    <button className='w-full py-2 text-white bg-blue-600 rounded-md'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm