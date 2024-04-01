const rowElem = document.querySelector(".row"); // object | null

console.log(rowElem);

for (let i = 1; i <= 100; i++) {

    console.log(i);

    let boxClass;

    let printElem;

    if((i % 3 === 0) && (i % 5 === 0)) {

        boxClass = "fizz-buzz";

        printElem = "FizzBuzz";

        console.log("FizzBuzz");

    } else if (i % 3 === 0) {

        boxClass = "fizz";

        printElem = "Fizz";

        console.log("Fizz");

    } else if (i % 5 === 0) {

        boxClass = "buzz";

        printElem = "Buzz";

        console.log("Buzz");

    } else {
        
        printElem = i;

    }

  const boxElem = `<div class="col my-3 d-flex justify-content-center align-item-middle">
  <div class="box ${boxClass}">
  ${printElem}
  </div>`; // string

  rowElem.innerHTML += boxElem;

}