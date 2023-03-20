// важность: 2
  // Объявите две переменные: admin и name.
  // Запишите строку "Джон" в переменную name.
  // Скопируйте значение из переменной name в admin.
  // Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

  // Придумайте правильные имена

let admin;
let name = "John";

admin = name;
alert(admin);


// важность: 3
  // Создайте переменную для названия нашей планеты. Как бы вы её назвали?
  // Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
  

const ourPlanetName = "Earth";
let currentUserName;

// Какие буквы (заглавные или строчные) использовать для имён констант?
  // ответ - camelCase или CUPSLOCK (чтобы показать, что название этой переменной нельзя изменять)



// важность: 4

  // Рассмотрим следующий код:

  // const birthday = '18.04.1982';
  // const age = someCode(birthday);
  // У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).
  // Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
  // ответ - да, потому что это неизменная дата

// const AGE = someCode(BIRTHDAY); // а здесь?
  // ответ - нет, потому что каждый год значение переменной будет меняться


//Взаимодействие: alert, prompt, confirm
//задача
  // Создайте страницу, которая спрашивает имя у пользователя и выводит его.
let userName = prompt('What is your name?')
alert(userName)

// - - - 
// * задача 1 *
// Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// ответ: с - 2, d - 1


// * задача 2 *
// Какой результат будет у выражений ниже?
// выражение /////// ответ //
// "" + 1 + 0      / ""1
// "" - 1 + 0      / -1
// true + false    / false
// 6 / "3"         / 2
// "2" * "3"       / 6
// 4 + 5 + "px"    / 9px
// "$" + 4 + 5     / $45
// "4" - 2         / 2
// "4px" - 2       / NaN
// "  -9  " + 5    / "  -9  5"
// "  -9  " - 5    / -14
// null + 1        / 1
// undefined + 1   / NaN
// " \t \n" - 2    / 

//* задача 3 *
// В чём ошибка? Исправьте её. Результат должен быть 3.
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // 12

// ответ - promt всегда возвращает результат в виде строки,
// чтобы получить 3, нужно преобразовать строку в число.

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 3