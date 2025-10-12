import React, { useState } from "react";
import StartPage from "./pages/Start";
import GamePage from "./pages/Game";
import ResultsPage from "./pages/Result";

export default function App() {
  const [page, setPage] = useState("start");

  const goTo = (p) => setPage(p);

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 flex flex-col items-center justify-center p-4">
      {page === "start" && <StartPage onStart={() => goTo("game")} />}
      {page === "game" && <GamePage onFinish={() => goTo("results")} />}
      {page === "results" && <ResultsPage onRestart={() => goTo("start")} />}
    </div>
  );
}
