import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { historyImages,descriptionImg } from '../../public/img/assets/DataHistory'
import SliderItem from './structure/SliderItem'


const SliderHistory = () => {
  const sliderLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const sliderRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
      <div>
        <div className='relative flex items-center w-full group'>

          <MdChevronLeft
            className='absolute z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block'
            size={40}
            onClick={sliderLeft}
          />

          <div id={'slider'}
            className='relative left-0 w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth'>
            {historyImages.map((item,index) => (
              <div key={index}  className='relative inline-block w-full md:w-[50vw] lg:w-[33vw] h-full p-8 cursor-pointer ease-in duration-500'>
              <SliderItem imgUrl={item} descriptionImage={descriptionImg[index]}/>
              </div>

            ))}
          </div>

          <MdChevronRight
            className='absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block'
            size={40}
            onClick={sliderRight}
          />

        </div>
      </div>
  )
}

export default SliderHistory