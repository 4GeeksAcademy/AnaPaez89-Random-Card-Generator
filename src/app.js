/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  genCard();
  var button = document.getElementById("boton");
  button.addEventListener("click", genCard);
  var resizeButton = document.getElementById("resizeButton");
  resizeButton.addEventListener("click", resizeCard);
  setInterval(genCard, 10000);
  startCountdown();
};

function genCard() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];

  let suits = ["♦", "♥", "♠", "♣"];
  let suitNames = ["diamond", "heart", "spade", "club"];

  let randomValue = values[Math.floor(Math.random() * values.length)];
  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomSuit = suits[randomSuitIndex];
  let suitName = suitNames[randomSuitIndex];

  let cardElement = document.getElementById("card");
  cardElement.innerHTML = `
    <div class="top-suit ${suitName}">${randomSuit}</div>
    <div class="value">${randomValue}</div>
    <div class="bottom-suit ${suitName}">${randomSuit}</div>`;
}

function startCountdown() {
  let countdownElement = document.getElementById("countdown");
  let countdownValue = 10;

  setInterval(() => {
    countdownValue -= 1;
    if (countdownValue < 0) {
      countdownValue = 10;
    }
    countdownElement.textContent = countdownValue;
  }, 1000);
}
function resizeCard() {
  let cardWidth = document.getElementById("cardWidth").value;
  let cardHeight = document.getElementById("cardHeight").value;
  let cardElement = document.getElementById("card");

  if (cardWidth) {
    cardElement.style.width = `${cardWidth}px`;
  }

  if (cardHeight) {
    cardElement.style.height = `${cardHeight}px`;
  }
}
