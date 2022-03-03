let intentos = 0
let pcRandomNumber = Math.ceil ((Math.random() * 10))
console.log(pcRandomNumber)
let numero = Number(prompt("Introdueix un numero del 0 al 10"))
let numero2 //declaro las 5 variables que necesitare mas abajo.
let numero3
let numero4
let numero5 
intentos++//actualizamos intentos
if(numero === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
    intentos=6
}
if (numero!=pcRandomNumber && intentos<5){
    numero2=Number(prompt("vuelve a intentarlo"))//te pido otro numero 
    intentos++
}
if (numero2 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
    intentos=6
}
if (numero2!=pcRandomNumber && intentos<5){
    numero3=Number(prompt("vuelve a intentarlo"))
    intentos++
}
if (numero3 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
    intentos=6
}
if (numero3!=pcRandomNumber && intentos<5){
    numero4=Number(prompt("vuelve a intentarlo"))
    intentos++
}
if (numero4 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
    intentos=6
}
if (numero4 !=pcRandomNumber && intentos<5){
    numero5=Number(prompt("Vuelve a intertarlo"))
    intentos++
}
if (numero5 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
    intentos=6
}
if (numero5!=pcRandomNumber && intentos===5){
   alert(`"Has utilitzat massa intents! El número és ${pcRandomNumber}".`)
}
console.log(intentos)

    
   
