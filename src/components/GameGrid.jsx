import React from "react";
import Card from "./Card";

export default function GameGrid() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: 16 }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
