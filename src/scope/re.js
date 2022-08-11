var firstName; //Undefined
firstName = 'Juan' 
console.log(firstName);

var lastName = 'David'; //Declarar / asignar
lastName = 'Fernando'; // reasignar
console.log(lastName);

var secondName = 'David'; //declarando / asignamos
var secondName = 'Fernando' // reasignando / redeclarando
console.log(secondName);


// Let

let fruit = 'Apple' //declarar y asignar
fruit = 'Kiwi'; //reasignar
console.log(fruit);
// let fruit = 'Banana'; Let no deja redeclarar las variables

// Const
const animal = 'dog';
animal = 'cat';
console.log(animal);

const persona = {
    nombre: 'Juan',
    apellido: 'Gómez'
}

persona.apellido = 'Baena'; // Const deja reasignar el valor de sus atributos

const persona2 =  {
    nombre: 'Felipe',
    apellido: 'Baena'
}

persona = persona2; // No deja reasignar el valor del objeto

console.log(persona);

const elefantes = [1,2,3,4];
elefantes[1]=5;
console.log(elefantes);

const elefantes2 = [6,7,8,9];
elefantes2[2]=0;
elefantes = elefantes2;
console.log(elefantes);

