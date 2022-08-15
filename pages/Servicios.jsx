import React from 'react'
import Banner from '../components/banner/Banner'
import ListSkill from '../components/sectionTools/ListSkill'
import SectionService from '../components/sectionTools/SectionService'

const Servicios = () => {
  const description = 'Tenemos una gran gama de soluciones para llevar al maximo tu compañia'
  return (
    <div>
      <Banner
        navTitle='Servicios'
        navDescription={description}
        videoURL={`https://drive.google.com/uc?export=download&id=1jW2wkRggl5WzQH4Y7DOcL22DA9bcb6H9`} />

      <section className='w-[80%] md:w-full m-auto md:grid md:grid-cols-2'>
        <div className='md:flex md:items-center'>
          <img
            src='https://www.turing-ia.com/assets/img/servicios.jpg'
          />
        </div>
        <section className=' md:ml-4'>
          <h4 className='w-full my-4 text-xl md:text-2xl lg:text-2xl  uppercase text-[#dc0073] '>
            Lo que ofrecemos
          </h4>
          <article className='mb-4'>
            <h5 className='mb-4 text-lg font-semibold'>Servicios en Turing-IA</h5>
            <p className='text-sm font-semibold md:text-lg'>
              Proporcionamos a nuestros clientes una gama de productos
              y servicios relacionados con el analisis de datos, mediante
              el uso de tecnologias como Tableau, Salesforce, PMI, Scrum.
            </p>
          </article>
          <article className='ml-4 w-[60%] md:w-[90%] '>
            <h5 className='text-lg font-semibold '>Expertos en</h5>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <ul className='mb-4 ml-4 text-lg font-semibold text-gray-400'>
                <li>Tableau</li>
                <li>Business Intelligence</li>
                <li>Business Analyst</li>
                <li>Data Analyst</li>
              </ul>
              <ul className='ml-4 text-lg font-semibold text-gray-400'>
                <li>Machine Learning</li>
                <li>Inteligencia Artificial</li>
                <li>Data Mining</li>
                <li>Big Data</li>
              </ul>
            </div>
          </article>
        </section>
      </section>

      <div className='relative md:grid md:grid-cols-3 lg:grid-cols-4 md:bg-slate-700 '>
        <section 
        className='flex flex-col items-center w-full pb-4 mt-8 bg-slate-700 md:flex-wrap md:col-span-2 lg:h-[70vh]'>
          <ListSkill title={'Training'}>
            <li>Tableau</li>
            <li>Altery</li>
            <li>R Studio</li>
            <li>Data Mining Weka</li>
            <li>Insight</li>
            <li>BI</li>
          </ListSkill>
          <ListSkill title='Services'>
            <div>
            <li className='mb-2 text-2xl'>Project-PMI</li>
            <li>BI y BA</li>
            <li>Big Data</li>
            <li >Tableau BluePrint</li>
            </div>
            <div>
            <li className='my-2 text-2xl'>Deployment</li>
            <li>Linux</li>
            <li>Windows</li>
            <li>Project-SCRUM</li>
            <li>Desarrollo WEB</li>
            </div>
            <div>
            <li>Desarrollo de APP</li>
            <li>Modelado de datos</li>
            <li>SQL Server</li>
            <li>MYSQL</li>
            <li>Oracle</li>
            </div>
          </ListSkill>
          <ListSkill title='Software'>
            <li>Tableau</li>
            <li>Altery</li>
            <li>Autho</li>
            <li>Otros</li>
            <li>Redhat</li>
            <li>Vmware</li>
            <li>arspersky</li>
          </ListSkill>
          <ListSkill title='Hardware'>
            <li>HP</li>
            <li>Dell</li>
            <li>IBM</li>
            <li>Otros</li>
          </ListSkill>
        </section>

        <section className='md:absolute md:w-[45%] md:right-0 md:h-[55%] bg-white md:border-2 lg:block col-span-1 '>
          <div className='w-[80%] m-auto my-6 text-slate-700'>
            <h4 className='text-xl font-bold'>Modelo de Negocios</h4>
            <h5 className='font-semibold tetx-lg'>A que nos dedicamos </h5>
            <p className='text-justify'>
              Nosotros somos expertos creación de
              proyectos de Big Data, mediante la
              metodología PMI. A su vez también nos
              dedicamos al desarrollo de software hecho
              a la medida utilizando distintas herramientas.
              Tenemos distintas cursos y capacitaciones
              para ti y tu empresa. Adicionalmente nos
              encargamos de vender licenciamiento de software
              y equipos hardware. Todo en conjunto forma
              el modelo de negocios de Turing-IA.
            </p>
          </div>
        </section>
      </div>
      <section className='w-[80%] m-auto md:w-[70%] '>
        <section className='mb-20'>
          <h4 className='w-full my-4 text-xl md:text-2xl lg:text-2xl  uppercase text-[#dc0073] '>
            Servicios que ofrecemos
          </h4>
          <p className='font-semibold text-justify md:text-xl'>
            Tenemos la siguiente gama de servicios
            en los cuales somos expertos, estamos
            capacitados para brindarte la mejor
            .experiencia y bienestar para ti y tu empresa.
          </p>
        </section>
        <SectionService
          title={'Implementación de Proyectos (Business Analyst)'}
          imgUrl={'https://www.turing-ia.com/assets/img/balog.jpg'}
          url='/'>
          Nuestra metodología de servicios se
          encuentra orientada en los estándares
          del Project Management Institute (PMI)
          ® e International Project Management
          Association (IPMA). Esto nos permite
          contar con las competencias para coordinar
          equipos de trabajo en el inicio, planeación,
          construcción, monitoreo y control de las
          actividades y recursos involucrados en un
          proyecto a partir de los objetivos y
          requerimientos de nuestro cliente.
        </SectionService>
        <SectionService
          title={'Desarrollo de Aplicaciones'}
          imgUrl={'https://www.turing-ia.com/assets/img/code.jpg'}
          url='/'>
          En un mundo moderno, con la cantidad
          de problemas y su complejidad cada vez
          es mayor, el desarrollo de aplicaciones,
          una herramienta para obtener soluciones
          precisas, dándole tareas repetitivas a
          la computadora y logrando así la
          automatización de procesos que todavía
          requieren la intervención de las
          personas en tareas repetitivas.
        </SectionService>
        <SectionService
          title={'Workshop (Blue Print)'}
          imgUrl={'https://www.turing-ia.com/assets/img/workshop.webp'}
          url='/'>
          Su estrategia debe abarcar la gestión
          de personas, procesos y cambios, incluida
          la identificación de casos de uso comercial
          inmediatos, la definición de roles,
          responsabilidades, el establecimiento
          de medidas para evaluar el éxito y el impacto.
        </SectionService>
        <SectionService
          title={'Capacitación'}
          imgUrl={'https://www.turing-ia.com/assets/img/caplog.jpg'}
          url='/'
        >
          <ul>
            <li>Tableau Prep Tableau</li>
            <li>Desktop Visual Analytics</li>
            <li>Tableau Server</li>
          </ul>
          <h4 className='self-start mt-4 '>Adicionalmente ofrecemos cursos sobre:</h4>
          <ul className='ml-4'>
            <li>Tableau Prep Tableau</li>
            <li>Desktop Visual Analytics</li>
            <li>Tableau Server</li>
          </ul>
        </SectionService>
        <SectionService
          title={'Venta de Software'}
          imgUrl={'https://www.turing-ia.com/assets/img/venta%20personal.jpg'}
          url='/'>
          Nos dedicamos a la venta de
          licencias de software, podemos
          recomendarle los sistemas que
          de acuerdo a sus necesidades
          son más adecuados.
        </SectionService>
        <SectionService
          title={'Venta de Hardware'}
          imgUrl={'https://www.turing-ia.com/assets/img/venta-hardware.jpg'}
          url='/'>
          Trabajamos con los mejores proveedores
          de México y tenemos la capacidad de
          cubrir cualquier necesidad que tenga
          de hardware. Redes, computadoras,
          impresoras y accesorios.
        </SectionService>
        <SectionService
          title={'Balanced Scorecard'}
          imgUrl={'https://www.turing-ia.com/assets/img/balanced%20scorecard.webp'}
          url='/'>
          Somos especialistas en el balanced
          scorecard. Dejanos tener un cumplimiento
          sostenido de la Misión y Visión de tu
          empresa a través de la gestión de cuatro
          perspectivas.
        </SectionService>

      </section>
    </div>
  )
}

export default Servicios