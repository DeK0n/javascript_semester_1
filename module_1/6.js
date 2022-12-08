"use strict";
let response1;
const answer1 = confirm("Should I calculate the square root?");
if (answer1 == true) {
  const input1 = prompt("Enter number: ");
  if (input1 < 0) {
    response1 = "The square root of a negative number is not defined.";
  } else {
    response1 = Math.sqrt(input1);
  }
} else {
  response1 = "The square root is not calculated.";
}

document.querySelector("#target").innerHTML = response1;
