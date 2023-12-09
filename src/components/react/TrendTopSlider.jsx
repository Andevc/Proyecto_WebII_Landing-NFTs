import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; 
import '@styles/TrendTopSlider.css';
import topArt from '@lib/topArt.json';

export default function TopArt() {
    const colors = ['#73ff00','#e2e2e2','#1900ff','#dc143c'];
    const colorRnd = colors[Math.floor(Math.random()*(colors.length))];
    const avatarBg = {background: `linear-gradient(to right bottom, #02AAE5 30%, ${colorRnd})`};

    return (
        
        <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={'3.8'}
            coverflowEffect={{
                
                rotate: 10,
                stretch: 0,
                depth: 75,
                modifier:2.5,
            }}
            autoplay = {{
                delay:3000,
                disableOnInteraction:false
            }}
            loop = {true}
            modules={[Autoplay,EffectCoverflow]}
        >
        {

            topArt.map((item) => (
                <SwiperSlide>
                    <section className="slider-card-trend">
                        <section className="slider-card-image">
                        {
                            item.video === false 
                            ? <img src={item.image} alt="trending" />
                            : <video muted autoplay={"autoplay"} loop>
                                <source src={item.image} type="video/mp4" />
                            </video>
                        }
                            
                        </section>
                        <section className="slider-card-creator">
                            <section className="card-creator-avatar">
                                <img style={avatarBg} src={item.avatar} alt="creator" />
                            </section>
                            <section className="card-creator-info">
                                <p>@{item.autor}</p>
                                <p className='creator-info-value'>
                                    <svg viewBox="0 0 133.7 220.5" >
                                        <path d="M2.4 98.8l65-27.4 63 28.1L67.3 0zm.2 30.4l64.9 37.6 66.2-37.6-65.6 91.3z"/>
                                        <path d="M67.7 84.8L0 113.3l67.7 37.6 65.8-36.8z"/>
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
