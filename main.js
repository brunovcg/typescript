"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
// tsc <module> --watch
// Para ficar acompanhando ao vivo
var x = 10;
var y = 20;
var sum;
var title = "codevolution";
var isBeginener = true;
var total = 0;
var name = "Bruno";
var sentence = "My name is ".concat(name);
console.log(sentence);
var n = null;
var u = undefined;
// null e undefined pode ser passada para tipos string, boolean e number
var isNew = null;
var myName = undefined;
var thisNumber = null;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// quantidade de itens fixa, uma tupla
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 8] = "Green";
    Color[Color["Blue"] = 9] = "Blue";
    Color[Color["Purple"] = 10] = "Purple";
})(Color || (Color = {}));
var c = Color.Green;
var c2 = Color.Blue;
// se não tiver atribuição ele assume o indice
// se declarar um e o proximo não, ele assume o inidice depois do declarado
// se o anterior não for um numero, esse então ter que ser declarado
console.log(c);
console.log(c2);
var randomValue = 10;
// o any não vai gerar erro de código, so no run-time
randomValue = true;
randomValue = "Vishwas";
var anyTestar = 1;
/*
Nada disso daria erro no lint, mas sim no run-tim

anyTestar()
console.log(anyTestar.nome)
anyTestar.toUpperCase()

*/
// PARA ELIMINAR ESSE PROPLEBLA, TS CRIOU O UNKNOWN
// ele não tras as opções de metodos
var naoSei = 19;
// naoSei()   aqui daria erro no lint
// passando um cast ela aceita no lint mas vai dar erro nesse caso de run-time
// (naoSei as string).toUpperCase()
var numerinho = null !== null && null !== void 0 ? null : 10;
console.log(numerinho);
function hasName(obj) {
    return !!obj && typeof obj === 'object' && "name" in obj;
}
var g;
g = 10;
g = true;
// aqui vai dar erro
// let b =20;
// b= true
var multiType;
multiType = 20;
multiType = true;
