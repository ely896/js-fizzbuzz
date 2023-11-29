/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Diamo un'altro sguardo alla lista di operatori disponibili 
in js https://www.w3schools.com/js/js_operators.asp
e vediamo se uno di questo possa tornare utile magari qualcuno 
ci fa calcolare la rimanenza di una divizione e questo potrebbe tornare utile...
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM, aggiungendo (attraverso la funzione append()) un elemento 
html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda 
che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/


//Dichiarazione variabile let i e ciclo for 
/*
for (let i = 1; i <= 100; i++) {
    //console.log(i);
    //numeri divisibili per 3 e 5 FizzBuzz    
if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz', i);
    //numeri divisibili per 3 Fizz
} else if (i % 3 === 0) {
    //numeri divisibili per 5 Buzz
} else if (i % 5 === 0) {
    console.log('Buzz', i);   
}
}*/

/*Crea un container nel DOM, aggiungendo (attraverso la funzione append()) un elemento 
html con il numero o la stringa corretta da mostrare.*/
/*
const containerEl =document.querySelector('.container');


for (let i = 1; i <= 100; i++) {
    //console.log(i);
    //numeri divisibili per 3 e 5 FizzBuzz

    const boxEl = document.createElement('div')
    boxEl.classList.add('box')

    
if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz', i);
    boxEl.innerText = 'FizzBuzz';
    
    //numeri divisibili per 3 Fizz
} else if (i % 3 === 0) {
    boxEl.innerText = 'Fizz';
    //numeri divisibili per 5 Buzz
} else if (i % 5 === 0) {
    console.log('Buzz', i); 
    boxEl.innerText = 'Buzz';  
} else {
    boxEl.innerHTML = i;
}
    containerEl.append(boxEl);
}
*/

/*Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda 
che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz */

const containerEl =document.querySelector('.container');


for (let i = 1; i <= 100; i++) {
    //console.log(i);
    //numeri divisibili per 3 e 5 FizzBuzz

    const boxEl = document.createElement('div')
    boxEl.classList.add('box');
      
    
if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz', i);
    boxEl.innerText = 'FizzBuzz';
    document.getElementsByClassName("box_fizzbuzz");
    boxEl.classList.add('box-fizzbuzz');
    
    //numeri divisibili per 3 Fizz
} else if (i % 3 === 0) {
    boxEl.innerText = 'Fizz';
    boxEl.classList.add('box-fizz');
    //numeri divisibili per 5 Buzz
} else if (i % 5 === 0) {
    console.log('Buzz', i); 
    boxEl.innerText = 'Buzz'; 
    boxEl.classList.add('box-buzz');
} else {
    boxEl.innerHTML = i;
    boxEl.classList.add('box');

}
    containerEl.append(boxEl);
}