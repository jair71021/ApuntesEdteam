let lista = [];
console.log(lista);

lista.push("Ella baila sola");
lista.push("40 y 20 ");
lista.push("Solamente");
lista.push("Tu carcel");

console.log(lista);

lista[1]="40 & 20";

console.log(lista);


//Recorrer una lista
// El for nos va ayudar a recorrer las lista

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
    
// }



// Otra forma de recorrer un lista se utilizo un la condicion while
// let i =0;
// while (i <lista.length) {
//     console.log(lista[i]);
//     i++
// }

// Otra forma es forEach
lista.forEach(i => console.log(i));
