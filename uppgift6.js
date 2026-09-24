/* Lösning till uppgift 6. Av Wilma Johansson, 2026 */
"use strict";

//Funktion som beräknar arean av en rektangel
function calculteArea(width, height) {
    const area = width * height;
    return area;
}

//Anropa funktionen med olika värden
const area1 = calculteArea(5, 10);
const area2 = calculteArea(8, 4);
const area3 = calculteArea(12, 6);

//Skiver ut resultaten
console.log("Area 1:", area1);
console.log("area 2:", area2);
console.log("Area 3:", area3);


