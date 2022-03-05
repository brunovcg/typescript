export {};

let message = "Hello World";

console.log(message);

// tsc <module> --watch
// Para ficar acompanhando ao vivo

let x = 10;

const y = 20;

let sum;

const title = "codevolution";

let isBeginener: boolean = true;
let total: number = 0;
let name: string = "Bruno";

let sentence: string = `My name is ${name}`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// null e undefined pode ser passada para tipos string, boolean e number

let isNew: boolean = null;
let myName: string = undefined;
let thisNumber: number = null;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// quantidade de itens fixa, uma tupla
let person1: [string, number] = ["Chris",22]


enum Color { Red = 3, Green = 8, Blue, Purple}

let c: Color = Color.Green

let c2: Color = Color.Blue

// se não tiver atribuição ele assume o indice
// se declarar um e o proximo não, ele assume o inidice depois do declarado
// se o anterior não for um numero, esse então ter que ser declarado
console.log(c)
console.log(c2)



let randomValue: any = 10

// o any não vai gerar erro de código, so no run-time

randomValue = true
randomValue = "Vishwas"

let anyTestar: any = 1

/*
Nada disso daria erro no lint, mas sim no run-tim

anyTestar()
console.log(anyTestar.nome)
anyTestar.toUpperCase()

*/

// PARA ELIMINAR ESSE PROPLEBLA, TS CRIOU O UNKNOWN
// ele não tras as opções de metodos

let naoSei: unknown = 19;

// naoSei()   aqui daria erro no lint



// passando um cast ela aceita no lint mas vai dar erro nesse caso de run-time
// (naoSei as string).toUpperCase()


let numerinho: number = null ?? 10

console.log(numerinho)



function hasName (obj: any): obj is {name: string} {
    return !!obj && typeof obj === 'object' && "name" in obj
}





let g
g = 10
g= true

// aqui vai dar erro
// let b =20;
// b= true




let multiType: number | boolean;

multiType =20;
multiType = true;