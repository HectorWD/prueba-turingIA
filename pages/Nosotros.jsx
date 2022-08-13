import React from 'react'
import Banner from '../components/banner/Banner'

const Nosotros = () => {
  const description='Somos consultores de BigData'
  return (
    <Banner 
    navTitle='Nosotros' 
    navDescription={description} 
    videoURL={`https://drive.google.com/uc?export=download&id=1hKeJwcb4AVnx1Ey0zHuAZJGNYkC_cgIK`}/>
  )
}

export default Nosotros