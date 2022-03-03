let a = prompt("Escriu un any per comprobar si es any de traspas")
if (a % 400==0){
    alert(`L'any ${a} és any de traspas`)
}
if (a % 4 == 0 && a% 100!=0){
    alert(`L'any ${a} és any de traspas`)
}
else{
    alert(`L'any ${a} no és any de traspas`)
}
console.log(a)