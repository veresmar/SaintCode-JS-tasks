// важность: 2
  // Объявите две переменные: admin и name.
  // Запишите строку "Джон" в переменную name.
  // Скопируйте значение из переменной name в admin.
  // Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

  // Придумайте правильные имена

// let admin;
// let name = "John";

// admin = name;
// alert(admin);


// важность: 3
  // Создайте переменную для названия нашей планеты. Как бы вы её назвали?
  // Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
  

// const ourPlanetName = "Earth";
// let currentUserName;

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
// let userName = prompt('What is your name?')
// alert(userName)

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

// - =


// - - - 20 марта (1)
// Условия
// -1. Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.

// let test1 = 5;
// let test2 = 22;
// console.log(test1 > test2);
// //false

// // 0. Проверьте, что переменная test больше 10.
// let test = +prompt('введи число');;
// let testResult = (test > 10) ? 'больше 10' : 'меньше 10';

// // // 1. Напишите программу на JavaScript, которая принимает два целых числа и отображает большее.
// let age = +prompt('Сколько тебе лет?');
// let catAge = +prompt('Сколько лет твоему коту?');
// alert(`Вам с котом ${age + catAge} лет!`);

// // // 2. Напишите условное утверждение JavaScript, чтобы найти знак произведения трех чисел. Показать окно с указанным знаком.


// // // 3. Напишите условный оператор JavaScript для сортировки трех чисел. Покажите окно предупреждения, чтобы показать результат.


// // // 4. Напишите условный оператор JavaScript, чтобы найти наибольшее из пяти чисел. Покажите окно предупреждения, чтобы показать результат.
// let a = 4
// let b = 6
// let c = 1010
// let d = -1
// let e = -43

// if (a > b && a > c && a > d && a > e) {
//   console.log('a')
// }
// else if (b > a && b > c && b > d && b > e) {
//   console.log('b')
// }
// else if (c > a && c > b && c > d && c > e) {
//   console.log('c')
// }
// else if (d > a && d > b && d > c && d > e) {
//   console.log('d')
// }
// else (e > a && e > b && e > c && e > d) {
//   console.log('e')
// }


// если возраст больше  7 и меньше 18 выводим "мелкий"
// если возраст 18 , выводим "точно 18?"
// если от 18 до 100 - то "окей"
// если болье 100 - "все хорошо"

// let age = +prompt("how old r u?");

// if (age > 7 && age < 18) {
//   console.log("мелкий")
// } else if (age = 18) {
//   console.log("точно 18?")
// } else if (age >= 18 && age < 100) {
//   console.log("окей")
// } else (age > 100) {
//   console.log("все хорошо")
// }

// - - - 20 марта (2)
// Задание #1 
// Найти квадрат гиппотенузы. Размеры катетов нужно спросить у пользователя. 
// Дополнительно: вывести размер гиппотенузы 
let a = +prompt("Чему равна одна из двух сторон прямоугольного треугольника?"); 
let b = +prompt("Чему равна вторая сторона прямоугольного треугольника?"); 
const c = Math.sqrt(a**2 + b**2);
console.log(c)
 
// Задание #2 
// Найти площадь квадрата по длине диагонали. Диагональ спросить у пользователя. 
// Формула: площадь = половина от квадрата диагонали 
let d = +prompt("Чему равна диагональ квадрата?"); 
const e = d / 2;
console.log(e)

 
// Задание #3 
// Спросите у пользователя число и выведите 
// больше, меньше или равно оно нулю 
let f = +prompt("Введи число"); 

if (f < 0) {
  console.log('меньше');
} else if(f > 0) {
  console.log('больше');
} else if(f = 0) {
  console.log('равно');
}


 
// Задание #4 
// Спросите у пользователя 2 числа и выведите ему наибольшее 
// Если были переданы не числа, то сообщите ему об этом 
let ask1 = prompt("Введи первое число"); 
let ask2 = prompt("Введи второе число"); 

if (typeof ask1 === "string") {
  console.log('нужно число, а не буквы');
}
else if (typeof ask2 === "string") {
  console.log('нужно число, а не буквы');
}
else if (+(ask1) > +(ask2)) {
  console.log(`${ask1} больше`)
}
else if (+(ask1) < +(ask2)) {
  console.log(`${ask2} больше`)
}


 
// Задание #5 
// Спросите три числа у пользователя и выведите 
// сумму и произведение этих чисел 
let ask3 = +prompt("Введи первое число"); 
let ask4 = +prompt("Введи второе число"); 
let ask5 = +prompt("Введи третье число"); 
console.log(`сумма чисел = ${ask3 + ask4 + ask5}, произведение чисел = ${ask3 * ask4 * ask5}`)
 
// Задание #6 
// Игра угадай число, укажите в переменную число от 1 до 20 
// Спросите у пользователя какое число вы загадали. 
// Если он угадал, то поздравьте его с победой, если нет, 
// то скажите больше или меньше ваше число. 
// Спросите пользователя еще 3 раза, если он не ответит правильно, 
// то скажите что он проиграл 

// еще не готово 
 const myNum = 8;
 let askUser = +prompt("введи число от 1 до 20"); 
// while(myNum) {
  if (askUser === 8) {
   console.log('ура! ты угадал(а)!');
  }
  else if (askUser > 8) {
   console.log('попробуй меньшее число');
  }
  else if (askUser < 8) {
   console.log('попробуй большее число');
  }



 
// Задание #7 
// Перепишите на тернарный оператор 
// let result; 
// if (a + b < 4) { 
//   result = 'Мало'; 
// } else { 
//   result = 'Много'; 
// } 

 
// Задание #8 
// Спросите у пользователя 2 числа и выведите ему наибольшее 
// используйте тернарный оператор 
let j1 = prompt('напиши первое число')
let j2 = prompt('напиши второе число')

// Задание #9 
// Спросите у пользователя как его зовут, 
// если это не Юрий, то выведите "не пущу" 
let usName = prompt('как тебя зовут?')
if (usName === 'Юрий') {
  console.log('милости прошу к нашему шалашу')
}
else {
  console.log('не пущу')
}
 
// Задание #10 
// Спросите у пользователя число и проверьте 
// что оно больше 15 но меньше 20 
let askN = prompt('введи число')
if (askN > 15 && askN < 20) {
  console.log(true);
}
else {
  console.log(false);
}

// Задание #11
// Спросите у пользователя как его зову и сколько ему лет 
// Если его зовут Юра и он старше 20, то выведите "Юра, заходи" 
// Если его зовут Саша и он младше 15, то выведите "Саша, заходи" 
// Если его зовут Катя и ей 30, то выведите "добрый вечер, проходите пожалуйста" 
// всех остальных не пускать
let askUserName = prompt('как тебя зовут?')
let askUserAge = +prompt('сколько тебе лет?')

if (askUserName === 'Юра' && askUserAge > 20) {
  console.log("Юра, заходи");
} else if (askUserName === 'Саша' && askUserAge < 15) {
  console.log("Саша, заходи");
} else if (askUserName === 'Катя' && askUserAge === 30) {
  console.log("добрый вечер, проходите пожалуйста");
} else {
  console.log('тебе тут не рады')
}
