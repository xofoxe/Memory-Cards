import React, { useEffect } from "react";
import Layout from "../components/Layout";
import GameGrid from "../components/GameGrid";
import Button from "../components/Button";
import { useGame } from "../hooks/useGame";

export default function GamePage({ onFinish }) {
  const { cards, flipped, matched, moves, isFinished, handleFlip, resetGame } = useGame();

  useEffect(() => {
    if (isFinished) {
      onFinish({ moves });
    }
  }, [isFinished, moves, onFinish]);

  return (
    <Layout title="Гра">
      <div className="flex justify-between mb-4 text-sm text-gray-600">
        <span>Ходи: {moves}</span>
      </div>

      <GameGrid
        cards={cards}
        flipped={flipped}
        matched={matched}
        onFlip={handleFlip}
      />

      <div className="mt-4">
        <Button onClick={resetGame}>Перезапустити</Button>
      </div>
    </Layout>
  );
}
