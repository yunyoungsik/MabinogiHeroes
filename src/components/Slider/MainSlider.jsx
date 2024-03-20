'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { mainSlider } from '@/constants';

const MainSlider = () => {
  return (
    <section className="hidden sm:hidden md:block w-fll h-[280px]">
      <h2 className="hidden">슬라이드</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
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
        {mainSlider.map((slider, index) => (
          <SwiperSlide key={index}>
            <Link href={slider.link} target='_blank'>
              <div className="w-full h-full relative">
                <h3 className="absolute top-[75%] right-[5%] translate-y-[-50%] z-50 text-[3rem] text-right text-white">
                  <span className="block text-[1.5rem] text-[#e2021a] leading-3">{slider.desc[0]}</span>
                  {slider.desc[1]}
                </h3>
                <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>
                <Image src={slider.src} width={1280} height={264} alt={slider.desc.join(" ")} className="w-full h-full object-cover" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlider;
