export
// esse export é para não dar erro por causa do js e ts iguais

function add(num1 : number, num2: number): number {
    return num1 + num2
}

add(50,10)

// vai dar erro
// add(1, "1")  

function addOptional(name: string, surname?: string): string{

    if (surname){
        return name + " " + surname
    }

    return name
}

console.log(addOptional("Bruno"))

console.log(addOptional("Bruno", "Gouveia"))


// com valores default não precisa do ? para não declarar a optional
function defaultFuntion(name: string, surname: string = "Gouveia") : string{

    // if (surname){
        return name + " " + surname
    // }

    // return name

}

console.log(defaultFuntion("Bruno"))