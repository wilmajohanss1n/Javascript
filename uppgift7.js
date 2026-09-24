/* Lösning till uppgift 7. Av Wilma Johansson, 2026 */
"use strict";

//En array med tal
const numbers = [5, 10, 15, 20, 25, 30];

//Funktion som räknar ut summan av alla tal i arrayen
function calculateSum(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum+= number;
    }
    return sum;
}

//Anropar funktionen
const result = calculateSum(numbers);

//Skriver ut resultatet
console.log("Summan av talen:", result);



