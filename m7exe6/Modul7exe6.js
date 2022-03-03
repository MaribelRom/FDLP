function multiplicateTable(){
    let userNumber=parseInt(prompt("Write a number from 0 to 10, then the multiplication table of the chosen number will appear"))
    let multiplierNumber=0
let resultMulti=multiplierNumber*userNumber
for ( multiplierNumber = 0 ; multiplierNumber <=10 ; multiplierNumber++ ) {
    let resultMulti= userNumber * multiplierNumber
    document.write (`${userNumber} x ${multiplierNumber} = ${resultMulti} </br>`) 
}
}