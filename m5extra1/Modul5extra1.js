function getRandomInt(x,y) {
    min = Math.ceil(x);
    max = Math.floor(y);
    return Math.floor(Math.random() * (x , y)) + x;
  }
  let N= getRandomInt(1,500)
  console.log(N)
let usuNumber=parseInt(prompt("Escriu un numero aleatori entre el 0 i el 500"))
let i= 0
let difNumbers= N - usuNumber

console.log(difNumbers)
//while(usuNumber!=N){
    //if (difNumbers>=50) {
      // alert("fred fred, el teu numero es mes gran")
      // }
    
     if (difNumbers>=15 || difNumbers<=50){
        alert ("tebi,tebi el teu numero es mes gran")
     
    }
   
    usuNumber=parseInt(prompt("Escriu un numero aleatori entre el 0 i el 500"))
//}
if(usuNumber>N && difNumbers>=50 ){
  alert("fred fred ")
}
usuNumber=parseInt(prompt("Escriu un numero aleatori entre el 0 i el 500"))
if(usuNumber===N){
  alert(`Has encertat. Es el numero ${N}`)
}


