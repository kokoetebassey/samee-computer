import React from 'react';
import Card from './Card';

function CardList ({ cards }) {
  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

export default CardList;