"use strict";
const rolls = prompt("Set number of rolls: ");
let result = 0;
let oneroll;
for (let i = 1; i <= rolls; i++) {
  oneroll = Math.floor(Math.random() * 6) + 1;
  result += oneroll;
  console.log(oneroll);
  console.log(`sum = ${result}`);
}
document.querySelector("#target").innerHTML = result;

