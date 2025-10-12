import React, { useState } from "react";
import StartPage from "./pages/Start";
import GamePage from "./pages/Game";
import ResultsPage from "./pages/Results";

export default function App() {
  const [page, setPage] = useState("start");
  const [result, setResult] = useState({ moves: 0, time: 0 });

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 flex flex-col items-center justify-center p-4">
      {page === "start" && <StartPage onStart={() => setPage("game")} />}
      {page === "game" && (
        <GamePage
          onFinish={(res) => {
            setResult(res);
            setPage("results");
          }}
        />
      )}
      {page === "results" && (
        <ResultsPage
          result={result}
          onRestart={() => setPage("start")}
        />
      )}
    </div>
  );
}
