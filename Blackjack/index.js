
var cards= []

var sum = 0
var hasBlackJack=false
var isAlive=false
var message=""

var messageEL= document.getElementById("message-el")
var sumEl=  document.getElementById("sum-el")
var cardEl= document.getElementById("card-el")
var playerEl=document.querySelector("#player-el")


function getRandomCard() {
    var randomNumber = Math.floor(Math.random()*13) + 1
    return randomNumber
    if (randomNumber>10) {return 10} else if(randomNumber===1) {return 11} else{return randomNumber}
}

var player={
    name: "Dan",
    chips: 20
}
playerEl.textContent=player.name + ": $" + player.chips


function startGame() {
    isAlive=true
    var firstCard = getRandomCard()
    var secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard + secondCard
    renderGame()}

function renderGame() {cardEl.textContent=
    "Cards: "
    for( var i=0; i < cards.length; i=i+1) {cardEl.textContent+= cards[i] + " " }
   
    sumEl.textContent = "Sum: " + sum
    if (sum<=20) {
    message="Do you want to draw a new card?"
} else if(sum===21) {
    message="You've got Blackjack"
    hasBlackJack=true
} else {
    message="You're out of the game"
    isAlive=false
}
messageEL.textContent=message
}
 

function newCard() {
    if(isAlive===true && hasBlackJack===false){
    var newCard=getRandomCard()
    sum+=newCard
    cards.push(newCard)}
    renderGame()

}

console.log(cards)
