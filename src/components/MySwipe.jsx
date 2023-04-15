import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import laptop3 from "./images/laptop3.jpg"
import hpmouse from "./images/hp-mouse.jpg"
import iphone1 from "./images/iphone1.jpg"
import mouse1 from "./images/mouse1.jpg"
import oppo1 from "./images/oppo1.jpg"
import mouse2 from "./images/mouse2.jpg"
import laptop4 from "./images/laptop4.jpeg"
import laptop5 from "./images/laptop5.jpeg"
import laptop6 from "./images/laptop6.jpeg"
import laptop7 from "./images/laptop7.jpeg"
import laptop8 from "./images/laptop8.jpeg"
import laptop9 from "./images/laptop9.jpeg"
import laptop10 from "./images/laptop10.jpeg"
import laptop11 from "./images/laptop11.jpeg"
import laptop12 from "./images/laptop12.jpeg"
import laptop13 from "./images/laptop13.jpeg"
import laptop14 from "./images/laptop14.jpeg"
import laptop15 from "./images/laptop15.jpeg"
import laptop16 from "./images/laptop16.jpeg"
import laptop17 from "./images/laptop17.jpeg"
import laptop18 from "./images/laptop18.jpeg"
// import laptop19 from "./images/laptop19.jpeg"
import laptop20 from "./images/laptop20.jpeg"
import { Navigation } from "swiper";
import "./styles/myswipe.css"







function MySwiper() {
    return (

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
      {/* <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop3} alt="laptop3" width={300}/>
          </div>
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={hpmouse} alt="hpmouse" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop4} alt="laptop4" width={300}/>
          </div>
        </div>
        {/* <h1 className='swipe_text'>jkqegqwhdkwjqk</h1> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop5} alt="laptop5" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop6} alt="laptop6" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop7} alt="laptop7" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={iphone1} alt="iphone1" width={150}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop8} alt="laptop8" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop9} alt="laptop9" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop10} alt="laptop10" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={mouse2} alt="mouse2" width={200}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop11} alt="laptop11" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop12} alt="laptop12" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop13} alt="laptop13" width={500}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={mouse1} alt="mouse1" width={250}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop14} alt="laptop14" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={oppo1} alt="oppo1" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop15} alt="laptop15" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop16} alt="laptop16" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop17} alt="laptop17" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop18} alt="laptop18" width={300}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-display-top">
          <div className="home-display-top-images">
            <img src={laptop20} alt="laptop20" width={300}/>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
    );
  }

  export default MySwiper;
  
  
  
  
  