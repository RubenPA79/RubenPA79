const Person = require('./person');

class Contacts {
  constructor() {
    // Inicializa el array con objetos Person
    this.lista = [
      new Person("Rubén", 1978, "marrones", "negro", 1.75, 70, ["nadar", "correr"]),
      new Person("María", 1995, "azules", "rubio", 1.65, 60, ["leer", "escribir"])
    ];
  }

  // Método que imprime los atributos de cada objeto Person
  printPersons() {
    this.lista.forEach(person => {
      person.printALL();
    });
  }
}

module.exports = Contacts;
