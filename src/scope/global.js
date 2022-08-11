// variables

var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; // reasignando
var a = 'aa' // redeclaración

//Global Scope

var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //Asignación global por defecto al no declararla antes
    console.log(country);
}

countries()
console.log(country);