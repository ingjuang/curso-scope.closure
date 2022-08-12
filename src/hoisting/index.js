var nameOfDog; //Undefined
console.log(nameOfDog);
var nameOfDog = 'Carlos';
console.log(nameOfDog);

nameOfDog(); //Si se puede llamar funciones antes de declararlas

function nameOfDog() {
    console.log(`El mejor perrito es ${carlos}`); //carlos es undefined ya que no se le asigna valor en las anteriores lineas
}

var carlos = 'Carlos'