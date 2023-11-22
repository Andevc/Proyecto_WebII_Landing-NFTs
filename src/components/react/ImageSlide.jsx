import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; 
import '@styles/slider.css';
import {Autoplay, EffectCoverflow } from 'swiper/modules';
import topArt from '@lib/topArt.json'


export default function App() {
    const colors = ['#73ff00','#e2e2e2','#1900ff','#dc143c'];
    const colorRnd = colors[Math.floor(Math.random()*(colors.length))];
    const avatarBg = {background: `linear-gradient(to right bottom, #02AAE5 30%, ${colorRnd})`};

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={'4'}
            coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                
            }}
            autoplay = {{
                delay:2000,
                disableOnInteraction:false
            }}
            loop = {true}
            modules={[Autoplay,EffectCoverflow]}
            
        >
        {
            topArt.map((item) => (
                <SwiperSlide>
                    <section className="slide-card-nft">
                        <img src={item.imgArt} alt="" />
                        <section className='creator-nft'>
                            <img style={avatarBg} src={item.avtar} alt="creator" />
                            <section>
                                <p>@{item.autor}</p>
                                <p className='creator-info-nft'>
                                    <svg 
                                        id="Layer_1" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 133.7 220.5" 
                                        width="1213" 
                                        height="2000"   
                                    >
                                        <path 
                                            class="st0" 
                                            d="M2.4 98.8l65-27.4 63 28.1L67.3 0zm.2 30.4l64.9 37.6 66.2-37.6-65.6 91.3z"
                                        />
                                        <path class="st0" d="M67.7 84.8L0 113.3l67.7 37.6 65.8-36.8z"/>
                                    </svg>

                                    {item.price} ETH
                                </p>
                            </section>
                        </section>
                    </section>
                </SwiperSlide>
            ))
        }
        </Swiper>
    );
}