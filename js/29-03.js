// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt)
// и после показывает их сумму.
        // let num1 = +prompt('give number 1')
        // let num2 = +prompt('give number 2')

        // let isSame = Object.is(Number.isFinite(num1, num2));

        // console.log(num1 + num2)




// ДОП ЗАДАНИЕ (РЕШАЕМ ПОСЛЕДНИМ)Встроенный метод Math.random() возвращает случайное число
// от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число
// с плавающей точкой от min до max (но не включая max). 

        // function random(min, max) {
        //   return Math.random() * (max - min) + min;
        // }
        // console.log(random(0,1))

// https://code.mu/ru/javascript/book/prime/inbuilt/math/

// Возведите 2 в 10 степень.
  // console.log(Math.pow(2,10))

// Найдите квадратный корень из 245.
  // console.log(Math.sqrt(245))

// Найдите квадратный корень из суммы кубов элементов массива.
// Для решения воспользуйтесь циклом for.
        // let a = [4, 2, 5, 19, 13, 0, 10].reduce(function(a, b) {
        //   return a + b**3;
        // },0);
        // console.log(Math. sqrt(a));

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
    // console.log(Math.sqrt(379).toFixed(2))
    // console.log(Math.sqrt(379).toFixed(1))
    // console.log(Math.sqrt(379).toFixed())

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

      // let scr = Math.sqrt(587)
      // let fl = Math.floor(scr)
      // let cl = Math.ceil(scr)
      // let obj = {
      //   floor: fl,
      //   ceil: cl
      // }
      // console.log(obj);

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

      // console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
      // console.log(Math.min(4, -2, 5, 19, -130, 0, 10));


// Выведите на экран случайное целое число от 1 до 100.

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      console.log(getRandomInt(1, 100));


// С помощью цикла заполните массив 10-ю случайными целыми числами.

  let arr = []

  console.log(arr.fill(getRandomInt(1, 100), 0 , 10)  );


  // 1
  // 2
  // 3
  // const length = 3;
  // const filledArray = Array(length).fill(0);
  // filledArray; // [0, 0, 0]


