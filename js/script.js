'use strict'

const rowElem = document.querySelector(".row"); // object | null

console.log(rowElem);

for (let i = 1; i <= 100; i++) {

    let boxClass;

    let printElem;

    if((i % 3 === 0) && (i % 5 === 0)) {

        boxClass = "fizz-buzz";

        printElem = "FizzBuzz";

        console.log(i, "FizzBuzz");

    } else if (i % 3 === 0) {

        boxClass = "fizz";

        printElem = "Fizz";

        console.log(i, "Fizz");

    } else if (i % 5 === 0) {

        boxClass = "buzz";

        printElem = "Buzz";

        console.log(i, "Buzz");

    } else {
        
        printElem = i;

        console.log(i);

    }

  const boxElem = `<div class="col my-3 d-flex justify-content-center align-item-middle">
  <div class="box ${boxClass}">
  ${printElem}
  </div>`; // string

  rowElem.innerHTML += boxElem;

}