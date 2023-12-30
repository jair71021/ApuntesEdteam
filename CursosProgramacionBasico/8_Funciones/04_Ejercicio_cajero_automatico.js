let saldo = 100
//Esta funcion sirve para agregar el valor de saldo
function consignar(valor){
    if (valor < 10) {
        return false
    }
    //Agregar el valor de saldo
    saldo+=valor
    //regresar saldo
    //true es para devolver siel proceso se ejecutoo correctamente
    return true

}
//funcion para retirar
function retire (valor) {
    if(valor>saldo){
        //si no hay suficiente dinero en la cuenta, regresamos falso.
        return false;    
    }else{
        //restar el valor a la cuenta
        //retornamos verdadero si todo esta bien
        saldo-=valor
        return true;
    }
}
// Esta funcion es para realizar la acciones
function realizarAccion(accion){
    if (accion === "1") {
        //El prompt nos permite digitar un en el navegador
        //parseInt es para convertir en entero
        let valor = parseInt(prompt("Digite el valor a consignar"))
        //
        return consignar(valor)
    }

    if (accion === "2") {
        
        let valor = parseInt(prompt("Digite el valor a retirar"))
        return retire(valor)
    }
    return false
}


function ejecutar(){
    //Mostramos al usuario las opciones que tiene
    while(true){
        let accion = prompt ("Que opcion desea ? 1. Consignar , 2. Retirar ,3. Salir ")
        if (accion === "3") {
            alert ("Hasta Luego !")
            break;
        }
    let resultado = realizarAccion(accion)
        //La accion no se puede realizar
        if (resultado === false) {
            alert ("No se pudo realizar la operacion")
        }else{
            //Si se realizo con exito
            alert(`Saldo actual ${saldo}`)
        }

    }
}



ejecutar()