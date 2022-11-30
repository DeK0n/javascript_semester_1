"use strict";
let counts = 0 ;
let guests_list = [];
let input
while (input !=0) {
  input = prompt("Enter number or 0 to finish: ")
  guests_list[counts] = input;
  counts += 1;
}
const sorted_list = guests_list.sort(function(a,b){return a-b});

console.log(sorted_list)
