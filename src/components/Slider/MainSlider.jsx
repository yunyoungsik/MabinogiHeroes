'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MainSlider = () => {
  return (
    <section className='hidden sm:hidden md:block w-fll h-[280px]'>
      <h2 className='hidden'>슬라이드</h2>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={'auto'}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper w-fll h-full bg-white"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSlider;
