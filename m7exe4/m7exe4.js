function getNegative(){
let primerNum=document.getElementById("primerNum").value
let segundoNum=document.getElementById("segundoNum").value
primerNum=Number(primerNum)
segundoNum=Number(segundoNum)
console.log(primerNum)
console.log(segundoNum)
    if(primerNum<0 && segundoNum>0){
        alert("Uno de los dos números es negativo")
    }
    if(primerNum>=0 && segundoNum<0){
        alert("Uno de los dos números es negativo") 
    }
    
   
        
   
}