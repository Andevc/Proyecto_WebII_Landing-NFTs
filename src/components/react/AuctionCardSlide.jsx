import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';


import '@styles/AuctionSlider.css'
import auctionInfo from '../../content/AutionNFTs.json'

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
        <p className="text-3xl">
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
                        <section class="card">
                            <section class="card-img">
                                <img src={item.img} alt="m" />
                            </section>
                            <section class="card-content">
                                <section class="card-content-info">
                                    <h1>{item.tittle}</h1>
                                    <img src={item.profile} alt="" />
                                    <p>{item.autor}</p>
                                    <p>@{item.userNane}</p>
                                </section>
                                <section className="flex items-center justify-evenly w-full overflow-hidden">
                                    <section >
                                        <p className="text-gray-400">Current Bid</p>
                                        <p className="text-3xl">{item.priceNFT} ETH</p>
                                        <p className="text-gray-400">${item.priceUSD} </p>
                                    </section>
                                    <hr className="bg-white w-14 rotate-90" />
                                    <section>
                                        <p className="text-gray-400">Auction end in</p>
                                        <CountdownTimer targetDays={item.auction}/>
                                        <p className="text-gray-400">{item.date}</p>
                                    </section>
                                </section>
                                
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
