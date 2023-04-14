// import React from 'react';

import React from 'react';

const Card = ({ title, description, imageUrl, Price }) => {
  return (
    // <div className="card_header">
      <div className="card">
        <img className='card_img' src={imageUrl} alt={title} />
        <h2 className='card_title'>{title}</h2>
        <h2 className='card_price'>{Price}</h2>
        <p className='card_description'>{description}</p>
      </div>
    // </div>
  
  );
};

export default Card;