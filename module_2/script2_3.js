"use strict";
const guests = 6;
let counts = 0;
let guests_list = [];
let answer = ""
while (counts < guests) {
  guests_list[counts] = prompt("Enter name of dog " + (counts + 1) + "of 6: ");
  counts += 1;
}
const sorted_list = guests_list.sort().reverse();

for (let i = 0; i < guests; i++) {
answer = answer + "<li>"+sorted_list[i] +"</li>"
}

document.querySelector("#target").innerHTML = answer;
