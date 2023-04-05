// // https://code.mu/ru/javascript/book/prime/loops/practicum/


// // 4. Заполните массив 10-ю иксами с помощью цикла.
// let arr1 = [];

// for (let i = 0; i < 10; i++) {
//   arr1.push('x');
// }
// console.log(arr1);

// // 5 Заполните массив числами от 1 до 10 с помощью цикла.

// for (let i = 1; i <= 10; i++) {
//   arr1.push(i);
// }
// console.log(arr1);

// // 6 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr2 = [1, 4, 3, 7, -1, 6, 6, 9, 23]
// function filt (arr) {
//   return arr.filter(el => el < 10 && el > 0);
// }
// console.log(filt(arr2))

// // 7 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

// function five(arr) {
//   return arr.includes(el => el === 5);
// }
// console.log(five(arr2))

// // 8 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

// let sum1 = arr2.reduce((acc, el) => acc + el, 0);

// console.log(sum1); 

// // 9 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

// let sum2 = arr2.reduce((acc, el) => acc + (el ** 2), 0);

// console.log(sum2); 

// // 10 Дан массив с числами. Найдите среднее арифметическое его элементов.
// // прим. - нужно сумму элементов массива разделить на длину массива.

// let middle = sum1 / arr2.length;
// console.log(middle);

// // 11 Напишите скрипт, который будет находить факториал числа. 
// // Факториал - это произведение всех целых чисел от единицы до заданного числа.

// // 12 Заполните массив числами от 10 до 1 с помощью цикла.
// let arr3 =[]
// for (let i = 10; i > 0; i--) {
//   arr3.push(i);
// }
// console.log(arr3);



// == 2
// Задание 0:
// Написать функцию, которая находит все уникальные элементы в массиве

        // let arr = [1, 4, 3, 7, -1, 6, 6, 9, 23]

        // function findUniqueElements(arr) {
        //   return arr.filter((item, index) => arr.indexOf(item) === index);
        // }
        // console.log(findUniqueElements(arr))

// Задание 1:
//    Напишите функцию которая принимает массив чисел и возвращает новый массив
//    в котором на месте каждого элемента выведено положительное это число или нет
// Примеры:
//    arrayToPositivity([1, -2, 3]) // положительное, отрицательное, положительное
// let arrayToPositivity = arr

// function toPositive(arr) {
//   return arrayToPositivity.sort()
// }

// Задание 2:
//    Напишите функцию которая оставляет в переданном массиве только числа
// Примеры:
//    onlyNumbers([1,2,null,"3",NaN]) // [1,2]
// let onlyNumbers = arr2.filter(function(value, arr) {
  //   return value === Number();
  // });
  // console.log(onlyNumbers);
  
  //решение:
    // let arr2 = [1,2,null,"3",NaN];
      // function isNumber(item) {
      //   if (typeof item === "number" && item === item) {
      //     return true;
      //   }
      // }

      // function onlyNumbers(arr) {
      //   return arr.filter(isNumber);
      // }

      // let onlyNumbers = arr2.filter(isNumber);
      // console.log(onlyNumbers(arr2));

// arr2.filter(isNumber)
// Берём первое значение в arr2 – 1
// Вызываем isNumber(1)
// Вернуло true, поэтому оставляем элемент в массиве
// Берём второе значение в arr2 – 2
// ...


// Задание 3:
//    Напишите функцию которая проверяет есть ли
//    переданном массиве числа
// Примеры:
//    hasNumbers([1,2,null,"3",NaN]) // true
//    hasNumbers([null,"3",NaN]) // false

      //решение:
        // function hasNumbers(arr) {
        //   if (arr.filter(isNumber).length > 0){
        //     return true;
        //   } 

        //   return false;
        // }
        // console.log(hasNumbers(arr2));
//return arr.filter(isNumber)
//  операторы сравнения возвращают true/false (можно писать без if, return true/false)



// Задание 4:
//    Напишите функцию которая принимает id и массив пользователей
//    и проверяет есть ли в массиве пользователь с этим id
// Примеры:
//    hasUser(10, users) // true
//    hasUser(8, users) // false
      
      //решение:
      // const users = [{ id: 0, name: "Yury"}, { id: 10, name: "Vera" }]
      // function hasUser(requiredId, arr) {
      //   if (arr.filter(function(obj){return obj.id === requiredId }).length > 0){
      //     return true;
      //   } 

      //   return false;
      // }
      // console.log(hasUser(8, users))

// Задание 5:
//    Напишите функцию которая принимает id и массив пользователей
//    и возвращает пользователя если он есть в массиве
// Примеры:
//    const users = [{ id: 0, name: "Yury"}, { id: 10, name: "Vera" }]
//    findUser(10, users) // { id: 0, name: "Yury"}
//    findUser(8, users) // undefined

    //решение:
      // function findUser(requiredId, arr) {
      //   let a = arr.filter(function(obj){return obj.id === requiredId })
      //   return a[0]
      // }
      // console.log(findUser(8, users))

// Задание 6:
//    Напишите функцию которая делает массив массивов плоским
//    т.е. убирает вложенность массивов
// Примеры:
//    var a7 = [[1, 2, 1, 24], [8, 11, 9, 4]];
//    flatten(a7) // [1,2,1,24,8,11,9,4]

        // let a7 = [[1, 2, 1, 24], [8, 11, 9, 4]];
        //   function map (arr) {
        //     const flatmap = arr.flatMap(flatten => flatten);
        //     return flatmap;
        //   }

        //   console.log(map(a7));



// Задание 7:
//    Напишите функцию которая находит самый частый элемент в массиве
//    и сколько раз этот элемент встречался в массиве
// Примеры:
   const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//    findMostUsedElement(items) // ['a', 5]
const findMostUsedElement = items.reduce((total, value) => {
  if (!total[value]) {
    total[value] = 1;
  } else {
    total[value] = total[value] + 1;
  }
  return total;
}, {});

console.log(findMostUsedElement)
// Задание 8:
//    Напишите функцию которая находит уникальные элементы в двух массивах
//    т.е. элементы которые есть в одном, но нет в другом
// Примеры:
//    const items1 = [1,2,3,4];
//    const items2 = [2,3,4,5];
//    findUniqItems(items) // [1,5]


      // const items1 = [1,2,3,4];
      // const items2 = [2,3,4,5];

      // let diff = items1.filter(value => !items2.includes(value))
      // let diff2 = items2.filter(value => !items1.includes(value))

      // console.log(diff)
      // console.log(diff2)


      // = = 2

      
      // Напишите деструктурирующее присваивание, которое:
      
      // свойство name присвоит в переменную name.
      // свойство years присвоит в переменную age.
      // свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
      
      let user = {
        name: "John",
        years: 30
      };
      
      let {name, years: age, isAdmin = false} = user;

      console.log(name); // John
      console.log(age); // 30
      console.log(isAdmin); // false
      
    
// Создайте функцию topSalary(salaries), 
// которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  
}