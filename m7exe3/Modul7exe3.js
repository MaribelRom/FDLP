function showNumEvenOrOdd(){
    let num=Number (prompt("Dime un numero y te diré si es par o impar"))
   
isNumEven(num)? showResultNumEven(num): showResultNumOdd(num)
    

}
function isNumEven(num){
    return num % 2 === 0
    }      
function showResultNumEven(num){
    alert (`El número ${num} es par`)
}
function showResultNumOdd(num){
    alert (`El número ${num} es impar`)
}