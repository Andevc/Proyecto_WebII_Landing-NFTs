import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';


import '@styles/AuctionSlider.css'
import auctionInfo from '../../content/AutionNFTs.json'
export default function AuctionCards(){
    return(
        <Swiper
            slidesPerView={'1'}
            grabCursor={false}
            loop={true}
            navigation={true}
            autoplay={{
                delay:10000,
                disableOnInteraction:false
            }}
            modules={[Navigation, Autoplay]}
        >
        {
            auctionInfo.map((item, index) => (
                <SwiperSlide key={index}>
                    <section class="slider-section">
                        <section class="card">
                            <section class="card-img">
                                <img src={item.img} alt="m" />
                            </section>
                            <section class="card-content">
                                <section class="card-content-info">
                                    <h1>{item.tittle}</h1>
                                    <p>{item.autor}</p>
                                </section>
                                <section>sdasda</section>
                                <section class="card-content-button">
                                    asda
                                </section>
                            </section>
                        </section>
                    </section> 
                </SwiperSlide>
            ))
        }

        </Swiper>
    )
}
