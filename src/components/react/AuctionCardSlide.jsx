import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';


import '@styles/AuctionSlider.css'

import auctionInfo from '@lib/auctionArt.json'

import moment from 'moment';

const CountdownTimer = ({ targetDays }) => {
  const targetDate = moment().add(targetDays, 'days');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = moment();
    const diff = targetDate.diff(now, 'milliseconds');

    if (diff <= 0) {
      // El tiempo objetivo ha pasado
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const duration = moment.duration(diff);
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

    return (
        <p className="text-3xl font-semibold tracking-wide">
            {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </p>
    );
};

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

                        <section class="slider-card">
                            {/* Auction Image */}
                            <section class="slider-card-img">
                                <img src={item.img} alt={item.imgTittle} />
                            </section>
                            
                            {/* Auction Description */}

                            <section class="slider-card-content">
                                
                                <section class="slider-card-content-header">
                                    <h1 className="text-5xl tracking-widest">{item.tittle}</h1>
                                    <section className="slider-card-content-header-user">
                                        <section className="header-user-profile">
                                            <img src={item.avatar} alt="avatar profile" />
                                            <svg viewBox="0 0 24 24" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M0 0h24v24H0z" fill="#fff"/>
                                                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="#ff004c" />
                                            </svg>
                                        </section>
                                        <section >
                                            <p className='text-xl font-semibold tracking-widest '>{item.autor}</p>
                                            <p className='text-gray-400 tracking-wider' >@{item.userNane}</p>
                                        </section>    
                                    </section>
                                </section>


                                <section className="slider-card-content-info">
                                    <section className='content-info-price' >
                                        <p className="text-gray-400 tracking-widest">Current Bid</p>
                                        <p className="text-3xl font-semibold tracking-wide">{item.priceNFT} ETH</p>
                                        <p className="text-gray-400 tracking-widest">${item.priceUSD} </p>
                                    </section>
                                    <section className='content-info-auction'>
                                        <p className="text-gray-400 tracking-widest">Auction end in</p>
                                        <CountdownTimer targetDays={item.auction}/>
                                        <p className="text-gray-400 tracking-widest">{item.date}</p>
                                    </section>

                                </section>
                                
                                <section class="slider-card-buttons">
                                    
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
