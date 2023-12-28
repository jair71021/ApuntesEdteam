function ejecutar(){
    //Definir las variables de la cuenta bancaria
    let saldo =100;

    //Bucle para realizar acciones en la cuenta bancaria 

    while (true) {
        let opcion = prompt("Que desea hacer ?  \n1. Consignar\n2. Retirar \n3. Salir");

        if (opcion === "3") {
            alert("Hasta Luego!");
            break;
        }
        //Ejecutar la acciones correspodientes
        if (opcion === "1") {
            let valor = parseInt(prompt("Digite el valor a conseguir"));
            saldo += valor;
            alert("Accion realizada Correctamente . Saldo :"+ saldo);

        }else if( opcion === "2"){
            let valor = parseInt(prompt("Digite el valor de retirar"));
            if (valor > saldo) {
                alert ("No Se realizo la accion . Saldo :" + saldo);
                
            } else {
                saldo -= valor;
                alert("Accion realizada Correctamente . Saldo :"+ saldo);

            }
        }else{
            alert("Opcion Incorrecta ! Vuelva a intentarlo.");
        }
    }
}
ejecutar()