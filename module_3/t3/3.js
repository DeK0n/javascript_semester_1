'use strict';
const names = ['John', 'Paul', 'Jones'];

document.getElementById("target").innerHTML = "<li></li><li></li><li></li>";

for (let i = 0; i < 3; i++) {
    let a = document.querySelectorAll('li')[i];
    a.textContent=names[i] 
    }