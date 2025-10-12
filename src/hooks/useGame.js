import { useState, useEffect } from "react";

const values = ["🍎","🍌","🍉","🍇","🍓","🍍","🥝","🍒"];

export function useGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
     
    const duplicated = [...values, ...values]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value }));
    setCards(duplicated);
  }, []);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = newFlipped;
      if (cards[a].value === cards[b].value) {
        setMatched(prev => [...prev, a, b]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const resetGame = () => {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsFinished(false);
    const duplicated = [...values, ...values]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value }));
    setCards(duplicated);
  };

  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length) {
      setIsFinished(true);
    }
  }, [matched, cards]);

  return { cards, flipped, matched, moves, isFinished, handleFlip, resetGame };
}
