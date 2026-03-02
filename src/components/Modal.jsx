import React from "react";
import ReactDOM from "react-dom";
/**
 * Модальне вікно
 *
 * @function Modal
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {Function} props.onClose
 * @returns {JSX.Element|null}
 */
export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 max-w-[90vw] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
