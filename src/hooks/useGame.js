import { useState, useEffect, useRef } from "react";

export function useGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [gridSize, setGridSize] = useState("4x4");
  const [time, setTime] = useState(0); 
  const timerRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("gameSettings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setGridSize(parsed.gridSize || "4x4");
    }
  }, []);

  useEffect(() => {
    const fruits = [
      "🍎","🍌","🍉","🍇","🍓","🍍","🥝","🍒","🍑","🍋","🍈","🥥","🍐","🍊","🍅","🍏",
      "🍆","🌽","🥕","🥑","🍄","🥦","🥭","🍔","🍕","🍟","🍩","🍪","🍰","🍫","🍿","🥨",
    ];

    const gridMap = { "2x2": 2, "4x4": 8, "6x6": 18, "8x8": 32 };
    const pairCount = gridMap[gridSize] || 8;

    const selected = fruits.slice(0, pairCount);
    const duplicated = [...selected, ...selected]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value }));

    setCards(duplicated);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsFinished(false);
    setTime(0);  
  }, [gridSize]);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    if (moves === 0 && flipped.length === 0 && !timerRef.current) {
      startTimer();
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = newFlipped;

      if (cards[a].value === cards[b].value) {
        setMatched((prev) => [...prev, a, b]);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length) {
      stopTimer();
      setIsFinished(true);
    }
  }, [matched, cards]);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetGame = () => {
    stopTimer();
    setMatched([]);
    setFlipped([]);
    setMoves(0);
    setTime(0);
    setIsFinished(false);
  };

  useEffect(() => {
    return () => stopTimer(); 
  }, []);

  return {
    cards,
    flipped,
    matched,
    moves,
    isFinished,
    handleFlip,
    resetGame,
    gridSize,
    time,
  };
}
