let num1 = 8
let num2 = 2

let sum = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    sum.textContent += num1 + num2
}

function substract(){
    sum.textContent += num1 - num2
}

function divide(){
    sum.textContent += num1 / num2
}

function multiply(){
    sum.textContent += num1 * num2
}
