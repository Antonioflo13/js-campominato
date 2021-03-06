// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po' scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :linguaccia:
// Buon pranzo e buon divertimento! :muscolo:

// FUNCTIONS
// Crea un numero casuale
function randomNumber (min, max){
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

// trova il duplicato
function trovaDuplicato (numeroCasuale, array) {
    for (var i = 0; i < array.length; i++) {
        if (numeroCasuale == array[i]) {
            return true;
        }
    }
    return false;
}

// Per ogni livello ha un range diverso
function livello (livello) {
    var range;
    switch (livello) {
        case (0):
            range = 100;
        break;
        case (1):
            range = 80;
        break;
        case (2):
            range = 50;
        break;
    }
    return range;
}



// VARIABILI
var bombe = [];
var tentativi = [];
var messaggio;



// GIOCO
// chiedo all'utente la selezione del livello
do {
    var selezionaLivello = parseInt(prompt("Inserisci un numero da 0 a 2 per scegliere la difficiltà!"));
} while (isNaN (selezionaLivello) || selezionaLivello < 0 || selezionaLivello > 2);

// genero numeri che non siano duplicati
while (bombe.length < 16) {
    var numeroPc = randomNumber(1, messaggio);
    if (trovaDuplicato(numeroPc, bombe) != true) {
        bombe.push(numeroPc);
    }
}
console.log(bombe);

var range = livello(selezionaLivello);

// chiedo all'utente un numero da 1 a 30/50/100
var gameOver = false;
while(tentativi.length < (range - 16) && gameOver == false) { // ripeto finchè l'utente ha perso o ha vinto
    do {
        var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a " + range));
        console.log(tentativi);
        console.log("Numero utente " + numeroUtente);
    } while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > range);

    if (trovaDuplicato(numeroUtente, bombe)) {
        gameOver = true;
        console.log("Hai perso! il tuo punteggio è di " + (tentativi.length - 1));
    } else if (!trovaDuplicato(numeroUtente, bombe)) {
        tentativi.push(numeroUtente);
    }
}
if (tentativi.length == (range - 16)) {
    console.log("Complimenti! il tuo punteggio è di " + (tentativi.length - 1));
}



// cerco i duplicati nei due array



