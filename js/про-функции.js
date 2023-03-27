// Функции

// Декларативные функции можно вызвать раньше их объявление
const sum = getSumTwoNumbers(2, 2)

/**
 * Пример Declaration функции с возратом значения
 * @param a
 * @param b
 * @returns {*}
 */
function getSumTwoNumbers(a, b) {
    return a + b;
}

/**
 * Пример Expression  функции с возратом значения
 * @param a
 * @param b
 * @returns {*}
 */
const sumTwoNumbers = function (a, b) {
    return a + b
}

// Нелья вызвать раньше объявления функции
sumTwoNumbers(2, 2)


/**
 * Пример полной Arrow  функции с возратом значения
 * @param a
 * @param b
 * @returns {*}
 */
const sumTwoNumbersArrowFull = (a, b) => {
    return a + b;
}

// Нелья вызвать раньше объявления функции
sumTwoNumbersArrowFull(2, 2)

/**
 * Пример краткой Arrow  функции с возратом значения
 * @param a
 * @param b
 * @returns {*}
 */
const sumTwoNumbersArrow = (a, b) => a + b

// Нелья вызвать раньше объявления функции
sumTwoNumbersArrow(2, 2)