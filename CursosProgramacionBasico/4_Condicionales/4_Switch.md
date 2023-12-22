Switch es una declaración que selecciona un bloque de código para ser ejecutado entre varios bloques posibles, 
basándose en una condición que evalúa. La declaración switch consta de una lista de claves 
(cada una con su propio bloque de código) y una etiqueta.

let descuento = 0;

let pais ="peru"

switch (pais) {
 case "Argetina":
    descuento=10
    console.log(descuento);
    break;
 case "Bolivia":
     descuento=30
    console.log(descuento);
    break;
 case "Peru":
     descuento=40
    console.log(descuento);
    break;
 default:
    console.log("Invalido");
}






El operador break se utiliza para salir del bloque de código correspondiente a la declaración switch una vez que
 se ha ejecutado el bloque de código. Si no se utiliza el operador break, el flujo de ejecución continuará 
 con las declaraciones siguientes hasta que se encuentre una instrucción break, lo que podría provocar
  resultados inesperados.