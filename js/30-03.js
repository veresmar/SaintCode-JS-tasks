// Задание 1:

// Узнать количество дней в месяце

// Напишите функцию getDaysInMonth, которая в качестве параметров принимает
// месяц и год, и возвращает количество дней в месяце.

// Пример:
// getDaysInMonth(9, 2021)); // 30

// let getDaysInMonth = function(month, year) {
  
//   return new Date(year, month, 0).getDate();
 
//  };
//  console.log(getDaysInMonth(2,1995));

// Задание 2:

// Получите текущую дату

// Напишите функцию getCurrentDay, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
// Формат даты dd/mm/yyyy, dd-mm-yyyy
// Пример:
// getCurrentDay('-'));

// const getCurrentDay = (separator) => new Date().toLocaleDateString().split('/').join(separator);
// console.log(getCurrentDay('-'))

// Задание 3:

// Получить название месяца на русском языке

// Напишите функцию getMonthName, которая принимает дату в виде строки и
// возвращает название месяца на русском языке с определенной даты.
// Формат принимаемого параметра даты mm/dd/yyyy (mm-dd-yyyy)
// Пример:
// getMonthName("10-11-2021"); // октябрь

// const getMonthName = (month, day, year) =>



// Задание 4:

// Проверьте, является ли дата выходным днем
// Напишите функцию isWeekend(date), чтобы проверить, является ли день выходным.
// Формат принимаемого параметра даты mm/dd/yyyy
// Пример:
// isWeekend('01/09/2021)); // weekend

// Задание 5:

// Разница между двумя датами в днях
// Напишите функцию dateDiffInDays(date1, date2), чтобы узнать разницу между двумя датами в днях.
// Пример:
// dateDiffInDays('04/02/2021', '11/04/2021')); // 216

// Задание 6
// Получить и вывести в консоль текущую дату в формате 14 января 2022 г. (можно использовать Intl.DateTimeFormat)

// const startElem = document.getElementById('start');
// document.body.startElem

document.getElementById('start');
document.getElementById('start').parentElement;
console.dir()

const start = document.getElementById('start');
const finish = start.parentElement