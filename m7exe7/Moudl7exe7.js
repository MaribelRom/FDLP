function showSquare(){

let usuNumber= Number(prompt("Introdueix un numero del 1 al 10"))
let usSymbol=prompt("Escull un d'aquests simbols: * + & $ %")
let symbolCounter=0
let rowCounter=0
function printRow(){
    for(symbolCounter=0; symbolCounter<usuNumber ;symbolCounter++){
    
        document.write(`${usSymbol}`)
        
        console.log(symbolCounter)
       
    }
}
while(rowCounter<usuNumber){
    //haces que se imprima la row
    printRow()
    document.write("</br>")
   rowCounter++
}
}