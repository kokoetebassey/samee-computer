// import React from 'react';

import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card_header">
      <img className='card_img' src={imageUrl} alt={title} />
      <h2 className='card_title'>{title}</h2>
      <p className='card_description'>{description}</p>
    </div>
  );
};

export default Card;