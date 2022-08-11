function greeting(){
    let userName = 'Ana'; //Se define la variable dentro de la función, y sólo se puede acceder en la función,
                          //Ya que no es variable global.
    console.log(userName);
    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }

}


greeting();
console.log(userName); //No funciona ya que no se puede acceder a la variable porque no es una variable global