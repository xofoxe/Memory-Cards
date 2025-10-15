import React, { useState } from "react";
import StartPage from "./pages/Start";
import GamePage from "./pages/Game";

export default function App() {
  const [page, setPage] = useState("start");

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 flex flex-col items-center justify-center p-4">
      {page === "start" && <StartPage onStart={() => setPage("game")} />}
      {page === "game" && (
        <GamePage 
          onFinish={() => { 
          }}
          onBackToStart={() => setPage("start")}
        />
      )}
    </div>
  );
}
