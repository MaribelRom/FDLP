//let name1='maribel'
//let surname='roman'
//let age='49'


let name1=prompt('nom',"")
let surname=prompt("cognom","")
let age=prompt("edat","")
alert (`${name1 +' '+surname +' '+age}`)
console.log(`${name1 +' '+surname +' '+age}`)

function pruebaMaribel() {
 
document.getElementById("nomUs").innerHTML=`'El nombre del usuario es' ${name1}`
document.getElementById("cognomUs").innerHTML=`'El apellido del usuario es' ${surname}`
document.getElementById("edatUs").innerHTML=`'La edad del usuario es' ${age}`
}



function verMayorEdad() {
age=Number(age)
if (age>17){
alert(`${name1}  ${surname} "eres mayor de edad"`);
} 

else {
alert(`${name1}  ${surname} "eres menor de edad"`);
}
}
