// Задачи


// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
      // const user = {};
      // user.name = 'John';
      // user.surname = 'Smith';
      // user.name = 'Pete';
      // console.log(user);

// 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
      // let schedule = {};
      // function isEmpty(obj) {
      //   if (Object.keys(obj).length === 0) {
      //     console.log('true');
      //   } else {
      //     console.log('false');
      //   }
      // }
      // isEmpty(schedule);

// 3. У нас есть объект, в котором хранятся зарплаты:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

      // let salaries = {
      //   John: 100,
      //   Ann: 160,
      //   Pete: 130
      // }
      // let sum = 0;

      // for (let key in salaries) {
      //   sum += salaries[key];
      // }
      // console.log(sum); 



// 4. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:

// до вызова функции
    // let menu = {
    //   width: 200,
    //   height: 300,
    //   title: "My menu"
    // };

// multiplyNumeric(menu);

//  после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

      // function multiplyNumeric(obj) {
      //   for (let key in obj) {
      //     if (typeof obj[key] === 'number') {
      //       obj[key] *= 2;
      //     }
      //   }
      //   console.log(menu);
      // }
      // multiplyNumeric(menu);

// 5. Создайте объект city, укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением началения.
// Создайте фукнцию getName(object), которая возвращает название города
// Создайте фукнцию exportStr(object). Она должна возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n».

      // let city = {
      //   name: 'ГородN',
      //   population: 10000000
      // }
      // function getName(object) {
      //   return object.name;
      // }

      // function exportStr(object) {
      //   return `name=${object.name}\npopulation=${object.population}\n`;
      // }

      // console.log(exportStr(city))

// 6. Создайте объект salaries2, в котором хранятся зарплаты в виде строк
// Создайте правильный клон salaries2 и назовите premium, где каждую зп нужно увеличить вдвое (квартальная премия)
    // let salaries2 = {
    //   John: "100",
    //   Ann: "160",
    //   Pete: "130"
    // }
    // let premium = {}; 

    // for (let key in salaries2) {
    //   premium[key] = salaries2[key];
    //   premium[key] *= 2;
    // }

    // console.log(premium)




    // Object






// 1. Напишите функцию getFullNameFromObj, которая принимает объект пользователя и возвращает строку с полным именем.

// Примеры:

          // const user = { firstName: 'Вася', lastName: 'Пупкин' };
          // // getFullNameFromObj(user) // "Вася Пупкин"

          // // add code using function declaration
          // function getFullNameFromObj(obj) {
          //   return console.log(obj.firstName, obj.lastName)
          // }
          // getFullNameFromObj(user)

          // // add code using function expression
          // const getFullNameFromObj2 = function(user) {
          //   return user.firstName + ' ' + user.lastName;
          // };
          // console.log(getFullNameFromObj2(user));

          // // add code using arrow function expressions
          // const getFullNameFromObj3 = (user) => {
          //   return user.firstName + ' ' + user.lastName;
          // };
          // console.log(getFullNameFromObj3(user));

// 2. Напишите функцию, которая принимает координаты двух точек на плоскости и считает расстояние между ними. Формула: https://algebra24.ru/rasstojanie-mezhdu-dvumja-tochkami

// Пример:
const cord1 = { x1: 10, y1: 5 };
const cord2 = { x2: 15, y2: 10 }
// getDistanceBetween2D(cord1, cord2); // 7.071

function getDistanceBetween2D(cord1, cord2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// add code



// 3. Спросите у пользователя, как его зовут и название поля (ключа), в котором будет лежать его имя. Создайте объект с таким ключем и значением и выведите его в консоль.

// add code
      // let userName = prompt('ur name');
      // let keyName = prompt('key name');
      // let objct = {
      //   name: `${userName}`,
      //   key: `${keyName}`,
      // }
      // console.log(objct)


// 4. Напишите функцию, которая возвращает стоимость кофе в зависимости от переданного типа. Если ничего не передано, вывести сообщение: "Укажите тип кофе".

// Пример:
const prices = {
   "эспрессо": 5,
   "капучино": 10,
   "американо": 6,
   "латте": 7,
}
function getCoffeePrice(obj) {
  return console.log(obj)
}
// getCoffeePrice("американо") // 6

// add code

// 5. Создайте объект с информацией о пользователе: имя, фамилия, возраст. Добавьте в объект булевое поле «likes birds». После объявления измените значение у этого поля. А после удалите его вообще.

// add code

// 6. Напишите функцию, которая принимает объект и проверяет, что в объекте есть поле id. Если его нет, то запишите туда случайное число.

// add code

// 7. Напишите функцию, которая принимает объект и суммирует все числовые значения.

// Например:
// sumObject({ car: 100, house: 500 }) выведет 600

// add code

// 8. Напишите функцию, которая принимает номер заказа (id) и название (title) продукта, а возвращает объект вида { id: 999, title: "MacBook Air" }.

// add code

// 9. Напишите функцию, которая принимает имя, фамилию, возраст и пол и возвращает объект вида:
// { name: "Jack", secondName: "Nilson", age: 29, gender: "male" }

// add code

// 10. Выведите в консоль сообщение о покупке в следующем формате: Уважаемый Василий Иванович, поздравляю вас с покупкой MacBook Air за 90000 ₽. Номер вашего заказа — 9234. (без использования функции, просто вывести в консоль).

// Данные:
//    const order = {
//      id: 9234,
//      price: 90000,
//      product: "MacBook Air",
//      author: "Василий Иванович"
//    };

// add code

// 11. Напишите функцию, которая принимает объект заказа (order) и формирует строку: Уважаемый Василий Иванович, поздравляю вас с покупкой MacBook Air за 90000 ₽. Номер вашего заказа — 9234.

// add code

// 12. Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {

// };

// calculator.read(5, 10);
// console.log(calculator);
// console.log(calculator.a);
// console.log(calculator.b);
// console.log(calculator.sum());
// console.log(calculator.mul());

// 13. Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep() {
//     console.log(this.step);
//   }
// };

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep();