let a=prompt("escriba un numero")
a=Number(a)

let resultadoDoble=(a*2)
let resultadoTriple=(a*3)

function calculaOperands(){
resultadoDoble=Number(resultadoDoble)
resultadoTriple=Number(resultadoTriple)

window.alert(resultadoDoble)
window.alert(resultadoTriple)

document.getElementById("resultado doble").innerHTML=(`"El doble de ${a} es ${resultadoDoble}."`)
document.getElementById("resultado triple").innerHTML=(`"El triple de ${a} es ${resultadoTriple}."`)
}










/*let a=prompt("escriu un numero")
let a=Number(a)
function aDoble(){
 let resultDoble=a*2
alert`("El doble de " + ${a} + es + ${resultDoble})`}

function aTriple() {
    let resultTriple=a*3

alert`("El triple de " + ${a} + es + ${resultTriple})`}*/