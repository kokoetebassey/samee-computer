import "./styles/productpage.css"
// import laptop3 from "./images/laptop3.jpg"
import React from 'react';
import Card from './Card';
import sameeIcon from "./images/sameeIcon.jpg"
import { NavLink } from "react-router-dom";
import whatsapp from "./images/watsap_logo.jpg"
import twitter from "./images/twitter.png"
import MacBook from "./images/MacBook_Pro.jpg"
import Dell_XPS from "./images/Dell_XPS.jpg"
import Spectre from "./images/Spectre x360.jpg"
import Lenovo from "./images/Lenovo.jpg"
import Asus from "./images/Asus.jpg"
import Microsoft from "./images/Microsoft.jpg"
import Acer from "./images/Acer.jpg"
import Razer from "./images/Razer.jpg"
import LG from "./images/LG.jpg"
import MSI from "./images/MSI.jpg"
import Alienware from "./images/Alienware.jpg"
import IdeaPad from "./images/IdeaPad.jpg"
import HP_Envy from "./images/HP_Envy x360.jpg"
import Acer_Nitro from "./images/Acer_Nitro.jpg"
import Asus_Gaming from "./images/Asus_Gaming.jpg"
import Pavilion_x360 from "./images/Pavilion_x360.jpg"
import Dell_G5 from "./images/Dell_G5.jpg"
import Lenovo_Legion from "./images/Lenovo_Legion.jpg"



const ProductPage = () => {
  return (
    <>
     <NavLink to="/">
      <div className="home_nav_flex product_nav">
    <div className="nav_icon">
        <img src={sameeIcon} alt="sameeIcon" width={70}/>
    </div>
    <div className="nav_text">
        <h3>SAMEE-<span className="samee_red">YON</span></h3>
        {/* <h5>GLOBAL COMPUTER <br /> ENTERPRICE</h5> */}
    </div>
   
    </div>
      </NavLink>


    <div className="card_header">
      <Card
        Price="#130,000.00"
        title="MacBook Pro"
        description="MacBook Pro - A high-end laptop designed and 
        manufactured by Apple, featuring a powerful processor, 
        stunning Retina display, and sleek design."
        imageUrl={Acer}
      />
      <Card
        Price="#130,000.00"
        title="Dell XPS 13"
        description="Dell XPS 13 - A popular ultrabook with a 
        thin and light design, powerful performance, and long battery life."
        imageUrl={Dell_XPS}
      />
      <Card
        Price="#130,000.00"
        title="HP Spectre x360"
        description="HP Spectre x360 - A 2-in-1 laptop with a flexible hinge that allows 
        it to be used as a tablet, featuring a slim and stylish design and powerful performance."
        imageUrl={Spectre}
      />
      <Card
        Price="#130,000.00"
        title="Lenovo ThinkPad X1 Carbon"
        description="Lenovo ThinkPad X1 Carbon - A business laptop with a durable and lightweight design, 
        long battery life, and powerful performance."
        imageUrl={Lenovo}
      />
      <Card
        Price="#130,000.00"
        title="Asus ZenBook UX425"
        description="Asus ZenBook UX425 - An ultrabook with a thin and light design, 
        featuring a long battery life and powerful performance"
        imageUrl={Asus}
      />
      <Card
        Price="#130,000.00"
        title="Microsoft Surface Laptop 4"
        description="Microsoft Surface Laptop 4 - A premium laptop with a slim design, 
        high-resolution display, and excellent performance."
        imageUrl={Microsoft}
      />
      <Card
        Price="#130,000.00"
        title="Acer Swift 5"
        description="Acer Swift 5 - A lightweight and portable laptop with a long battery life, 
        featuring a powerful processor and sleek design."
        imageUrl={MacBook}
      />
      <Card
        Price="#130,000.00"
        title="Razer Blade Stealth 13"
        description="Razer Blade Stealth 13 - A gaming laptop with a sleek and portable design, 
        featuring a powerful graphics card and long battery life."
        imageUrl={Razer}
      />
      <Card
        Price="#130,000.00"
        title="LG Gram"
        description="LG Gram - A lightweight laptop with a long battery life, 
        featuring a high-resolution display and powerful performance."
        imageUrl={LG}
      />
      <Card
        Price="#130,000.00"
        title="MSI Prestige 14"
        description="MSI Prestige 14 - A high-performance laptop 
        designed for creative professionals, featuring a powerful graphics card and long battery life.
        "
        imageUrl={MSI}
      />
      <Card
        Price="#130,000.00"
        title="Alienware m15 R4"
        description="Alienware m15 R4 - A gaming laptop with a powerful processor and graphics card, 
        featuring a sleek and portable design."
        imageUrl={Alienware}
      />
      <Card
        Price="#130,000.00"
        title="Lenovo IdeaPad 5"
        description="Lenovo IdeaPad 5 - A budget laptop with a thin and light design, 
        featuring a long battery life and decent performance."
        imageUrl={IdeaPad}
      />
      <Card
        Price="#130,000.00"
        title="HP Envy x360"
        description="HP Envy x360 - A 2-in-1 laptop with a flexible hinge that allows it to be used as a tablet, 
        featuring a slim design and decent performance."
        imageUrl={HP_Envy}
      />
      <Card
        Price="#130,000.00"
        title="Acer Nitro 5"
        description="Acer Nitro 5 - A budget gaming laptop with a powerful graphics card, 
        featuring a sleek design and long battery life."
        imageUrl={Acer_Nitro}
      />
      <Card
        Price="#130,000.00"
        title="Asus TUF Gaming A15"
        description="Asus TUF Gaming A15 - A mid-range gaming laptop with a powerful graphics card and long battery life, 
        featuring a durable and rugged design."
        imageUrl={Asus_Gaming}
      />
      <Card
        Price="#130,000.00"
        title="HP Pavilion x360"
        description="HP Pavilion x360 - A budget 2-in-1 laptop with a flexible hinge that allows it to be used as a tablet, 
        featuring a decent performance and sleek design.."
        imageUrl={Pavilion_x360}
      />
      <Card
        Price="#130,000.00"
        title="Dell G5 15"
        description="Dell G5 15 - A mid-range gaming laptop with a powerful graphics card and decent performance, 
        featuring a sleek design and long battery life."
        imageUrl={Dell_G5}
      />
      <Card
        Price="#130,000.00"
        title="Lenovo Legion 5"
        description="Lenovo Legion 5 - A mid-range gaming laptop with a powerful graphics card and long battery life, 
        featuring a durable and rugged design."
        imageUrl={Lenovo_Legion}
      />
    </div>

    <div className="footer_header footer_product">
            <h3 className="uk_laptop">SAMEE-<span className="samee_red">YON</span> UK used Laptop & Phones</h3>
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
                <h4>Address:  34 Oron Road, Uyo AKS <br />Call:  09022188863, 09049019761</h4>   
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
    </>
  );
};

export default ProductPage;








// import React from 'react';


// const ProductPage = () => {
//   return (
//     <div style={{textAlign: 'center', color: 'blue'}}>
// <h1>This Page is Under Maintainance: <br />Check Back</h1>
//     </div>
//   );
// };

// export default ProductPage;