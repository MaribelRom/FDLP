let edat=prompt("Quants anys tens?")
edat=Number(edat)


if (edat >= 1 && edat<= 5){
alert("PREESCOLAR")
}
else if(edat >=6 && edat<=11){
alert("PRIMARIA")
}
else if(edat >=12 &&  edat<=15) {
alert("ESO")
}
else if(edat >=16 && edat<=17 ){
alert ("BATXILLERAT")    
}
else if (edat >=18){
    alert("FP o UNIVERSITAT")
}
else{
alert("Torna a introduir la dada")
}
    
