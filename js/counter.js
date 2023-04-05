const b1 = document.querySelector(".b-1");
const b2 = document.querySelector(".b-2");
const counterDisplay = document.querySelector(".counter-display");
let count = 0;

console.log('44')
updateDisplay();


b1.addEventListener("click",()=>{
  count++;
   updateDisplay();
});
b2.addEventListener("click",()=>{
    count--;
   updateDisplay();
});

function updateDisplay(){
    counterDisplay.innerHTML = count;
};

