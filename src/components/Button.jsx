import React from "react";

/**
 * Універсальна кнопка
 *
 * @param {Object} props
 * @param {*} props.children - Вміст кнопки
 * @param {Function} [props.onClick] - Обробник кліку
 * @param {"button"|"submit"} [props.type="button"] - Тип кнопки
 * @param {"primary"|"secondary"} [props.variant="primary"] - Варіант стилю
 * @param {boolean} [props.disabled=false] - Чи вимкнена кнопка
 */
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  color
}) {
  const baseStyles =
    "p-2 rounded-xl font-medium transition-all duration-200 shadow-md";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-1",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: color }}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed shadow-none" : "cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}