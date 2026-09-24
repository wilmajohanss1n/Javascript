/* Lösning till uppgift 9. Av Wilma Johansson, 2026*/
"use strict";

//En array med personer
const people = [
    { name: "Wilma", age: 20, city: "Västerås" },
    { name: "Emilia", age: 17, city: "Stockholm" },
    { name: "Erik", age: 35, city: "Örebro" }
];

//Funktion som skriver ut personens namn och stad
function printPerson(person) {
    console.log(person.name + "bor i" + person.city);
}

//Går igenom alla personer i arrayen
for (let person of people) {
    printPerson(person);

    //Kontrollerar om personen är myndig
    if (person.age >=18) {
        console.log("Är myndig");
    } else {
        console.log("Är inte myndig.");
    }
}