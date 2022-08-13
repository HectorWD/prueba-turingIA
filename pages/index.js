import Head from 'next/head'
import Banner from '../components/banner/Banner'

export default function Home() {
  const description='Hacemos los datos faciles de manejar'
  return (
    <div className='bg-white'>
      <Head>
        <title>Turing IA Tableau</title>
        <meta name="Prueba de Turing" content="Contiene la prueba a Turing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner navTitle='Bienvenido' navDescription={description} videoURL={`https://drive.google.com/uc?export=download&id=1J_Y4xY_FGItfFan4xu0GBo1w73WYqxFT`} />
    </div>
  )
}
