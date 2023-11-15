import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../css/slider.css';
import {Autoplay, EffectCoverflow } from 'swiper/modules';

function CreatorInfo({src, creatorName, nftValue}){
    const colors = ['#73ff00','#e2e2e2','#1900ff','#dc143c']
    const colorRnd = colors[Math.floor(Math.random()*(colors.length))]
    const avatarBg = {
        background: `linear-gradient(to right bottom, #02AAE5 30%, ${colorRnd})`,
    };
    return (
        <>
            <section className='creator-nft'>
                <img  style={avatarBg} src={src} alt="creator" />
                <section>
                    <p>@{creatorName}</p>
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

                        {nftValue} ETH
                    </p>
                </section>
            </section>
        </>
    )
}
export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 15,
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
                <SwiperSlide>
                    <img src="../../../public/trending/trending_00.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_02.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../../public/trending/trending_01.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_02.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />
                    
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_02.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_04.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_03.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_01.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="../../../public/trending/trending_04.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_01.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_05.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_06.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../../public/trending/trending_06.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_06.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_07.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_06.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="../../../public/trending/trending_08.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_06.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_09.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_07.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_10.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_08.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />

                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_11.jpg" />  
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_09.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_12.jpg" />
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_10.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../public/trending/trending_13.jpg" />                  
                    <CreatorInfo
                        src={'../../../public/avatar_profile/avatar_profile_10.png'}
                        creatorName={'User 001'}
                        nftValue={'1350'}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}