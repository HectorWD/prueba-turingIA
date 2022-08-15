import Head from 'next/head'
import Banner from '../components/banner/Banner'
import Image from 'next/image'

import { imagesData, descriptionTitle, descriptionData } from '../public/img/assets/DataTech'

import imagenCer from '../public/img/cer-pmi.jpg'
import pmi from '../public/img/technology/pmi.png'
import salesforce from '../public/img/technology/salesforce.jpg'
import scrum from '../public/img/technology/scrum.png'
import tableau from '../public/img/technology/tecnoly-tableau.png'
import TechIcon from '../components/sectionTools/TechIcon'
import Slider from '../components/slider/Slider'
import SliderHistory from '../components/slider/SliderHistory'
import ContactForm from '../components/ContactForm/ContactForm'

export default function Home() {
  const description = 'Hacemos los datos faciles de manejar'
  return (
    <div className='bg-white'>
      <Head>
        <title>Turing IA Tableau</title>
        <meta name="Prueba de Turing" content="Contiene la prueba a Turing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner navTitle='Bienvenido' navDescription={description} videoURL={`https://drive.google.com/uc?export=download&id=1J_Y4xY_FGItfFan4xu0GBo1w73WYqxFT`} />
      <main>
        <section className='w-full h-full'>
          {/* Que realizamos */}
          <article className='mx-24 my-12 '>
            <h3 className='text-[#dc0073] font-semibold text-2xl py-3 uppercase'>¿Que realizamos?</h3>
            <p className='text-lg font-semibold md:text-2xl lg:text-4xl'>Contribuimos con su empresa para mejorar la toma de desiciones a través de sus datos.</p>
            <button className='px-6 py-2 m-2 font-semibold text-white uppercase rounded-sm bg-sky-500'>Mas informacion</button>
          </article>

          <article className='grid h-[28vh] md:h-[30vh] lg:h-[40vh] grid-cols-7 md:grid-cols-8 overflow-hidden '>
            <video
              id="video" preload="none" poster="hoola"
              src={`https://drive.google.com/uc?export=download&id=1NxB--0x8ucRcjjFuM-nAiVSVzO5di3d7`}
              loop autoPlay playsInline muted
              className='object-cover h-full col-span-2 mx-1 md:col-span-2'
              style={{ clipPath: 'polygon(0% 0%, 00% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
            >
            </video>
            <section className='col-span-5 mx-2 md:col-span-4 '>
              <h3 className='mb-2 font-semibold text-[#46bbd8] md:text-2xl lg:text-3xl'>La manera ideal para manejar tus datos</h3>
              <p className='text-sm md:text-lg lg:text-2xl'>
                Somos una empresa Consultora de Big Data en México,
                desde hace 13 años proporcionamos servicios en Business
                Analytics mediante Knowledge Discovery in Database (KDD).
              </p>
            </section>
            <div
              className='items-center hidden col-span-2 md:flex rotate-[21deg] ' >
              <Image
                src={imagenCer}
                alt='imagen'
              />
            </div>
          </article>
          {/* Tecnologias que utilizamos */}
          <article className='flex flex-wrap justify-center my-4 '>
            <h3 className='w-full mt-4 text-xl md:text-2xl lg:text-2xl text-center uppercase text-[#dc0073] '>Tecnologias que utilizamos</h3>
            <section className='md:flex md:mt-4'>
              <TechIcon img={pmi} alt='pmi' />
              <TechIcon img={salesforce} alt='pmi' />
              <TechIcon img={scrum} alt='pmi' />
              <TechIcon img={tableau} alt='pmi' />
            </section>
          </article>

          {/* Lo que ofrecemos */}
          <article>
            <h3 className='w-full mt-4 text-xl md:text-2xl lg:text-2xl text-center uppercase text-[#dc0073] mb-2 '>Lo que te ofrecemos</h3>
            <Slider imagesData={imagesData} title={descriptionTitle} description={descriptionData} url='/' />
          </article>
          {/* Historia de clientes */}
          <article className='w-full'>
            <h3 className='w-full mt-4 text-xl md:text-2xl lg:text-2xl text-center uppercase text-[#dc0073] mb-2 '>Historias de clientes</h3>
            <SliderHistory />
          </article>
          <section className='mt-10 '>
            <h3 className='w-full mt-4 text-xl md:text-2xl lg:text-2xl text-center uppercase text-[#dc0073] mb-2 '>Contáctanos</h3>
            <div className='w-full text-center'>
              <button className='px-2 py-2 text-white underline bg-blue-600 rounded-md'>Ponte en contacto con un especialista</button>
            </div>
            <ContactForm />
          </section>
        </section>
      </main>
    </div>
  )
}