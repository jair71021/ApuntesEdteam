//Este es una libreria
const { log } = require("console");
const readline = require("readline")
//Creamos la interfaz
const rl = readline.createInterface({
    //Esta parte es como va ingresar cosa
    input: process.stdin,
    //Esto es lo que va a salir por wl sistema
    output: process.stdout
})

//Para Crear la aplicacion empezaamos con una lista
let listaNotas = [];

//? CREATE
//Creamos una funcion
function crearNota() {
    //Pregunta al Usuario Escribe tu nota
    rl.question("Escribe tu nota: " ,
    //Esta funcion va a recibir un texto
    function(nota){
        listaNotas.push(nota)
        console.log(`Tu nota fue guardada`)
        //console.log(listaNotas);
        //mandamos a llamar la fucion de listar
        //Listar()
        //editar()
        menu()
    })

}

//* READ

function Listar(){
    console.log("Este es tu listado de notas");
    //Agregamos un ciclo para  mandar a  logitud de la nota 
    for (let index = 0; index < listaNotas.length; index++) {
        console.log(index + 1 , listaNotas[index]); 
    }
    menu();

}


//? UPDATE

function editar(){
    //Esta funcion mandas a llamar el numero de listaNotas para editar
    rl.question('Que nota que deseas editar: ',function(numero){
        //Esta funcion manda a llamar el que va a editar el texto de la listaNotas
        rl.question("Escrine la nueva nota:  ", function(texto){
            listaNotas[numero-1] = texto
           // Listar()
           // eliminar()
            menu()
        })
    })
}


//* DELETE

function eliminar(){
    rl.question('Que nota quieres borrar?:',function(numero){
        //CReamos un array para que guarde las notas vacias 
        let nuevoListadoDeNotas = []
        //Recorremos todo lo que hay en la listaNotas y si no es igual a lo que se quiere borrar
        for (let i = 0; i < listaNotas.length; i++) {

            if( i !== numero-1){
                
                nuevoListadoDeNotas.push(listaNotas[i])
            }
        
        }
        //Asignamos los valores del nuevoListadoDeNotas al listanotas
        listaNotas = nuevoListadoDeNotas
        
        //Listar()
        menu()
    })
}


//! Crearemos un menu
function menu(){
    console.log("Bienvenidp a EDnotes");
    console.log("Menu de Usuario :");
    console.log("Elige una opcion");
    console.log("1.Agregar Nota ");
    console.log("2.Ver Todas Las Notas");
    console.log("3.Editar Nota");
    console.log("4.Eliminar Nota");
    console.log("5.Salir")


    rl.question("Escribe el numero elegido:  " , function(num){
        switch(num) {
            case "1":
                crearNota()
                break;
            case "2":
                Listar();
                break;
            case "3":
                editar();
                break;
            case "4":
                eliminar();
                break;
            case "5":
                console.log("CHao");
                rl.close();
            default:
                console.log("Opcion No Valida");
        }

    })

}
menu()



