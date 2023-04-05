const button = document.getElementById('button');
const elem = document.getElementById('elem');
const elem2 = document.getElementById('elem2');
const elem3 = document.getElementById('elem3');
const elem4 = document.getElementById('elem4');
const elem5 = document.getElementById('elem5');

const p = document.querySelector('.p');

// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.

// button.addEventListener('dblclick', () => {console.log('hey')});

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.

// button.addEventListener('mouseover',() => {console.log('hey2')});

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.

// button.addEventListener('mouseout',() => {console.log('bye')});

//Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.

// button.addEventListener('mouseover',() => {console.log('hey3')});
// button.addEventListener('mouseout',() => {console.log('bye3')});

/// = = 

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

// button.addEventListener('click', () => elem.value = 'new text');

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// button.addEventListener('click', () => p.innerHTML = elem.value);

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// elem.value = prompt('number please');

// button.addEventListener('click', () => {
//   let n = Number(elem.value);
//   elem2.value = Math.pow(n, 2);
// })

// Даны два инпута и кнопка. 
// По нажатию на кнопку запишите в первый инпут значение второго инпута, 
// а во второй инпут - значение первого. 
// Ваш код должен работать универсально, для любых значений инпутов.

// elem2.value = prompt('smth');
// button.addEventListener('click', () => elem.value = elem2.value);


// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа.
// По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
let num = Number(elem.value, elem2.value, elem3.value, elem4.value, elem5.value)
let sum = Number(elem.value + elem2.value + elem3.value + elem4.value + elem5.value)/5;
button.addEventListener('click', () => p.innerHTML = sum);