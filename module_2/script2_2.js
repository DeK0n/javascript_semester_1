"use strict";
const guests = prompt("Enter number of guests");
let counts = 0;
let guests_list = [];
let answer = ""
while (counts < guests) {
  guests_list[counts] = prompt("Enter name of guest " + (counts + 1) + ": ");
  counts += 1;
}
const sorted_list = guests_list.sort();

for (let i = 0; i < guests; i++) {
answer = answer + "<li>"+sorted_list[i] +"</li>"
}

document.querySelector("#target").innerHTML = answer;
