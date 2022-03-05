export {}

let p = {
    firstName: "Bruno",
    lastName: "Gouveia"
}


interface Person { 

    firstName: string;
    // ? deixa opcional
    lastName?: string

}

/*
function fullName(person: {
  firstName: string;
  lastName: string;
}): void {
    console.log(person.firstName + " " + person.lastName)
}

*/

function fullName(person: Person): void {
      console.log(person.firstName + " " + person.lastName)
  }



fullName(p)





