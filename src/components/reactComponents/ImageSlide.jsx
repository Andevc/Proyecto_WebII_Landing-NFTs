import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../css/slider.css';
import {Autoplay, EffectCoverflow } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    
                }}
                autoplay = {{
                    delay:2500,
                    disableOnInteraction:false
                }}
                loop = {true}
                modules={[Autoplay,EffectCoverflow]}
                
            >
                <SwiperSlide>
                    <img src="../../../public/img1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/img2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../../public/img3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../../public/img4.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}