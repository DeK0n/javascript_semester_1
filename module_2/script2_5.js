"use strict";
let counts = 0 ;
let guests_list = [];
let input
let boo = false
while (boo != true) {
  input = prompt("Enter number: ")
  boo = guests_list.includes(input)
  if (boo == true) {
    alert("the number has already been given")
    break
  }
  guests_list[counts] = input;
  counts += 1;
}
const sorted_list = guests_list.sort(function(a,b){return a-b}).reverse();

console.log(sorted_list)
