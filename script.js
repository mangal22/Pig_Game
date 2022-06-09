"use strict";
const getRollDiceValue = function () {
  return Number(Math.trunc(Math.random() * 6) + 1);
};

const switchPlayer = function () {
  currPlayer.setInActive();
  if (currPlayer.name === "player1") currPlayer = player2;
  else currPlayer = player1;
  currPlayer.setActive();
};

const player1 = {
  name: "player1",
  player: document.querySelector(".player--0"),
  currScore: document.querySelector("#current--0"),
  totalScore: document.querySelector("#score--0"),
  currScoreValue: 0,
  totalScoreValue: 0,
  displayCurrScore: function () {
    this.currScore.textContent = this.currScoreValue;
  },
  displayTotalScore: function () {
    this.totalScore.textContent = this.totalScoreValue;
  },
  setInActive: function () {
    this.player.classList.remove("player--active");
  },
  setActive: function () {
    this.player.classList.add("player--active");
  },
  reset: function () {
    this.currScoreValue = 0;
    this.totalScoreValue = 0;
    this.displayCurrScore();
    this.displayTotalScore();
  },
};

const player2 = {
  name: "player2",
  player: document.querySelector(".player--1"),
  currScore: document.querySelector("#current--1"),
  totalScore: document.querySelector("#score--1"),
  currScoreValue: 0,
  totalScoreValue: 0,
  displayCurrScore: function () {
    this.currScore.textContent = this.currScoreValue;
  },
  displayTotalScore: function () {
    this.totalScore.textContent = this.totalScoreValue;
  },
  setInActive: function () {
    this.player.classList.remove("player--active");
  },
  setActive: function () {
    this.player.classList.add("player--active");
  },
  reset: function () {
    this.currScoreValue = 0;
    this.totalScoreValue = 0;
    this.displayCurrScore();
    this.displayTotalScore();
  },
};
let btnCloseModal = document.querySelector(".close-modal");
let btnsOpenModal = document.querySelector(".btn--rules");
let modal = document.querySelector(".modal");

let newButton = document.querySelector(".btn--new");
let rollButton = document.querySelector(".btn--roll");
let holdButton = document.querySelector(".btn--hold");
let img = document.querySelector("img");
let currScoreValue = 0;
let currPlayer = player1;

const rollDice = function () {
  let dice = getRollDiceValue();
  img.src = `images\\dice-${dice}.png`;
  if (dice === 1) {
    currPlayer.totalScoreValue = 0;
    currPlayer.currScoreValue = currPlayer.totalScoreValue;
    currPlayer.displayTotalScore();
    currPlayer.displayCurrScore();
    switchPlayer();
    currPlayer.currScoreValue = currPlayer.totalScoreValue;
  } else {
    currPlayer.currScoreValue += dice;
  }
  currPlayer.displayCurrScore();
};

const holdDice = function () {
  currPlayer.totalScoreValue = currPlayer.currScoreValue;
  if (currPlayer.totalScoreValue >= 20) {
    alert(`${currPlayer.name} wins!!!`);
    resetGame();
    return;
  }
  currPlayer.displayCurrScore();
  currPlayer.displayTotalScore();
  switchPlayer();
};

const resetGame = function () {
  player1.reset();
  player1.setActive();
  player2.reset();
  player2.setInActive();
  currPlayer = player1;
  console.log("New Game Started");
};

const openModal = function () {
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};

rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdDice);
newButton.addEventListener("click", resetGame);
btnCloseModal.addEventListener("click", closeModal);
btnsOpenModal.addEventListener("click", openModal);
