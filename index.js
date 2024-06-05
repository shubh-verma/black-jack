let cards = [];
let cardsEl = document.getElementById("cards-el");
let sum = 0;
let sumEl = document.getElementById("sum-el");
let message = "";
let messageEl = document.getElementById("message-el");

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = randomCard();
  let secondCard = randomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
  messageEl.textContent = message;
}

function newCard() {
  let newCard = randomCard();
  cards.push(newCard);
  sum += newCard;
  renderGame();
}
