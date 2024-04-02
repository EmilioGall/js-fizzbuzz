# Train Ticket Discount Counter

## Text of the exercise
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 
 **Prima di partire a scrivere codice poniamoci qualche domanda:**
 Come faccio a sapere se un numero è divisibile senza resto per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?

 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 
 **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
___

## Solution

### LOGICAL EXECUTION

- [x] Define constant of the object where the boxes with numbers have to be.

**FOR CYCLE** for numbers from 1 to 100.
   - [x] Define class variable.
   - [x] Define name variable.

   - **IF** number/3 **AND** number/5have no remainder.

      - [x] Define class variable as "FizzBuzz".

      - [x] Define name variable as "FizzBuzz".

   - **ELSE IF** number/3 have no remainder.

      - [x] Define class variable as "Fizz".

      - [x] Define name variable as "Fizz".

   - **ELSE IF** number/5 have no remainder.

      - [x] Define class variable as "Buzz".

      - [x] Define name variable as "Buzz".

   - **ELSE**

      - [x] Define name variable as "i".

### OUTPUT

- [x] Print in the constant of the object where the boxes with numbers have to be all the 100 div of FOR cycle.

