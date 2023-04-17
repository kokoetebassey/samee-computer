// import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Contact from "./Contact";


const Card = ({ title, description, imageUrl, Price }) => {
const [ isOn, setIson ] = useState(false)

function handleCard() {
  setIson(true)
}

  return (
    <>
    <div className="card" onClick={handleCard}>
        <img className='card_img' src={imageUrl} alt={title} />
        <h2 className='card_title'>{title}</h2>
        <h2 className='card_price'>{Price}</h2>
        <p className='card_description'>{description}</p>
    </div>

{
  isOn && (
      <div  className="contact_email">
      <Contact />
      </div>
  )
}
</>
  );
};

export default Card;