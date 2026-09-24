/* Lösning till uppgift 5. Av Wilma Johansson, 2026 */
"use strict";

// En array med maträtter
const dishes = ["Pizza", "Tacos", "Sushi", "Hamburgare", "Pasta"];

//Skriver ut  hela arrayen
console.log("Alla maträtter:", dishes);

//Skriver första maträtten
console.log("Första maträtten:", dishes[0]);

//Skriver sista maträtten
console.log("Sista maträtten:", dishes[dishes.length - 1]);

//Lägger till ny maträtt i slutet
dishes.push("Lasange");

//Tar bort första maträtten
dishes.shift();

//Skriver ut den ändrade arrayen
console.log("Ändrad array:", dishes);

