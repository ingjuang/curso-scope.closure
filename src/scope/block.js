function fruits(){
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana' //block scope
        console.log(fruit2); //se accede sólo desde el bloque {}
        console.log(fruit3); //se accede sólo desde el bloque {}
    }
    console.log(fruit1); //se puede acceder desde la función
}

fruits();