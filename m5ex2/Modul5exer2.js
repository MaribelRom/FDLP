function getSumArray(){
    
let value1 = parseInt(prompt("escribe el primer numero"))
let value2 = parseInt(prompt("escribe el segundo numero"))

let userNumberList = []

userNumberList.push(value1,value2)
userNumberList.sort(function(a,b){return a - b})

let resultUserNumberList = []
let sumNumbers = Number("") 
let resultScreen = ""
for(let i = userNumberList[0]; i < userNumberList[1]; i++){ 
 resultUserNumberList.push(i)  
 sumNumbers += i
resultScreen += `${i} + `
if (i === userNumberList[1] - 1 ) { 
    resultScreen += `${i + 1}`
    sumNumbers += i + 1
}
}
document.getElementById("demo").innerHTML=`El resultat de la suma de ${resultScreen} = ${sumNumbers}`
//document.getElementById("demo").innerHTML=`El resultat = ${resultScreen} = ${sumNumbers}`


}   