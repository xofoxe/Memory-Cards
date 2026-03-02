import { useState, useEffect, useRef } from "react";
/**
 * Хук таймера
 *
 * @param {number} initialTime - Початковий час у секундах
 * @param {boolean} isActive - Чи активний таймер
 * @returns {Object} result
 * @returns {number} result.time - Поточний час таймера
 * @returns {function(): void} result.reset - Функція для скидання таймера
 */
export function useTimer(isRunning) {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const reset = () => setTime(0);

  return { time, reset };
}
