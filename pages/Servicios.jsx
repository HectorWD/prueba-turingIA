import React from 'react'
import Banner from '../components/banner/Banner'

const Servicios = () => {
    const description='Tenemos una gran gama de soluciones para llevar al maximo tu compañia'
  return (
    <Banner 
    navTitle='Servicios' 
    navDescription={description} 
    videoURL={`https://drive.google.com/uc?export=download&id=1jW2wkRggl5WzQH4Y7DOcL22DA9bcb6H9`}/>
  )
}

export default Servicios