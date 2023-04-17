// import React, { useState, useEffect, useRef  } from "react";
import sameeIcon from "./images/sameeIcon.jpg"
import "./styles/home.css"
import whatsapp from "./images/watsap_logo.jpg"
import twitter from "./images/twitter.png"
import { NavLink } from "react-router-dom";
import MySwiper from "./MySwipe";
// import Contact from "./Contact";






function Home() {
    // const [isOpen, setIsOpen] = useState(false);
    // const modalRef = useRef(null);
  
    // useEffect(() => {
    //   function handleClickOutside(event) {
    //     if (modalRef.current && !modalRef.current.contains(event.target)) {

    //     }
    //   }
  
    //   document.addEventListener('click', handleClickOutside);
    //   return () => {
    //     document.removeEventListener('click', handleClickOutside);
    //   };
    // }, [modalRef]);


   







  return (
    <div  className="home_header">
        <div className="home_nav_flex product_nav">
            <div className="nav_icon">
                <img src={sameeIcon} alt="sameeIcon" width={70}/>
            </div>
            <div className="nav_text">
                <h3>SAMEE-<span className="samee_red">YON</span></h3>
            </div>
            <div className="nav_items">
                <div className="check_item">
                    <h5>
                    <NavLink to="/ProductPage" className="avl_items">Avl Items</NavLink>
                    </h5>
                    <h5 >
                    <NavLink to="/contact" className="avl_items">Email Us</NavLink>
                    </h5>
                </div>
               
            </div>
           
        </div>
         
         {/* {
                isOpen && (
                    <div  className="contact_email">
                    <Contact />
                    </div>
                )
         } */}

        <div className="deals_in_head_heads">
            <div className="deals_in_head">
                <h3><span className="semmi_text">SAMEE-</span>
                <span className="samee_red">YON</span> GLOBAL COMPUTER <br /> ENTERPRICE DEALS IN <br />
                <span>LAPTOPS | PHONES, ACCESSORIES & MORE</span></h3>
            </div>


            <div className="sales_sections">
                <h4 className="sales_text">SALES & MAINTAINANCE OF LAPTOPS, ACCESSORIES, GADGETS, PHONES AND MORE</h4>
            </div>
            <div className="deals_in_images">
                <MySwiper />

            </div>

        </div>
        
      
        <div className="footer_header ">
            <h3 className="uk_laptop"><span className="semmi_text">SAMEE</span><span className="samee_red">-YON</span> UK used Laptop & Phones</h3>
            {/* <div className="uk_laptop_icons">
                <div className="check_whatsap">
                    <NavLink to="https://wa.me/c/2348140307577">
                        <img className="check_whatsap" src={twitter} alt="whatsapp" width={23}/>
                    </NavLink>
                </div>
                <div className="check_whatsap">
                    <NavLink to="https://wa.me/c/2348140307577">
                        <img className="check_whatsap" src={whatsapp} alt="whatsapp" width={23}/>
                    </NavLink>
                </div>
            </div> */}
            <div className="address">
                <h4 className="footer_addreess">Address:  34 Oron Road, Uyo AKS <br />Call:  09022188863, 09049019761</h4>   
                <div className="uk_laptop_icons">
                <div className="check_whatsap">
                    <NavLink to="https://wa.me/c/2348140307577">
                        <img className="check_whatsap" src={twitter} alt="whatsapp" width={23}/>
                    </NavLink>
                </div>
                <div className="check_whatsap">
                    <NavLink to="https://wa.me/c/2348140307577">
                        <img className="check_whatsap" src={whatsapp} alt="whatsapp" width={23}/>
                    </NavLink>
                <h4 className="copy_write">Copywrite &#169; 2023</h4>
                </div>
            </div> 
            </div>
        </div>
    </div>
  );
}

export default Home;
