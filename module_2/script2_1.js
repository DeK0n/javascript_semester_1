"use strict";
      const numbers = [];
      let counts = 0;
      let answer = "";
      
      while (counts < 5) {
        numbers[counts] = prompt("Enter number " + (counts+1) + ": ");
        counts += 1;
      }
      for (let i = 4; i >= 0; i--) {
        answer = answer + numbers[i] + " ";
      }

      document.querySelector("#target").innerHTML = answer;