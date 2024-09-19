import React, { useState } from 'react';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss';
import ImageLazyLoad from '../LazyLoad/ImageLazyLoad';
import { useSelector } from 'react-redux';
import NoPoster from '../../assets/no-poster.png'
const Carousel = ( {data}) => {
  if (!Array.isArray(data)) {
    console.error('Invalid data type: expected an array');
    return null; // or handle the error appropriately
  }
  const {url}=useSelector((state)=>state.home);
  return (
    <>
  <Swiper
     spaceBetween={10}
      slidesPerView={5}
      centeredSlides={true}
     loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}   
     
      navigation={true}
      modules={[Autoplay,  Navigation,Virtual]}
      className="mySwiper" virtual
     >
        
        {data && data.map((slide,index) => {
           const posterUrl = slide.poster_path
           ? url.poster + slide.poster_path
           :NoPoster;
        
         return(
           <SwiperSlide key={slide.id} virtualIndex={index} className='swiper_slide'>  
          <div className='swiper_card' >
          <div className='swiper_card_poster'>
            <ImageLazyLoad src={posterUrl} alt={"poster"}/>
             <p>{slide.title}</p>
        </div>
        <div className='swiper_card_content'>
            <h3>{slide.description}</h3>
        </div>
    </div>
     
         </SwiperSlide>      
    )
         })}
    </Swiper>
    </>

  );
};

export default Carousel;
