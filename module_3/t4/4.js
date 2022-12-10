'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


const target=document.getElementById("target")

for (let i = 0; i < 3; i++) {
    let a = document.createElement('option')
    a.textContent=students[i].name 
    a.value=students[i].id 
    target.appendChild(a)
    }

