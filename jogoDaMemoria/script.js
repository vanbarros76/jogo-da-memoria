const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar a carta
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
}

//função que checa se as cartas são iguais
function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  }

  unflipCards();
}

//função que desabilita as cartas
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

//função que desvira as cartas
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("filip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

//função que reseta o tabuleiro
function resetBoard() {
  [hasFilippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
  cards.forEach((card) => {
    let ramdomPosition = Math.floor(Math.random() * 12);
    card.style.order = ramdomPosition;
  });
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
