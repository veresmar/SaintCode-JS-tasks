
// // 1 лекция
// // // создать массив элементов от 1 до 10
// // let arr = []; 
// // for (let i = 1; i <= 10; i++) {
// //   arr.push(i); 
// // }

// // console.log(arr);
// // // удалить из этого массива первый и последний элемент
// // arr.shift();
// // arr.pop();
// // console.log(arr);

// // // удалить номер 5 и на его место вставить строчку 'five'
// // arr.splice(3, 1, 'five')
// // console.log(arr);

// // // создать копию массива с 3 по 6 элемент
// // let newArr = arr.slice(3, 6);
// // console.log(arr);
// // console.log(newArr);

// // // объединить исходный массив и массив из предыдущего пункта
// // let newArr2 = arr.concat(newArr);
// // console.log(newArr2);

// // // перебрать массив и вывести в консоль каждый элемент
// // newArr2.forEach((item) => {
// //   console.log(item);
// // });


// //2

// // Дан объект

// const user = {
//   name: "Андрей",
//   mname: "Вячеславович",
//   lname: "Бережков",
//   age: 99,
//   mail: "dead0343@gmail.com",
//   sex: true,
//   posts:  [
//       {
//           title: "Js - это весело",
//           body: "Тут должен быть текст",
//           date: "2023-03-23",
//           order: 0
//       },
//       {
//           title: "Js - это не весело",
//           body: "Тут должна быть картинка",
//           date: "2023-03-22",
//           order: 1
//       },
//       {
//           title: "Js - это .....",
//           body: "Тут должны быть ....",
//           date: "2023-03-21",
//           order: 2
//       }
//   ],
//   languages: ["js", "php", "kotlin", "python"]
// }

// // Задание №1
// // Написать функцию, котороая выводит Фамилию, имя отсечтво через запятую
// // result: Бережков, Андрей, Вячеславович
// function getFullNameFromObj(obj) {
//     return console.log(obj.name + "," + obj.mname + "," + obj.lname)
//   }
//   getFullNameFromObj(user)

// // Задание №2
// // Написать функцию, котороая выводит фамилию и инициалы
// // result: Бережков А.В.

// function getName(obj) {
//   return obj.lname + ' ' + obj.name.slice(0, 1) + '.' + obj.mname.slice(0, 1) + '.';
// }

// console.log(getName(user))


// //Задание №3
// // Добавить функции в объект
// // Для полного ФИО св-во должно называть getFullName()
// // Для вывода инициалов getInitials()
// // Подсказка: внутри объекта доступ к св-вам можно получить через this: this.name, this.mname, this.lname

// // Задание №4
// // Написать функцию, которая проверяет, больше ли поле age 100 и возвращает true если больше и false если меньше
// // result: false
// function isMoreAge (obj, key) {
//   if (obj[key] > 100) {
//     return true;
//   }
// }
// console.log(isMoreAge(user, 'age'));
// // function checkAge(obj) {
// //     return obj.age > 100 ? true : false
// //  }

// //Задание №5
// // Написать функцию, которая выводит все languages в консоль
// // result: js, php, kotlin, python

// function getLang(obj) {
//   obj.languages.forEach((el) => console.log(el))
// }

// getLang(user);

// // Задание №6
// // Написать функцию, которая вывод только те languages, у которых не более 4х символов
// // result: js, php



// // Задание №6
// // Написать функцию, которая принимает на вход название языка и проверяет, есть ли он в массиве languages,
// // если есть - возвращает true, иначе - false
// // result: true | false

// //Задание №7
// // Написать функцию, которая делает из почты ник (берется строка до символа @)
// // result: dead0343

// //Задание №8
// // Написать функцию, которая выводит все посты в консоль
// // result:
// // title: Js - это весело, body: Тут должен быть текст, date: 2023-03-23, order: 0
// // title: Js - это не весело, body: Тут должна быть картинка, date: 2023-03-22, order: 1
// // title: Js - это ....., body: Тут должны быть ...., date: 2023-03-21, order: 2

// //Задание №9
// // Написать функцию, которая выводит все посты в консоль по убыванию значения order
// // result:
// // title: Js - это ....., body: Тут должны быть ...., date: 2023-03-21, order: 2
// // title: Js - это не весело, body: Тут должна быть картинка, date: 2023-03-22, order: 1
// // title: Js - это весело, body: Тут должен быть текст, date: 2023-03-23, order: 0

// //Задание №10
// // Написать функцию, которая выводит посты, у которых в названии есть слово "весело"
// // result:
// // title: Js - это весело, body: Тут должен быть текст, date: 2023-03-23, order: 0
// // title: Js - это не весело, body: Тут должна быть картинка, date: 2023-03-22, order: 1
// // function isFun(obj) {
// //   let fun = obj.getOwnPropertyDescriptor(obj) => {
// //     return obj.getOwnPropertyDescriptor(obj) === 'весело';
// //   };
// //   return fun;
// // }

// // isFun(obj)
// // console.log(fun)

// // =  = = 

// // Задание 0:
// // Написать функцию, которая находит все уникальные элементы в массиве
// let arr = [1, 2, 3, -4, 3, 2, 1, 5];
// function uniqueElements(arr) {
//   let uniqueElements = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });
//   return uniqueElements;
// }
// console.log(uniqueElements(arr));

// // Задание 1:
// //    Напишите функцию которая принимает массив чисел и возвращает новый массив
// //    в котором на месте каждого элемента выведено положительное это число или нет
// // Примеры:
// //    arrayToPositivity([1, -2, 3]) // положительное, отрицательное, положительное

// function isPositive (arr){

// }



// // Задание 2:
// //    Напишите функцию которая оставляет в переданном массиве только числа
// // Примеры:
// //    onlyNumbers([1,2,null,"3",NaN]) // [1,2]

// // Задание 3:
// //    Напишите функцию которая проверяет есть ли
// //    переданном массиве числа
// // Примеры:
// //    hasNumbers([1,2,null,"3",NaN]) // true
// //    hasNumbers([null,"3",NaN]) // false

// // Задание 4:
// //    Напишите функцию которая принимает id и массив пользователей
// //    и проверяет есть ли в массиве пользователь с этим id
// // Примеры:
// //    const users = [{ id: 0, name: "Yury"}, { id: 10, name: "Vera" }]
// //    hasUser(10, users) // true
// //    hasUser(8, users) // false

// // Задание 5:
// //    Напишите функцию которая принимает id и массив пользователей
// //    и возвращает пользователя если он есть в массиве
// // Примеры:
// //    const users = [{ id: 0, name: "Yury"}, { id: 10, name: "Vera" }]
// //    findUser(10, users) // { id: 0, name: "Yury"}
// //    findUser(8, users) // undefined

// // Задание 6:
// //    Напишите функцию которая делает массив массивов плоским
// //    т.е. убирает вложенность массивов
// // Примеры:
// //    var a7 = [[1, 2, 1, 24], [8, 11, 9, 4]];
// //    flatten(a7) // [1,2,1,24,8,11,9,4]

      let a7 = [[1, 2, 1, 24], [8, 11, 9, 4]];
      function map (arr) {
        const flatmap = arr.flatMap(flatten => flatten);
       return flatmap;
      }

      console.log(map(a7));

// // Задание 7:
// //    Напишите функцию которая находит самый частый элемент в массиве
// //    и сколько раз этот элемент встречался в массиве (reduce?)
// // Примеры:
// //    const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// //    findMostUsedElement(items) // ['a', 5]

// const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let obj = {}
// // // Как проверить существование элемента в массиве
// // // console.log("a" in obj)
// // // console.log(obj["a"] !== undefined)

// items.forEach((item, key) => {
//   if (item in obj) { // проверить есть ли элемент с этим именем в объекте
//       obj[item] ++
//   } else {
//       // добавить элемент в объкт  = 1
//       obj[item] = 1
//   }
// })
// console.log(obj)
// // console.log(Object.values(obj))

// //reduce
// function findMostUsedElement(obj) {

// }

// // Задание 7:
// //    Напишите функцию которая находит самый частый элемент в массиве
// //    и сколько раз этот элемент встречался в массиве
// // Примеры:
// //    const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// //    findMostUsedElement(items) // ['a', 5]




// // Исходный массив
// const items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 3, 3, 3, 3];


// /**
//  *  Варинт решения №1 с помощью foreach()
//  *
//  */
// let obj = {}

// // Как проверить существование элемента в массиве
// // console.log("a" in obj)
// // console.log(obj["a"] !== undefined)

// items.forEach((item, key) => {
//     if (item in obj) { // проверить есть элемент с этим именем в объекте
//         obj[item]++
//     } else {
//         // добавить элемент в объкт  = 1
//         obj[item] = 1
//     }
// })

// // Более коротка запись
// items.forEach((item) => item in obj ? obj[item]++ : obj[item] = 1)



// /**
//  *  Варинт решения №2 с помощью reduce()
//  *
//  */
// let newObj = items.reduce((accum, item) => {
//     if (item in accum) { // проверить есть элемент с этим именем в объекте
//         accum[item]++
//     } else {
//         // добавить элемент в объкт  = 1
//         accum[item] = 1
//     }
//     return accum
// }, {})

// // Более коротка запись
// items.reduce((accum, item) => item in obj ? obj[item]++ : obj[item] = 1)

// /**
//  * Поиск максимального значения
//  */
// let maxValue = -Infinity
// n.forEach((item) => item > maxValue ? maxValue = item : maxValue)

// console.log(maxValue)
// // function findMostUsedElement(items){
// //   const newItems = items.reduce(item => item)
// // }
// // console.log(findMostUsedElement(items))

// // Задание 8:
// //    Напишите функцию которая находит уникальные элементы в двух массивах
// //    т.е. элементы которые есть в одном, но нет в другом (перебрать массив и проверить include)
// // Примеры:
//   //  const items1 = [1,2,3,4];
//   //  const items2 = [2,3,4,5];
// //    findUniqItems(items) // [1,5]
