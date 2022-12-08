"use strict";
const nameInput = prompt("Enter your name: ");
let room = Math.floor(Math.random() * 4);
let room_name = "";
if (room == 0) {
  room_name = "Griffindor";
} else if (room == 1) {
  room_name = "Slytherin";
} else if (room == 2) {
  room_name = "Hufflepuff";
} else if (room == 3) {
  room_name = "Ravenclaw";
} else {
  room_name = room;
}
document.querySelector("#target").innerHTML =
  nameInput + " ,you are in " + room_name;
