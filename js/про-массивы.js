// создание массива
const arr = [] // предпочительней
const arr2 = new Array()

// Что можно хранить в массиве?
// Все, что угодно

const anyArr = [12345, "str", {"item": "valueObjectItem"}, true, null, undefined]
console.log(anyArr)

// Как нумеруются элементы массива?
// С нуля по порядку

//    индексы      0      1                 2                  4    5       6
const anyArr2 = [12345, "str", {"item": "valueObjectItem"}, true, null, undefined]

// Как получит значение из массива?
// Обратиться по индексу


anyArr2[0] // получить число 12345
console.log(anyArr2[0])

anyArr2[2] // получить объект {"item" : "valueObjectItem"}
console.log(anyArr2[2])


// Добавление элемента в массив

anyArr2.push("В конец")
anyArr2.unshift("В начало")

console.log(anyArr2)


delete  anyArr2[0]// Удаление элементов
let deletedItemEnd = anyArr2.pop() // Удаляет и возвращает последний элемент

console.log(deletedItemEnd) // Значение удаленного элемента
console.log(anyArr2)

let deletedItemBegin = anyArr2.shift() // Удаляет и возвращает последний первый

console.log(deletedItemBegin) // Значение удаленного элемента
console.log(anyArr2)

// Замена значения в массиве

anyArr2[0] = "Новое значение"
anyArr2[4] = "Новое значение 2"

console.log(anyArr2)

// Обход массива

// Вариант 1
for (let i = 0; i < anyArr2.length; i++) { // anyArr.length - кол-во (длина) массива
    console.log(anyArr2[i])
}
// Вариант 2
let i = 0
while (i < anyArr2.length) {
    console.log(anyArr2[i])
    i++
}
// Вариант 3
for (let key in anyArr2){
    console.log(anyArr2[key])
}

// Вариант 4
anyArr2.forEach((value,key) => {
    console.log(key, value)
})

