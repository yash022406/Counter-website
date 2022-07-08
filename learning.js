const increase = document.getElementById("increase");
const num = document.getElementById("number");
const decrease = document.getElementById("decrease");
// const num1 = document.getElementById("number");
const reset = document.getElementById("reset");

increase.onclick = incbyone;
decrease.onclick = decbyone;
reset.onclick = resertozero;
function incbyone(){
    num.classList.add("greenColor");
    const number = parseInt(num.innerHTML) +1;
    num.innerHTML = number;
    
}

function decbyone(){
    num.classList.add("greenColor");
    const number = parseInt(num.innerHTML) -1;
    num.innerHTML = number;
}

function resertozero(){
    // const number = parseInt(num.innerHTML);
    num.classList.remove("greenColor");
    num.innerHTML = 0;
}