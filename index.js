// 1) Quali sono i tipi primitivi principali in TypeScript?
// 1) "string"
// 2) number
// 3)any
// 4)boolean
// 5)undefined
// 6)null
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = 'massimo';
var myAge = 22;
var study = true;
// 3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return 'Ciao ' + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var iva = function (price) {
    return price + (price * 22) / 100;
};
console.log(iva(20));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concString = function (string1, string2) {
    var concaneted = string1 + string2;
    return concaneted.length;
};
console.log(concString('marco', 'gino'));
// 7) Cos'è un Type Union e come si scrive?
// | questo è un type union es. let union: string | number = (NumString)
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var Nullfined = 22;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tuple1 = [
    'ciao',
    'mondo',
    'epicode',
    2,
    3,
];
var Student = [
    {
        name: 'Mario',
        value: 6,
        address: 'via antonio 89',
    },
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    marca: 'Fiat',
    modello: 'panda',
    anno: 2022,
    colore: 'grigio',
    porte: 5,
};
