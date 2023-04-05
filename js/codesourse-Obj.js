// http://kodesource.top/javascript-exercises/javascript-object-exercises.php

// Obj

// 1. Напишите программу на JavaScript, чтобы получить список свойств объекта JavaScript. 
// Образец объекта :
// вар студент = {
// имя: "Дэвид Рэй",
// шкала: "VI",
// rollno: 12};
// Пример вывода : имя, класс, роллно

const student = {
  name: 'Ray',
  sh: "VI",
  roll: 12
};
console.log(Object.keys(student)); // [ 'name', 'sh', 'roll' ]

// 2. Напишите программу на JavaScript для удаления свойства rollno из следующего объекта.
// Также напечатайте объект до или после удаления свойства. 
// Образец объекта :
// вар студент = {
// имя: "Дэвид Рэй",
// шкала: "VI",
// rollno: 12};
console.log(student); // { name: 'Ray', sh: 'VI', roll: 12 }
delete student.roll;
console.log(student); // { name: 'Ray', sh: 'VI' }

// 3. Напишите программу на JavaScript, чтобы получить длину объекта JavaScript. 
// Образец объекта :
// вар студент = {
// имя: "Дэвид Рэй",
// шкала: "VI",
// rollno: 12}; 
const objectLength = Object.keys(student).length;
console.log(objectLength); // 2

// 4. Напишите программу на JavaScript для отображения статуса чтения
// (то есть отображения названия книги, имени автора и статуса чтения) следующих книг. 

//  библиотека var = [ 
//    {
//        автор: «Билл Гейтс»,
//        название: «Дорога впереди»,
//        статус чтения: правда
//    },
//    {
//        автор: «Стив Джобс»,
//        название: «Уолтер Исааксон»,
//        статус чтения: правда
//    },
//    {
//        автор: «Сюзанна Коллинз»,
//        title: «Сойка-пересмешница: последняя книга Голодных игр», 
//        readStatus: false
//    }];
const library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];

for (let i = 0; i < library.length; i++){
  // let book ="'" + library[i].title + "'" + ' by ' + library[i].author + ".";
  let book = `'${library.title}' by ${library.author}.`
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else
  {
   console.log("You still need to read " + book);
  }
 }

// 5. Напишите программу на JavaScript, чтобы получить объем цилиндра
// с четырьмя десятичными разрядами, используя классы объектов. 
// Объем баллона : V = πr 2 ч
// где r - радиус, а h - высота цилиндра.


// 6. Напишите алгоритм пузырьковой сортировки в JavaScript. 
// Примечание: Bubble sort - это простой алгоритм сортировки,
// который работает путем многократного пошагового перемещения по списку для сортировки,
// Данные образца: [6,4,0, 3, -2,1]
// Ожидаемый результат: [-2, 0, 1, 3, 4, 6]


// 7. Напишите программу на JavaScript, которая возвращает подмножество строки. 
// Пример данных: собака
// Ожидаемый результат: ["d", "do", "dog", "o", "og", "g"]


// 8. Напишите программу на JavaScript для создания часов. 
// Примечание: выход будет приходить каждую секунду.
// Ожидаемый выход консоли:
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


// 9. Напишите программу на JavaScript для расчета площади и периметра круга. 
// Примечание. Создайте два метода для расчета площади и периметра. Радиус круга будет предоставлен пользователем.


// 10. Напишите программу JavaScript для сортировки массива объектов JavaScript. 
// Образец объекта:

//  библиотека var = [ 
//    {
//        название: «Дорога впереди»,
//        автор: «Билл Гейтс»,
//        ID библиотеки: 1254
//    },
//    {
//        название: «Уолтер Исааксон»,
//        автор: «Стив Джобс»,
//        ID библиотеки: 4264
//    },
//    {
//        title: «Сойка-пересмешница: последняя книга Голодных игр»,
//        автор: «Сюзанна Коллинз»,
//        ID библиотеки: 3245
//    }];
// Ожидаемый результат:

//  [[Объект Object] {
//   автор: "Уолтер Исааксон",
//   ID библиотеки: 4264,
//   название: "Стив Джобс"
// }, [Объект Object] {
//   автор: "Сюзанна Коллинз",
//   ID библиотеки: 3245,
//   title: «Сойка-пересмешница: последняя книга Голодных игр»
// }, [Объект Object] {
//   автор: "Дорога впереди",
//   ID библиотеки: 1254,
//   название: "Билл Гейтс"
// }] 


// 11. Напишите функцию JavaScript для печати всех методов в объекте JavaScript. 
// Тестовые данные :
// console.log (all_properties (массив));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "наблюдаем", "ненаблюдаем"]


// 12. Напишите функцию JavaScript для разбора URL. 


// 13. Напишите функцию JavaScript для извлечения всех имен собственных и унаследованных свойств объекта. 


// 14. Напишите функцию JavaScript, чтобы получить все значения свойств объекта. 


// 15. Напишите функцию JavaScript для преобразования объекта в список пар `[key, value]`. 


// 16. Напишите функцию JavaScript, чтобы получить копию объекта, ключи которого стали значениями, а значения - ключами. 


// 17. Напишите функцию JavaScript, чтобы проверить, содержит ли объект данное свойство. 


// 18. Напишите функцию JavaScript, чтобы проверить, является ли данное значение элементом DOM. 
