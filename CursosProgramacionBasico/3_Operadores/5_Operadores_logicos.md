Los operadores logico son lo que nos dice  puede pasar esto o esto       y esto

ejemplo AND

let  edad = 18;
let genero = "f"
const mayoriaDeEdad=18;


const esMayor = edad >= mayoriaDeEdad;

const esMujer = genero == "F";

//cuando utiliza la comparacion siempre se utiliza doble igual

const puedeEntar = esMayor && esMujer;

console.log(puedeEntrar); -> resultado es verdadero


Otro Ejemplo


let  edad = 18;
let genero = "f"
const mayoriaDeEdad=18;


const puedeEntar = (edad >= mayorDeEdad) && (grnero == "F");

console.log(puedeEntrar); -> resultado es verdadero




ejemplo con O

let  edad = 25;
let genero = "f"
const mayoriaDeEdad=50;


const esMayor = edad >= mayoriaDeEdad;

const esMujer = genero == "F";

const puedeEntar = esMayor || esMujer;

console.log(puedeEntrar); -> resultado es verdadero
