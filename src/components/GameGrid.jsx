import React from "react";
import Card from "./Card";

export default function GameGrid({ cards, flipped, matched, onFlip }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          value={card.value}
          flipped={flipped.includes(index) || matched.includes(index)}
          onClick={() => onFlip(index)}
        />
      ))}
    </div>
  );
}
