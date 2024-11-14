const Person = require('./person');

const Persona1 = new Person("Rubén", 1978, "marrones", "negro", 1.75, 70);

// Llamar a las propiedades y métodos
console.log(Persona1.nombre); // Rubén
console.log(Persona1.edad()); // Calcula y muestra la edad
console.log(Persona1.ojos);   // marrones
console.log(Persona1.pelo);   // negro

// Llamar al método mayor
console.log(Persona1.mayor()); // Determina si es mayor de edad

// Llamar al método CalcularIMC
Persona1.CalcularIMC(); // Calcula y muestra el IMC

// Llamar al método printALL
Persona1.printALL();

// Llamar al método printHobbies
Persona1.printHobbies();


//Resul
