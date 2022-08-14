import React from 'react'
import wholeFood from '../../public/img/history/wholefoodsteaser.jpg'
import SliderItem from './structure/SliderItem'
const SliderHistory = () => {
    const desc='Whole Foods Market democratizael acceso a los datos en sus 460 tiendas para 18 000 empleados gracias a Tableau'
  return (
    <div
    className='h-[65vh] w-full relative grid md:grid  md:grid-cols-2 lg:grid-cols-3 my-2'>
        <div className='relative'>
        <SliderItem img={wholeFood} descriptionImage={desc} />
        </div>
        <div className='relative hidden md:block'>
        <SliderItem img={wholeFood} descriptionImage={desc} />
        </div>
        <div className='relative hidden lg:block'>
        <SliderItem img={wholeFood} descriptionImage={desc} />
        </div>
    </div>
  )
}

export default SliderHistory