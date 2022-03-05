export {};

class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`o employee ${this.name} disse oi`);
  }
}

const emp1 = new Employee("Bruno");

console.log(emp1.name);
emp1.greet();

console.log(emp1.constructor.name);

class Manager extends Employee {
  grau: number;

  constructor(managerName: string, grau: number) {
    super(managerName);
    this.grau = grau;
  }

  delegateWork() {
    console.log("He is delegating!");
  }
}

const chef = new Manager("Bruno", 10);

interface Coisas {
  coisa1: string;
  coisa2: string;
}

class MinhasCoisas extends Employee implements Coisas {
  coisa1: string;
  coisa2: string;

  constructor(name: string) {
    super(name);
  }
}

const mC1 = new MinhasCoisas("Gouveia");

mC1.greet();


/// -----------------------------------------------------------------------------


class Paises {
    // quando não tem é public
    nome: string;

    // private não é acessado fora da classe
    private agenda: string;

    // protected pode ser usada pelas classes filhas

    protected ministros: string;


    // Não são chamados na classe
    static methods () {

    }

    /*

    Isso aqui dará erro

    outroMethodo(){
        this.methods()
    }

    */


}
