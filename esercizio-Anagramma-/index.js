// //
// ESERCIZIO Anagramma JS
// //
//Crea una funzione che riconosce se due parole assegnate a due variabili, sono degli anagrammi
//
// //

let checkAnagramma = (word1, word2) => {
  if (word1.length !== word2.length) {
    return console.log(false);
  }

  const aOrdered = word1.split("").sort().join("");
  const bOrdered = word2.split("").sort().join("");

  return console.log(aOrdered === bOrdered);
};

let a = "ciao";
let b = "iaco";

checkAnagramma(a, b);
