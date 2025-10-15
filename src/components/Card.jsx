import React from "react";

export default function Card({ flipped, value, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-semibold shadow cursor-pointer transition
        ${flipped ? "bg-white text-blue-600" : "bg-blue-600 text-white"}`}
    >
      {flipped ? value : "?"}
    </div>
  );
}
