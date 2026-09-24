/* Lösning till uppgift 3. Av Wilma Johansson, 2026 */
"use strict";

// Ålder som ska kontrolleras
const age = 20;

// Kontrollerar vilken åldersgrupp personen tillhör
if (age < 18) {
    console.log("Barn");
} else if (age < 65) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}