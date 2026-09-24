/* Lösning till uppgift 2. Av Wilma Johansson, 2026 */
"use strict";

// Pris för produkt och antal produkter
const price= 100;
const quantity= 3;

// Totalpris för alla produkter
const total = price * quantity

// Totalpris inklusive 25% moms
const totalWithVat = total * 1.25;

// Skriver ut resultat
console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Total: " + total + " kr");
console.log("Totalt inklusive moms: " + totalWithVat + " kr");
