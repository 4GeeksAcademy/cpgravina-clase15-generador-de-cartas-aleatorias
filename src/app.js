/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const cardSymbols = ["♦", "♥", "♠", "♣"];
  const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "J", "Q", "A"];

  const RandomSymbolDisplayed =
    cardSymbols[Math.floor(Math.random() * cardSymbols.length)];
  const RandomNumberDisplayed =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

  document.getElementById("symbol").innerHTML = RandomSymbolDisplayed;
  document.getElementById("number").innerHTML = RandomNumberDisplayed;
  document.getElementById("symbol2").innerHTML = RandomSymbolDisplayed;

  const symbolClass = document.getElementById("symbol");

  if (
    cardSymbols[2] == RandomSymbolDisplayed ||
    cardSymbols[3] == RandomSymbolDisplayed
  ) {
    symbolClass.classList.remove("text-danger");
    symbol.classList.add("text-black");
  }

  const symbol2Class = document.getElementById("symbol2");

  if (
    cardSymbols[2] == RandomSymbolDisplayed ||
    cardSymbols[3] == RandomSymbolDisplayed
  ) {
    symbol2Class.classList.remove("text-danger");
    symbol2.classList.add("text-black");
  }
};
