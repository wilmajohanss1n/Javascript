/* Lösning till uppgift 8. Av Wilma Johansson, 2026 */
"use strict";

//Ett objekt som innehåller information om en bok
const book = {
    title: "Harry Potter och de vises sten",
    author: "J.K Rowling",
    year: 1997
};

//Funktion som skriver ut information om boken
function printBookInfo(book) {
    console.log("Titel:", book.title);
    console.log("Författare", book.author);
    console.log("År:", book.year);
}

//Anropar funtkionen
printBookInfo(book);