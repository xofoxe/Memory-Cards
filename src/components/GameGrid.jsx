import React from "react";
import Card from "./Card";

export default function GameGrid({ cards, flipped, matched, onFlip, gridSize }) {
  const cols = {
    "2x2": "grid-cols-2",
    "4x4": "grid-cols-4",
    "6x6": "grid-cols-6",
    "8x8": "grid-cols-8",
  }[gridSize] || "grid-cols-4";

  return (
    <div className={`grid ${cols} gap-2`}>
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
