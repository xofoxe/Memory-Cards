import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import GameGrid from "../components/GameGrid";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ResultsPage from "./Results";
import { useGame } from "../hooks/useGame";

export default function GamePage({ onBackToStart }) {
  const {
    cards,
    flipped,
    matched,
    moves,
    time,
    isFinished,
    handleFlip,
    resetGame,
    gridSize,
  } = useGame();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isFinished) setShowModal(true);
  }, [isFinished]);

  const handleNext = () => {
    setShowModal(false);
    onBackToStart(); 
  };

  return (
    <Layout title="Гра">
      <div className="flex justify-between mb-4 text-sm text-gray-600">
        <span>Ходи: {moves}</span>
        <span>Час: {time}s</span>
        <span>Поле: {gridSize}</span>
      </div>

      <GameGrid
        cards={cards}
        flipped={flipped}
        matched={matched}
        onFlip={handleFlip}
        gridSize={gridSize}
      />

      <div className="mt-4 flex gap-2">
        <Button onClick={resetGame}>Перезапустити</Button>
        <Button onClick={onBackToStart}>На початок</Button>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ResultsPage
          result={{ moves, time }}
          onRestart={() => {
            resetGame();
            setShowModal(false);
          }}
          onNext={handleNext}
          isModal
        />
      </Modal>
    </Layout>
  );
}
