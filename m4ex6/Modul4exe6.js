function showZodiac(){
let date = Number(document.getElementById("fecha").value)
console.log(date)
let month = Number (document.getElementById("mes").value)
console.log(month)

if ((date >=21 && month ==3) || (date<=19 && month ==4)){
alert("Ets Aries")
document.getElementById("solucion").innerHTML= `Has nascut el ${date} de ${month},ets Aries`
}
if ((date >=20 && month ==4) || (date <=20 && month ==5)){
    alert ("Ets Taure")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month},ets Taure`
}
if ((date >= 21 && month ==5) || (date<=20 && month ==6)){
alert ("Ets Bessons")
document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Bessons`
}
if ((date >=21 && month ==6) || (date <=22 && month ==7)){
alert("Ets Cranc")
document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Cranc`
}
if ((date >=23 && month == 7) || (date <=22 && month ==8)){
    alert("Ets Lleó")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Lleó`
}
if ((date >=23 && month == 8) || (date <=22 && month ==9)){
    alert ("Ets Verge")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Verge`
}
if ((date>=23 && month == 9) || (date <=22 && month == 10)){
    alert ("Ets Balança")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Balança`
}
if ((date>=23 && month == 10) || (date <=21 && month == 11)){
    alert ("Ets Escorpi")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month},ets Escorpi`
}
if ((date >= 22 && month ==11) || (date <=21 && month ==12)){
    alert ("Ets Sagitari")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Sagitari`
}
if ((date >=22 && month ==12) || (date <=19 && month ==1)){
    alert ("Ets Capricorni")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Capricorni`
}
if ((date >=20 && month ==1) || (date <=18 && month ==2)){
    alert ("Ets Acuari")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month},  ets Acuari`
}
if ((date >=19 && month ==2) || (date <=20 && month ==3)){
    alert ("Ets Peixos")
    document.getElementById("solucion").innerHTML= `has nascut el ${date} de ${month}, ets Peixos`
}

}
//document.write (`Si has nascut el ${date} de ${month} ets ${showZodiac()}`)
//if (month ===  && day >=1 && day <=19 ){
    //alert("Ets Aries")

