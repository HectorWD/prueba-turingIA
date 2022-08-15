import React from 'react'
import Banner from '../components/banner/Banner'
import Image from 'next/image'
import NosotrosImage from '../public/img/nosotros/nosotros.webp'
import SectionArticle from '../components/sectionTools/SectionArticle'
import SectionRewards from '../components/sectionTools/SectionRewards'
import { sociosImages, metodologysImages } from '../public/img/assets/DataSocios'
import GridSection from '../components/sectionTools/GridSection'

const Nosotros = () => {
  const description = 'Somos consultores de BigData'
  return (
    <div>
      <Banner
        navTitle='Nosotros'
        navDescription={description}
        videoURL={`https://drive.google.com/uc?export=download&id=1hKeJwcb4AVnx1Ey0zHuAZJGNYkC_cgIK`} />

      <section className='grid grid-cols-1 mb-8 lg:grid-cols-2 w-[80%] lg:w-[60%] m-auto mt-4'>
        <article className='mb-2'>
          <h2 className='w-full mt-4 text-xl md:text-2xl lg:text-2xl  uppercase text-[#dc0073] '>¿Quienes somos?</h2>
          <h3 className='mb-2 text-lg font-semibold md:text-xl'>Turing-IA, tu mejor opción</h3>
          <p className='text-sm font-semibold text-justify md:text-lg lg:text-xl'>
            Somos una empresa Consultora de Big Data en México,
            desde hace 13 años proporcionamos servicios en Business
            Analytics mediante Knowledge Discovery in Database (KDD).
            Somos un grupo de especialistas en proyectos de Business
            Analytics con más de 13 años de experiencia. realizando
            análisis descriptivos, predictivos y prescriptivos. </p>
        </article>
        <figcaption className='w-[80%] md:w-[60%] lg:w-[70%] m-auto md:text-center'>
          <Image
            alt='Quienes somos' src={NosotrosImage}
          />
        </figcaption>
      </section>

      <section className='flex flex-col items-center justify-center my-6 w-[80%] lg:w-[60%]  m-auto'>
        <article className='mb-2 '>
          <h2 className='w-full mt-4 text-xl md:text-2xl lg:text-2xl  uppercase text-[#dc0073] text-center '>Nuestras Metodologias</h2>
          <p className='mt-4 text-sm font-semibold text-justify md:text-lg lg:text-xl'>
            Para llevar acabo proyectos, hace falta el uso de estandares
            que nos facilitan la manera en la que realizamos ciertas tareas,
            por ello utilizamos las siguientes metodologias.
          </p>
        </article>
        <div className='grid grid-cols-1 gap-3 m-2 md:grid-cols-5'>

          {metodologysImages?.map(({ url, alt }, index) => (
            <div key={index} className='flex items-center justify-center w-full '>
              <img
                src={url}
                alt={alt}
                className='w-[40%] md:w-[60vw] '
              />
            </div>
          ))}
        </div>
      </section>

      <section
        className='w-full h-[50vh] bg-cover mb-12'
        style={{ backgroundImage: `url(https://www.turing-ia.com/assets/img/bi-2.jpg)` }}>
        <div className='relative grid w-full h-full grid-cols-2'>
          <div className='grid grid-cols-2 '>
            <GridSection title={'De clientes'} number={150} />
            <GridSection title={'De clientes'} number={500} />
            <GridSection title={'De Proyectos'} number={150} />
            <GridSection title={'De sectores industriales'} number={150} />
          </div>
          <div className='relative '>
            <div className='absolute p-3 text-white bg-slate-800/60 left-5 top-4 z-[10]   '>
              <h5 className='text-sm md:text-lg lg:text-xl'> BUSSINES INTELIGENCE</h5>
              <p className='font-semibold text-md md:text-2xl'> Ayudamos a la toma de decisiones en todos los niveles de la empresa:</p>
              <p className='mt-4 text-xs font-semibold text-center lg:text-justify md:text-lg lg:text-xl'>
                Comprender mejor los resultados de negocio, anticiparse a ellos,
                darles forma mediante la identificación de tendencias, modelos
                estadísticos así como predecir amenazas, oportunidades potenciales
                , planificar, presupuestar y prever los recursos.
              </p>
            </div>
          </div>
          <div className='absolute w-full h-full bg-black/20' />
        </div>
      </section>
      <SectionArticle
        title={'Certificados por el (PMI® e IPMA® )'}
        imgUrl={'https://www.turing-ia.com/assets/img/cer-pmi.jpg'}>
        Profesionales con conocimientos y competencias
        acreditadas ante organismos nacionales (CONOCER)
        e internacionales (PMI® e IPMA®). -
        Aplicación e impacto inmediato en mejores
        prácticas para administrar proyectos dentro de las organizaciones.
        - Incremento en la capacidad para realizar más y mejores proyectos.
        - Líderes de equipos de trabajo altamente orientados a lograr los
        resultados que contribuyen a los objetivos estratégicos de la organización.
      </SectionArticle>
      <SectionArticle
        title={'Certificados por (Tableau Plataform®)'}
        imgUrl={'https://www.turing-ia.com/assets/img/certificado.jpg'}>
        Ayudamos en la toma de decisiones en todos los niveles de la empresa,
        comprender mejor los resultados de negocio, anticiparse a ellos,
        darles forma mediante la identificación de tendencias, modelos estadísticos,
        anomalías; analizarlos, comparar los casos “what-if” y predecir las amenazas,
        oportunidades potenciales, así como planificar, presupuestar y prever los recursos
      </SectionArticle>
      <SectionArticle
        title={'SCRUM'}
        imgUrl={'https://www.turing-ia.com/assets/img/scrumn.jfif'}
      >
        Profesionales con conocimientos y competencias
        acreditadas De todas las formas que existen para
        poder desarrollar software, únicamente de manera
        colaborativa es como se logra. Es por eso que aplicamos
        la metodología Scrum para llevar más allá tus objetivos
      </SectionArticle>
      <SectionArticle
        title={'Data Driven'}
        imgUrl={'https://www.turing-ia.com/assets/img/data-driven.jpg'}
      >
        Tomamos decisiones estratégicas basadas
        en la interpretación y el análisis de datos.
        Es decir, se trata de ver la manera cómo se
        estructuran y organizan los datos con el fin
        de aplicarlos a su negocio y mejorar sus estrategias.
      </SectionArticle>
      <SectionArticle
        title={'Conocimiento'}
        imgUrl={'https://www.turing-ia.com/assets/img/masters.jfif'}
      >
        <ul>
          <li>Big Data</li>
          <li>Data Mining</li>
          <li>Data to Insight</li>
          <li>Business Intelligence</li>
          <li>Business Analytics</li>
          <li>Machine Learning</li>
        </ul>
      </SectionArticle>

      <section className='w-[80%]  flex flex-col items-center m-auto'>
        <h4 className='w-full my-4 text-xl md:text-2xl lg:text-2xl  uppercase text-[#dc0073] text-center '>
          Nuestros premios
        </h4>
        <div className='grid grid-cols-2 gap-10 my-4'>
          <SectionRewards title={'Ganador del OPI'} />
          <SectionRewards title={'Ganador del Parthner boot camp'} />
          <SectionRewards title={'Ganador del OPI'} />
          <SectionRewards title={'Ganador del OPI'} />
        </div>
      </section>
      <section className='w-[80%]  flex flex-col items-center m-auto mb-12'>
        <h4 className='w-full my-4 text-xl md:text-2xl lg:text-2xl  uppercase text-[#dc0073] text-center '>
          Nuestros socios de Negocios
        </h4>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
          {sociosImages?.map(({ url, alt }, index) => (
            <img src={url} alt={alt} key={index} className='w-[70%] m-auto md:w-[40%] ' />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Nosotros