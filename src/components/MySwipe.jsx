import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import laptop3 from "./images/laptop3.jpg"
import { Navigation } from "swiper";
import "./styles/myswipe.css"







function MySwiper() {
    return (
      // <Swiper
      //   spaceBetween={30}
      //   slidesPerView={3}
      //   loop={true}
      //   pagination={{ clickable: true }}
      // >
      //   <SwiperSlide>
      //   <img src={laptop3} alt="laptop3" />
      //   </SwiperSlide>
      //   <SwiperSlide>
      //   <img src={laptop3} alt="laptop3" />
      //   </SwiperSlide>
      //   <SwiperSlide>
      //   <img src={laptop3} alt="laptop3" />
      //   </SwiperSlide>
      // </Swiper>
      <>
        <div className="slot-line1-arrows-home-top">
          <div className="slot-arrow-left-home-top">
            <h3> &#10094;</h3>
          </div>
          <div className="slot-arrow-right-home-top">
            <h3> &#10095;</h3>
          </div>
        </div>
      <Swiper
      slidesPerView={1}
      spaceBetween={15}
      speed={2000}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".slot-arrow-right-home-top",
        prevEl: ".slot-arrow-left-home-top",
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
    );
  }

  export default MySwiper;
  
  
  
  
  