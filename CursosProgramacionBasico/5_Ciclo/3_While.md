La declaración while en JavaScript se utiliza para ejecutar un bloque de código mientras se cumpla una condición específica.

El flujo de ejecución de la declaración while es el siguiente:

Se evalúa la condición en la expresión del bucle while.
Si la condición es verdadera, se ejecuta el bloque de código asociado.
Luego, el flujo de ejecución regresa a la expresión del bucle while y se repite el proceso.

El bucle while continúa ejecutándose hasta que la condición en la expresión del bucle while se evalúe como falsa.


Ejemplo

  let edad = 0;
  while (edad < 18) {
    console.log("Eres un chamaco");
    edad++;
  }
  console.log("Ya eres un adulto");
