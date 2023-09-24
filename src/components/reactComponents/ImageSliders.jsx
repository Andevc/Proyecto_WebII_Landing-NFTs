import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import '../css/style.css';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';


export default function App() {
  
  
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate:50,
          stretch:0,
          depth:10,
          modifier:1,
          slideShadows:true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, EffectCoverflow]}
      >
          <SwiperSlide>
               <img src="../../../public/img1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src="../../../public/img2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src="../../../public/img3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src="../../../public/img4.jpg" alt="" />
          </SwiperSlide>

        
      </Swiper>
    </>
  );
}