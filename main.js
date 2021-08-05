"use strict";
const userInput = document.querySelector(".number");
const button = document.querySelector(".button_js");
const boxOne = document.querySelector(".box1_js");
const boxTwo = document.querySelector(".box2_js");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log("El número random", randomNumber);

function compareNumber() {
  const userInputValue = parseInt(userInput.value);
  console.log(userInputValue, randomNumber, userInputValue === randomNumber);
  if (userInputValue < randomNumber) {
    console.log("demsiado bajo");
    boxOne.innerHTML = "Demasiado bajo";
  } else if (userInputValue > randomNumber) {
    boxOne.innerHTML = "Demasiado alto";
  } else if (userInputValue === randomNumber) {
    console.log("has ganado");
    boxOne.innerHTML = "has ganado";
  }
}

var contador = 1;
button.onclick = function () {
  boxTwo.innerHTML = contador;
  contador++;
};

function handleClickTry() {
  compareNumber();
}

button.addEventListener("click", handleClickTry);
