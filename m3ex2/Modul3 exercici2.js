let numero1=0
let numero2=0
let resultado=0

numero1=prompt("Introduzca un numero","");
numero2=prompt("Introduzca un numero","");

function sumarOp(){
      resultado=( parseInt(numero1)+ parseInt(numero2) );
     alert("El resultat de la suma es"+" "+ resultado);
     document.getElementById("sumando").innerHTML=`La suma es:${(parseInt(numero1)+ parseInt(numero2))}`;
     //document.getElementById("sumando").innerHTML=`La suma es: ${resultado}`
}
function restaOp(){
    resultado=(parseInt(numero1)- parseInt(numero2) );
    alert("El resultat de la resta es"+" "+ resultado);
    document.getElementById("restando").innerHTML=`La resta es: ${(parseInt(numero1)- parseInt(numero2))}` ;
   // document.getElementById("restando").innerHTML=`La resta es: ${resultado}`
}
function multipliOp(){
    resultado=(parseInt(numero1) * parseInt(numero2));
    alert("El resultat de la multiplicacio es"+" " +resultado)
   document.getElementById("multiplicando").innerHTML=`La multiplicación es: ${( parseInt(numero1)* parseInt(numero2))}`;
   //document.getElementById("multiplicando").innerHTML=`La multiplicación es: ${resultado3`
}
function divisiOp(){
     resultado=(parseInt(numero1) / parseInt(numero2));
    alert("El resultat de la divisió es"+" "+resultado)
    document.getElementById("dividiendo").innerHTML=`La división es: ${( parseInt(numero1)/ parseInt(numero2))}`;
    //document.getElementById("dividiendo").innerHTML=`La división es: ${resultado}`
}

function calculateOperands(){
    sumarOp()
    restaOp()
    multipliOp()
    divisiOp()
}



