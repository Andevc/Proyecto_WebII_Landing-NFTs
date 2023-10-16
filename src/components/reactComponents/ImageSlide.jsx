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
                    modifier: 1.5,
                    
                }}
                autoplay = {{
                    delay:1500,
                    disableOnInteraction:false
                }}
                loop = {true}
                modules={[Autoplay,EffectCoverflow]}
                
            >
                <SwiperSlide>
                    <img src="../../../public/nfts/Default_ultra_detailed_shot_of_a_woman_holding_a_gun_and_weari_1_6e8057ed-c306-4dc2-a464-0a897b1ef8f9_1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/nfts/DreamShaper_v7_generate_a_Nfts_panda_cyberpunk_cinematographic_1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/nfts/DreamShaper_v7_generate_a_Nfts_with_a_cyberpunk_style_and_futu_0.jpg" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="../../../public/nfts/DreamShaper_v7_generate_a_Nfts_with_lion_cyberpunk_style_and_f_1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/nfts/DreamShaper_v7_generate_a_Nfts_with_a_cyberpunk_style_and_futu_1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/nfts/DreamShaper_v7_generate_a_Nfts_with_a_cyberpunk_style_and_futu_3.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/nfts/061713_Tianhe-2.large.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/tending/trend5.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/tending/trend4.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/tending/trend1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/tending/tend3.jpg" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="../../../public/tending/trend2.jpg" />
                </SwiperSlide>
                
                
            </Swiper>
        </>
    );
}