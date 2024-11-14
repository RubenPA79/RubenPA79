class Person {
    constructor(nombre, yearOfBirth, ojos, pelo, altura, peso, hobbies) {
      this.nombre = nombre;
      this.yearOfBirth = yearOfBirth;
      this.ojos = ojos;
      this.pelo = pelo;
      this.altura = altura;
      this.peso = peso;
      this.hobbies = hobbies;
    }
  
    // Método que calcula la edad basado en el año de nacimiento
    edad() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.yearOfBirth;
    }
  
    // Método que nos dice si somos mayores de edad o no
    mayor() {
      let age = this.edad();
      if (age < 18) {
        return `${this.nombre} es menor de edad con ${age}`;
      } else {
        return `${this.nombre} es mayor de edad con ${age}`;
      }
    }
  
    // Método que calcula el índice de masa corporal
    CalcularIMC() {
      let IMC = this.peso / (this.altura * this.altura);
      let redondeo = parseFloat(IMC.toFixed(2));
  
      if (redondeo < 18.5) {
        console.log("Peso insuficiente");
      } else if (redondeo >= 18.5 && redondeo <= 24.9) {
        console.log("El peso es normal");
      } else if (redondeo >= 25 && redondeo <= 29.9) {
        console.log("Sobrepeso");
      } else if (redondeo >= 30 && redondeo <= 34.9) {
        console.log("Obesidad clase I");
      } else if (redondeo >= 35 && redondeo <= 39.9) {
        console.log("Obesidad clase II");
      } else if (redondeo >= 40) {
        console.log("Obesidad Mórbida");
      }
    }

    //Metodo  printAll muestra atributos de clase persona  y valor del atributo con " - "

    printALL() {
        for (let propiedad in this) {
          console.log(`${propiedad} - ${this[propiedad]}`);
        }
}

// Metodo de array de Hobbyes

printHobbies(){
    let hobby = ["nadar" , "correr" , "tennis"];
    
    for(let i =0 ; i < hobby.length ; i++){

        console.log(hobby[i]);
    }
}

  }
  
  module.exports = Person;

