// // создание массива
// const arr = [] // предпочительней
// const arr2 = new Array()

// // Что можно хранить в массиве?
// // Все, что угодно

// const anyArr = [12345, "str", {"item": "valueObjectItem"}, true, null, undefined]
// console.log(anyArr)

// // Как нумеруются элементы массива?
// // С нуля по порядку

// //    индексы      0      1                 2                  4    5       6
// const anyArr2 = [12345, "str", {"item": "valueObjectItem"}, true, null, undefined]

// // Как получит значение из массива?
// // Обратиться по индексу


// anyArr2[0] // получить число 12345
// console.log(anyArr2[0])

// anyArr2[2] // получить объект {"item" : "valueObjectItem"}
// console.log(anyArr2[2])


// // Добавление элемента в массив

// anyArr2.push("В конец")
// anyArr2.unshift("В начало")

// console.log(anyArr2)


// delete  anyArr2[0]// Удаление элементов
// let deletedItemEnd = anyArr2.pop() // Удаляет и возвращает последний элемент

// console.log(deletedItemEnd) // Значение удаленного элемента
// console.log(anyArr2)

// let deletedItemBegin = anyArr2.shift() // Удаляет и возвращает последний первый

// console.log(deletedItemBegin) // Значение удаленного элемента
// console.log(anyArr2)

// // Замена значения в массиве

// anyArr2[0] = "Новое значение"
// anyArr2[4] = "Новое значение 2"

// console.log(anyArr2)

// // Обход массива

// // Вариант 1
// for (let i = 0; i < anyArr2.length; i++) { // anyArr.length - кол-во (длина) массива
//     console.log(anyArr2[i])
// }
// // Вариант 2
// let i = 0
// while (i < anyArr2.length) {
//     console.log(anyArr2[i])
//     i++
// }
// // Вариант 3
// for (let key in anyArr2){
//     console.log(anyArr2[key])
// }

// // Вариант 4
// anyArr2.forEach((value,key) => {
//     console.log(key, value)
// })

//методы

//мутабельные - изменяют исходный массив

//иммутабельные - не изменяют исходный массив

//что нужно запомнить о методах массивов?

// 1 мут/иммут
// 2 что принимает этот метод (парам)
// 3 что он возвращает
// 4 когда эти методы использовать 

//исходный массив

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push - добавляет эл в конец (мут, эл, которые нужно добавить, возвращает длину массива, когда нам нужно добавить элементы в конец)

// arr.push(5, 6);

// let test = arr.push(7, 17)

// console.log(test)
// console.log(arr)

// pop - удаляет последний эл (мут, ничего не принимает, возвращает эл который был удален, когда нам нужно удалить последний эл из массива)

// arr.pop();

// let test = arr.pop()

// console.log(test)
// console.log(arr)

// shift - удаляет первый элемент(мут, ничего не принимает, возвращает эл который был удален, когда нам нужно удалить первый элемент)

// arr.shift()

// let test = arr.shift()

// console.log(test)
// console.log(arr)

// unshift - добавлять элементы в начало(мут, элементы которые мы хоти добавить, возвращает длину массива, когда нам надо добавить элементы в начало)

// arr.unshift( -1, 0);

// let test = arr.unshift(-2)

// console.log(test)
// console.log(arr)

//splice - добавляет/ удаляет/ заменяет(мут, обязательные: с какого элемента мы хотим удалить, необяз: количество эл корторые нужно удалить, неогр кол-во элемнтов которые нужно вставить на место удаленных элеметов, возвращает массив удаленных элементов, когда нам нужно заменить какие то элементы в середине массива)

// arr.splice(2, 0, 5, 5, 5);

// let test = arr.splice(3);

// console.log(test)
// console.log(arr)

// slice - копия массива(иммут, обяз: нет необяз: индекс с которого начинаем копировать, индекс на котором останавливается копирование, новый массив скопированных элементов, когда нам нужно сделать копию целогомассива или его части)

// let newArr = arr.slice(2, 3);

// console.log(arr)
// console.log(newArr)

//concat - объединяет массивы в одну общую копию(иммут, принимает неограниченное количество параметров, возвращает новый массив, когда хотим получить копию объединенных массив)


// let test = arr.concat(['test', 17], 13, 14, ['tttt']);

// console.log(test)

// forEach - перебор элементов(иммут, callback функция с парам (el, i, arr), ничего не возвращает, когда нам нужно перебрать массив)


// arr.forEach(function(el, i, arr) {
//     //code
// })

// arr.forEach((element, index, array) => {
//     //code
// })

// пример

let array2 = ["Бильбо", "Гэндальф", "Назгул"]

  for (let i = 0; i < array2.length; i++) {
    console.log(array2[i])
  }

  array2.forEach((item) => {
    console.log(item);
  });


  //мутабельные - изменяют исходный массив

//иммутабельные - не изменяют исходный массив

//что нужно запомнить о методах массивов?

// 1 мут/иммут
// 2 что принимает этот метод (парам)
// 3 что он возвращает
// 4 когда эти методы использовать

//исходный массив

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push - добавляет эл в конец (мут, эл, которые нужно добавить, возвращает длину массива, когда нам нужно добавить элементы в конец)

// arr.push(5, 6);

// let test = arr.push(7, 17)

// console.log(test)
// console.log(arr)

// pop - удаляет последний эл (мут, ничего не принимает, возвращает эл который был удален, когда нам нужно удалить последний эл из массива)

// arr.pop();

// let test = arr.pop()

// console.log(test)
// console.log(arr)

// shift - удаляет первый элемент(мут, ничего не принимает, возвращает эл который был удален, когда нам нужно удалить первый элемент)

// arr.shift()

// let test = arr.shift()

// console.log(test)
// console.log(arr)

// unshift - добавлять элементы в начало(мут, элементы которые мы хоти добавить, возвращает длину массива, когда нам надо добавить элементы в начало)

// arr.unshift( -1, 0);

// let test = arr.unshift(-2)

// console.log(test)
// console.log(arr)

//splice - добавляет/ удаляет/ заменяет(мут, обязательные: с какого элемента мы хотим удалить, необяз: количество эл корторые нужно удалить, неогр кол-во элемнтов которые нужно вставить на место удаленных элеметов, возвращает массив удаленных элементов, когда нам нужно заменить какие то элементы в середине массива)

// arr.splice(2, 0, 5, 5, 5);

// let test = arr.splice(3);

// console.log(test)
// console.log(arr)

// slice - копия массива(иммут, обяз: нет необяз: индекс с которого начинаем копировать, индекс на котором останавливается копирование, новый массив скопированных элементов, когда нам нужно сделать копию целогомассива или его части)

// let newArr = arr.slice(2, 3);

// console.log(arr)
// console.log(newArr)

//concat - объединяет массивы в одну общую копию(иммут, принимает неограниченное количество парам, возвращает новый массив, когда хотим получить копию объединенных массив)

// let test = arr.concat(['test', 17], 13, 14, ['tttt']);

// console.log(test)

// forEach - перебор элементов(иммут, callback функция с парам (el, i, arr), ничего не возвращает, когда нам нужно перебрать массив)

// arr.forEach(function(el, i, arr) {
//     //code
// })

// arr.forEach((element, index, array) => {
//     //code
// })

// пример

// let array2 = ["Бильбо", "Гэндальф", "Назгул"]

//   for (let i = 0; i < array2.length; i++) {
//     console.log(array2[i])
//   }

//   array2.forEach((item) => {
//     console.log(item);
//   });

// создать массив элементов от 1 до 10

//   let arr = [];

//   for (let i = 1; i <= 10; i++) {
    //     arr.push(i)
    //   }
    
    // //   console.log(arr)
    
    //   // удалить из этого массива первый и последний элемент
    
    //   arr.pop()
    //   arr.shift()
    
    // //   console.log(arr)
    
    //   // удалить номер 5 и на его место вставить строчку 'five'
    
    // ***let test2 = arr.indexOf(5)
    
    //   arr.splice(test2, 1, 'five')
    
    // //   console.log(arr)
    
    //   // создать копию массива с 3 по 6 элемент
    
    //   let arr2 = arr.slice(3, 7);
    
    // //   console.log(arr2);
    
    //   // объединить исходный массив и массив из предыдущего пункта
    
    //   let arr3 = arr.concat(arr2);
    
    // //   console.log(arr3)
    
    //   // перебрать массив и вывести в консоль каждый элемент
    
    //   arr3.forEach((el) => console.log(el));
    
    // indexOf - находит индекс элемента(иммут, элемент который мы хоти найти, с какого индекса начинаем искать(по умолчанию 0), возвращает индекс элемента который был найден, если не найден то -1, когда нам нужно найти индекс эл в массиве) + lastIndexOf
    
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // let data = [
    //   {
    //     id: 1,
    //     name: "Name",
    //     age: 21,
    //   },
    //   {
    //     id: 2,
    //     name: "Name2",
    //     age: 21,
    //   },
    //   {
    //     id: 3,
    //     name: "Name3",
    //     age: 21,
    //   },
    //   {
    //     id: 4,
    //     name: "Name4",
    //     age: 21,
    //   },
    //   {
    //     id: 5,
    //     name: "Name5",
    //     age: 21,
    //   },
    // ];
    
    // let test = arr.indexOf(5);
    
    // console.log(test);
    
    // includes - проверяет есть ли элемент в массиве(иммут, элемент который мы хотим проверить, с какого индекса начнем проверять (по умолчанию 0), возвращает true || false, когда мы хотим проверить есть ли элемент в массиве)
    
    // let test = arr.includes(5);
    
    // console.log(test)
    
    // find - поиск элемента в массиве(иммут, принимает callback функцию с парам el i arr, возвращает элемент который прошел по условию, когда нам нужно найти и получить один элемент)
    
    // let test = data.find((el) => el.id === 3);
    
    // console.log(test);
    
    //findIndex & findLastIndex - работает также как и find но возвращает индекс найденного элемента
    
    // let test = data.findIndex((el) => el.id === 3);
    
    // console.log(test)
    
    //filter - фильтруем массив по условию(иммут, принимает callback с парам el i arr, возвращает новый массив с эл которые проходят по условию, когда нам нужно по условию отфильтровать массив)
    
    // let newArr = arr.filter((el) => el % 2 !== 0)
    
    // console.log(arr)
    // console.log(newArr)

// .filter - проверка условия
// .map - перебор элементов
// .reduce - сохранения состояния
// .include() - проверка вхождения

// .foreach() - обход массива