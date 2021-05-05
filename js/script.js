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
function randomNumber (min, max){
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

function trovaDuplicato (numeroCasuale, array) {
    for (var i = 0; i < array.length; i++)
    if (numeroCasuale == array[i]) {
        return true;
    }
}

function livello (livello) {
    switch (livello) {
        case (0):
            var range = 18;
        break;
        case (1):
            var range = 80;
        break;
        case (2):
            var range = 50;
        break;
    }
    return range - 16;
}

// VARIABILI
var bombe = [];
var tentativi = [];
var numeriGiocatore = [];

// GIOCO

// genero numeri che non siano duplicati
while (bombe.length < 16) {
    var numeroPc = randomNumber(1, 100);
    if (trovaDuplicato(numeroPc, bombe) != true) {
        bombe.push(numeroPc);
    }
    console.log(bombe.length);
}

console.log(bombe);

// chiedo all'utente la selezione del livello
do {
var selezionaLivello = parseInt(prompt("Inserisci un numero da 0 a 2 per scegliere la difficiltà!"));
} while (isNaN (selezionaLivello) || selezionaLivello < 0 || selezionaLivello > 2) {
}

var selezionaLivello = livello(selezionaLivello);

// chiedo all'utente un numero da 1 a 100
tentativi.length = 0;
do {
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100!"));
    tentativi.push(numeroUtente);
    console.log(tentativi);
    console.log("Numero utente " + numeroUtente);
} while (isNaN (numeroUtente) || numeroUtente < 1 || numeroUtente > 100 || tentativi.length < selezionaLivello) {
    tentativi.length ++;
}

for (i = 0; i < tentativi.length; i++) {
    if (trovaDuplicato (numeroUtente, tentativi) != true) {
        tentativi.pop(numeroUtente);
    } 
}

console.log(tentativi);
// cerco i duplicati nei due array



