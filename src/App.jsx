import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start";
import GamePage from "./pages/Game";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 flex flex-col items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game/:userId" element={<GamePage />} />
      </Routes>
    </div>
  );
}
