import React from "react";
import sameeIcon from "./images/sameeIcon.jpg"
import "./styles/home.css"
// import laptop3 from "./images/laptop3.jpg"
import Contact from "./Contact";
import whatsapp from "./images/watsap_logo.jpg"
import facebook from "./images/fb_logo.png"
import { NavLink } from "react-router-dom";
import MySwiper from "./MySwipe";





function Home() {


  return (
    <div className="home_header">
        <div className="home_nav_flex">
            <div className="nav_icon">
                <img src={sameeIcon} alt="sameeIcon" width={70}/>
            </div>
            <div className="nav_text">
                <h3>SAMEE-<span className="samee_red">YON</span></h3>
                <h5>GLOBAL COMPUTER <br /> ENTERPRICE</h5>
            </div>
            <div className="nav_items">
                <div className="check_item">
                    <h5>
                    <NavLink>Avl Items</NavLink>
                    </h5>
                </div>
                <div className="check_whatsap">
                    <NavLink to="https://wa.me/c/2348140307577">
                        <img src={whatsapp} alt="whatsapp" width={30}/>
                    </NavLink>
                </div>
                <div className="check_facebook">
                <NavLink to="https://www.facebook.com/profile.php?id=100008424194126">
                    <img src={facebook} alt="facebook" width={23}/>
                </NavLink>
                </div>
            </div>
           
        </div>

        <div className="deals_in_head_heads">
            <div className="deals_in_head">
                <h5>DEALS IN <br /><span>LAPTOPS | PHONES, ACCESSORIES & MORE</span></h5>
            </div>
            <div className="deals_in_images">
                <MySwiper />
                {/* <img src={laptop3} alt="laptop3" width={300}/> */}
            </div>

        </div>
        
        <Contact />
    </div>
  );
}

export default Home;
