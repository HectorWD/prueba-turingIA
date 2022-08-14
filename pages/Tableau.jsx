import React from 'react'
import Banner from '../components/banner/Banner'

const Tableau = () => {
    const description='Ayuda a las personas a ver y comprender los datos'
  return (
    <Banner 
    navTitle='Tableau' 
    navDescription={description} 
    videoURL={`https://drive.google.com/uc?export=download&id=1JiDmLaiIBJI43AGCh9j5UQ_pmwGGJ7We`}/>
  )
}

export default Tableau