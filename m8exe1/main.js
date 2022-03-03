import {Ordinador} from "./ordinador.js"
function crearOrdinadors(){
   let marca= prompt("Introdueix la marca del ordinador").value
   let processador=prompt("introdueix un procesador").value
   const pc=new Ordinador (marca,processador,memoriaRam,capacitatdiscdur)
   return pc
   
}
const maria= crearOrdinadors()
const acer=crearOrdinadors()

console.log(maria)
console.log(acer)
debugger