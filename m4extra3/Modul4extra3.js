let namePlayer=prompt("Tell me your name, and start to play")
console.log(namePlayer)
document.write(`Welcome ${namePlayer}`)

function playGame(){
   
let numRandom = Math.floor (Math.random() *(4-1)+1)
console.log(numRandom)
let numUsuario = Number(prompt("Write 1 if you choose STONE, Write 2 if you choose PAPER, Write 3 if you choose SCISSORS."))

if (numUsuario===1 && numRandom===3){
    alert(`${namePlayer} choose STONE,I choose SCISSORS.`)
    alert(`${namePlayer} you have won🎉`)
}
if(numUsuario===2 && numRandom===3){
    alert(`${namePlayer} choose PAPER ,I choose SCISSORS.`)
    alert (`${namePlayer} , you have lost 😢`)
}
if(numUsuario===3 && numRandom===3){
    alert("oops, we have both chosen SCISSORS, try it again🙈")
}
if (numUsuario ===1 && numRandom===1){
    alert("oops, we have both chosen STONE, try it again🙈")
}
if (numUsuario===2 && numRandom===1){
    alert(`${namePlayer} choose PAPER,I choose STONE.`)
    alert(`${namePlayer}, you have won🎉`)
}
if (numUsuario ===3 && numRandom===1){
    alert(`${namePlayer} choose SCISSORS,I choose STONE.`)
    alert (`${namePlayer} , you have lost 😢`)
}
if( numUsuario===1 && numRandom===2){
    alert(`${namePlayer} choose STONE,I choose PAPER.`)
    alert (`${namePlayer} , you have lost 😢`)
}
if (numUsuario===2 && numRandom===2){
    alert("oops, we have both chosen PAPER, try it again 🙈")
}
if(numUsuario===3 && numRandom===2){
   alert(`${namePlayer} choose SCISSORS,I choose PAPER.`)
   alert(`${namePlayer}, you have won🎉`)
}
}


