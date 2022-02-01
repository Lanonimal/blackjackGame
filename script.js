let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

const startBtn = document.getElementById("startBtn")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cardBtn = document.getElementById("newCardBtn")
let playerEl = document.getElementById("player-el")

let player = {name: "Jack", chips: 100}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomcard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {return randomNumber}
}

function startGame() {
    isAlive = true
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You got Blackjack!"
        hasBlackjack = true
    } else {
        message = "Oof, you're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomcard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
        }
}

startBtn.onclick = startGame
cardBtn.onclick = newCard


