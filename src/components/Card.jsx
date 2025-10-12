import React from "react";

export default function Card({ flipped = false, value = "?" }) {
  return (
    <div
      className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-semibold shadow cursor-pointer transition 
      ${flipped ? "bg-blue-100" : "bg-blue-600 text-white"}`}
    >
      {flipped ? value : "?"}
    </div>
  );
}
