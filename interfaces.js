"use strict";
exports.__esModule = true;
var p = {
    firstName: "Bruno",
    lastName: "Gouveia"
};
/*
function fullName(person: {
  firstName: string;
  lastName: string;
}): void {
    console.log(person.firstName + " " + person.lastName)
}

*/
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(p);
