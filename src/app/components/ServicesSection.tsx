import React from 'react'
import ServiceCard from './ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';

const ServicesSection: React.FC = () => {
  return (
    <>
      <div className='px-6 md:px-32 my-6 md:my-10'>
        <h2 className='text-2xl md:text-3xl text-center md:text-left text-primary-100 font-bold'>Services</h2>
        <p className='text-xl md:text-2xl text-center md:text-left text-primary-100 font-semibold'>Discover the benefits of our academy</p>
      </div>
      <Swiper
        className='my-6 w-11/12'
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className='py-10 h-auto'>
          <div className='flex justify-center items-center'>
            <ServiceCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className='py-10 h-auto'>
          <div className='flex justify-center items-center'>
            <ServiceCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className='py-10 h-auto'>
          <div className='flex justify-center items-center'>
            <ServiceCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className='py-10 h-auto'>
          <div className='flex justify-center items-center'>
            <ServiceCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className='py-10 h-auto'>
          <div className='flex justify-center items-center'>
            <ServiceCard />
          </div>
        </SwiperSlide>

        <SwiperSlide className='py-10 h-auto'>
          <div className='flex justify-center items-center'>
            <ServiceCard />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default ServicesSection