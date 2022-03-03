let intentos=0
let pcRandomNumber = Math.ceil ((Math.random() * 10))
console.log(pcRandomNumber)

let userWin=false//cuando tu empiezas no has ganado por lo que pones false...solo cuando ganas es true.

let numero



while (!userWin && intentos<5){
    if (numero === pcRandomNumber ){//!userWin es lo mismo que userwin===false
        alert (`Enhorabuena, el numero es ${pcRandomNumber} y has necesitado ${intentos}intentos para acertarlo`)
       userWin=true
    }
    if (numero != pcRandomNumber){
       numero = checkNumber (prompt ("Vuelve a intentarlo"))
       
        intentos ++    
    }      
}
if (!userWin )alert("has fallado")//numero != pcRandomNumber && intentos ===5){alert("has fallado")}
 function checkNumber (input){
     //if//si es mayor de 10
//return Number (input)
 }



/*if (numeros [posicion] === pcRandomNumber && !userWin){//!userWin es lo mismo que userwin===false
    alert (`Enhorabuena, el numero es ${pcRandomNumber} y has necesitado ${intentos}intentos para acertarlo`)
   userWin=true
}
if (numeros [posicion] != pcRandomNumber && intentos < 5){
    numeros.push =( Number (prompt ("Vuelve a intentarlo")))
    intentos ++
    posicion ++
}


if (numeros [posicion] === pcRandomNumber && !userWin){
    alert (`Enhorabuena, el numero es ${pcRandomNumber} y has necesitado ${intentos}intentos para acertarlo`)
    userWin=true
}
if (numeros [posicion] != pcRandomNumber && intentos < 5){
    numeros.push=( Number (prompt ("Vuelve a intentarlo")))
    intentos ++
    posicion ++
}


if (numeros [posicion] === pcRandomNumber && !userWin){
    alert (`Enhorabuena, el numero es ${pcRandomNumber} y has necesitado ${intentos}intentos para acertarlo`)
    userWin=true
}
if (numeros [posicion] != pcRandomNumber && intentos < 5){
    numeros.push=( Number (prompt ("Vuelve a intentarlo")))
    intentos ++
    posicion ++
}


if (numeros [posicion] === pcRandomNumber && !userWin){
    alert (`Enhorabuena, el numero es ${pcRandomNumber} y has necesitado ${intentos}intentos para acertarlo`)
    userWin=true
}
if (numeros [posicion] != pcRandomNumber && intentos ===5){
   alert("has fallado")
}*/