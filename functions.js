"use strict";
exports.__esModule = true;
exports.add = void 0;
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
add(50, 10);
// vai dar erro
// add(1, "1")  
function addOptional(name, surname) {
    if (surname) {
        return name + " " + surname;
    }
    return name;
}
console.log(addOptional("Bruno"));
console.log(addOptional("Bruno", "Gouveia"));
// com valores default não precisa do ? para não declarar a optional
function defaultFuntion(name, surname) {
    if (surname === void 0) { surname = "Gouveia"; }
    // if (surname){
    return name + " " + surname;
    // }
    // return name
}
console.log(defaultFuntion("Bruno"));
