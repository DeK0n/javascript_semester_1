"use strict";
const integer1 = parseInt(prompt("Type first integer: "));
const integer2 = parseInt(prompt("Type second integer: "));
const integer3 = parseInt(prompt("Type third integer: "));
const intSum = integer1 + integer2 + integer3;
const intProd = integer1 * integer2 * integer3;
const intAve = intSum / 3;
document.querySelector("#target").innerHTML =
  "These integers' sum is " +
  intSum +
  ", product is " +
  intProd +
  " and avearge is: " +
  intAve;
