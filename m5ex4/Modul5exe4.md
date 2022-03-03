Has de modificar el programa anterior per afegir una nova funcionalitat: establir un número màxim de 5 intents.

Si l’usuari encerta el número escollit pel programa abans d'aquests 5 intents, el programa mostra el següent missatge per pantalla: “Enhorabona, el número és X i has necessitat Y intents per encertar-lo”.

Si no encerta el número abans de 5 intents, el programa mostra per pentalla: "Has utilitzat massa intents! El número és X ".

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="Modul5exe4.js"></script>
</head>
<body>
    
</body>
</html>
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
}
if (numero!=pcRandomNumber && intentos<5){
    numero2 = Number(prompt("vuelve a intentarlo"))//te pido otro numero 
    intentos++
}
if (numero2 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
}
if (numero2!=pcRandomNumber && intentos<5){
    numero3=Number(prompt("vuelve a intentarlo"))
    intentos++
}
if (numero3 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
}
if (numero3!=pcRandomNumber && intentos<5){
    numero4=Number(prompt("vuelve a intentarlo"))
    intentos++
}
if (numero4 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
}
if (numero4 !=pcRandomNumber && intentos<5){
    numero5=Number(prompt("Vuelve a intertarlo"))
    intentos++
}
if (numero5 === pcRandomNumber){
    alert (`Enhorabona, el numero es ${pcRandomNumber}i has necesitat ${intentos} intents per acertar-lo`)
}
if (numero5!=pcRandomNumber && intentos===5){
   alert(`"Has utilitzat massa intents! El número és ${pcRandomNumber}".`)
}
console.log(intentos)