/**
 * Представляє одну карту гри
 * @typedef {Object} Card
 * @property {string} id Унікальний ідентифікатор карти
 * @property {string} value Значення або зображення карти
 * @property {boolean} isFlipped Чи перевернута карта
 * @property {boolean} isMatched Чи знайдена пара
 */

/**
 * Налаштування гри
 * @typedef {Object} GameSettings
 * @property {number} gridSize Розмір сітки (наприклад 4 для 4x4)
 * @property {number} timeLimit Ліміт часу в секундах
 */

/**
 * Результат гри
 * @typedef {Object} GameResult
 * @property {number} moves Кількість ходів
 * @property {number} time Час проходження
 * @property {boolean} isWin Чи виграв гравець
 */