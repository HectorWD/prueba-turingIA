import React from 'react'
import Banner from '../components/banner/Banner'

const Blog = () => {
    const description='Los grandes conocimientos engendran las grandes dudas'
  return (
    <Banner 
    navTitle='Blog' 
    navDescription={description} 
    videoURL={`https://drive.google.com/uc?export=download&id=1KJrqmU_F8f04alGCXZtPfAPpUeng0cqs`}/>
  )
}

export default Blog