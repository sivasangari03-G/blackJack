
var firstCard = getRandomNumber();
var secondCard = getRandomNumber();
var cards = [firstCard,secondCard]
var sum = firstCard + secondCard;
var playaround = document.getElementById("playaround");
var cardsEl = document.getElementById("cards")
var sumEl = document.getElementById("sum")
var sumbtn = document.getElementById("sum")
var playerEl = document.getElementById("player")
var message = ""
var out = false;
let playerobj = {
    name: "Sivasangari",
    chips: 123
};

playerEl.textContent = playerobj.name + ": $" + playerobj.chips
function getRandomNumber() {
    let randomNum = Math.ceil(Math.random() * 11)
    return randomNum
}

function startGame() {
    //cards.textContent = "cards: " + firstCard + " " + secondCard
    cardsEl.textContent = "Cards: "
    for (var i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you wanna draw a new card?"
    } else if (sum > 21) {
        message = "You're out of the game!"
        out = false;
    } else {
        message = "whoo! you've won blackjack!"
        won = true;

    }
    playaround.textContent = message
    
}

function newCard() {
    if (message == "Do you wanna draw a new card?") {
        let result = getRandomNumber()
        sum = sum + getRandomNumber()
        cards.push(result)
        startGame()
    }
}

