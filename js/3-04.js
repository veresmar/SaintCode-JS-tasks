const a1 = document.getElementsByClassName('search')[0];
const log = document.getElementsByClassName('log')[0];

console.log('33')
a1.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

//1. Даны 3 кнопки:

// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.


//2. Даны 5 абзацев:

// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:

// function func() {
//     console.log('message');
// }
// Привяжите эту функцию ко всем 5-ти абзацам.


//3. Дан абзац:

// <p id="elem">text</p>
// Даны следующие функции:

// function func1() {
//     console.log('1');
// }

// function func2() {
//     console.log('2');
// }

// function func3() {
//     console.log('3');
// }
// Привяжите все эти функции к нашему абзацу.