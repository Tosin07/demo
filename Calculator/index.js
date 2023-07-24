var num1= getRandomNumber()
var num2=getRandomNumber()

 function getRandomNumber() {
     var randomCard=Math.floor(Math.random()*20)+1
     return randomCard
 }


document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

var sumEl=document.getElementById("sum-el")



function add() {
    var result=num1 + num2
    sumEl.textContent="Sum:" + result
}


function subtract() {
    var result=num1-num2
    sumEl.textContent="Sum:" + result
}

function divide() {
    var result=num1/num2
    sumEl.textContent="Sum:" + result
}

function multiply() {
    var result=num1*num2
    sumEl.textContent="Sum:" + result
}

function inverse() {
    if(num1>num2){ var result=1/num2
sumEl.textContent="Sum:" + result}
     
}

console.log(num1)