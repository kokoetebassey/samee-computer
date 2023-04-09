import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import laptop3 from "./images/laptop3.jpg"






function MySwiper() {
    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
        <img src={laptop3} alt="laptop3" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={laptop3} alt="laptop3" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={laptop3} alt="laptop3" />
        </SwiperSlide>
      </Swiper>
    );
  }

  export default MySwiper;
  
  
  
  
  