Para crea un for se necesita la siguiente sintaxis

for(variable ; condicion, incremento;){
    
}


1 Lo primero que tenemos que hacer para crear un for es declar una variable
2 Despues declaramos una condicion y un incremento

ejemplo

for (let numero = 1; numero <=10, numero++ ){
    const tabla = 5;
    console.log(tabla + " X " + numero + " = " + numero * tabla);
  

}


otra forma 
for (let numero = 1; numero <= 10; numero++) {
    const tabla = 5;
    const resultado = tabla + " X " + numero + " = " + numero * tabla;
    console.log(resultado);
}

Con un for se puede hacer varia repeticiones dependiendo de la condicion
por ejemplo  se hizo la tabla de multiplicar del un 1 al 10 con dos for 

for (let tabla = 1; tabla <= 10; tabla++) {
    for (let numero = 1; numero <= 10; numero++) {
      const resultado = tabla + " X " + numero + " = " + numero * tabla;
      console.log(resultado);
    }
  }



  
  for (let num = 0; num < 10; num++) {
    //codigo de la interacion
    if (num % 2 == 0) {
      console.log(num);
    } else {
      console.log(Impar);
    }
  }
