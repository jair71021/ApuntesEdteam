// años bisiesto en pseudocodigo

// Declaración de variables
entero año;

// Inicio del programa
inicio

   // Solicitar al usuario que ingrese un año
   Escribir "Ingrese un año: ";
   Leer año;

   // Verificar si el año es bisiesto
   si (año % 4 == 0)
   entonces
      si (año % 100 != 0)
      entonces
         Escribir "El año ", año, " es bisiesto.";
      sino
         si (año % 400 == 0)
         entonces
            Escribir "El año ", año, " es bisiesto.";
         sino
            Escribir "El año ", año, " no es bisiesto.";
         fin si
      fin si
   sino
      Escribir "El año ", año, " no es bisiesto.";
   fin si

fin


