// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// Refs

const number = document.getElementById("number");

const numbRandomList = [];
let numbRandom;

// Ciclo for per generare 5 numeri casuali e pusharli dentro l'array
for (let i = 0; i < 5; i++) {
  numbRandom = genNumRandom(1, 100);
  numbRandomList.push(numbRandom);
}
console.log(numbRandomList);

// Stampare in pagina i numeri generati
number.innerHTML = `Memorizza questi numeri: ${numbRandomList}`;

// Utilizzo setTimeOut per farli stare su 30 secondi e poi basta

/*****************
FUNZIONI
*****************/

function genNumRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
