function showPromptByNumber(){

 let box=document.getElementById("wordsNum")
 let valueBox=Number(box.value)

console.log("box",box)
console.log("valueBox",valueBox)
//ensenyar tants prompts com valueBox
let contadorPrompts=0
let listWords=[]
    while (contadorPrompts<valueBox){
      let word=prompt("Introdueix una paraula")
      contadorPrompts++  
      listWords.push(word) 
    }
  
    document.getElementById("writeWords").innerHTML=`${listWords}`
}
   
//he creado una variable listWords para crear el array. Luego he nombrado una nueva variable word para poner la palabra que da el prompt
//entonces dentro del while he insertado la opción push para añadir elementos a mi array. 
//para acabar escribiendo en mi  html las palabras de mi array con getelementbyid.
/*if (contadorPrompts<valueBox){
        prompt("Introdueix una paraula")
        contadorPrompts++
    }
    if (contadorPrompts<valueBox){
        prompt("Introdueix una paraula")
        contadorPrompts++     
    }*/








/*



function buclePalabras(){
let palabras=[]
palabras.push(prompt("escribe una palabra"));
alert(palabras[0])
palabras=palabras.length
//}
//function getNumber(){
  
   let counter=document.getElementById("number")[0].value;
   for(;counter=palabras.length;){
       prompt("Escribe una palabra","")
   }
}

   /* var cont;
    for (index = 0; i <= 2; i++) {
        var x = prompt("Ingresa tu nombre:", "");
        nombre[i] = x;
    }
    for (int i = 0; i <= 2; i++) {
        cont += nombres[i] + " ";
    }*/
  

