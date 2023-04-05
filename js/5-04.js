// сделать кнопку , при нажатии на которую в alert мы видми 'hello'. 
// Сделать так чтобы мы могли нажать на эту кнопку только 1 раз

// const button = document.querySelector('button')

// function helloAlert(event) {
//   alert('hello')
//   button.removeEventListener('click', helloAlert)
// }

// button.addEventListener('click', helloAlert)

// button.addEventListener('click', () => { alert('hello')}, { once: true })

// MODAL WINDOW 
const popup = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.open');  
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click',() => {popup.style.display = 'grid'});

closeBtn.addEventListener('click',() => {popup.style.display = 'none'});