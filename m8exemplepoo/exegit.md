function myFunction(array, yourFunction){
    if(!Array.isArray(array)){ // caso1 (verificar que el primer parametro sea un array)
   console.log("first parameter is not an array")
    }
    if(typeof(yourFunction)!="function"){ // caso2 (verificar que el segundo parametro sea una función)
        console.log("second parameter is not a function")
    }
    console.log(yourFunction(array))
    
}

function sumFunction(array){
 const newArray=[] 
    for(elemento of array) newArray.push(elemento+1)
 return newArray 
}

myFunction(1,1) // nos da los mensajes del console.log
first parameter is not an array
second parameter is not a function

chequeo de array
myFunction([1,2],1)
second parameter is not a function
 
 caso3 //nuevo array que sea el array original sumandole un 1 a cada elemento
 myFunction([1,2],1){
function sumFunction(array){
 const newArray=[] 
    for(elemento of array) newArray.push(elemento+1)
 return newArray 
}
//chequeo
myFunction([1,2],sumFunction)
undefined
myFunction(9,sumFunction)
 first parameter is not an array

//chequeo 
myFunction(9,"discoteca")
 first parameter is not an array
 second parameter is not a function

 caso 3 Solucion
 myFunction([0,2,4],sumFunction)
(3) [1, 3, 5]

caso 4//nuevo array que sea el array original sumandole un 2 a cada elemento
// creo nueva funcion
function sumDosFunction (array){
    const newArray=[]
        for (elemento of array) newArray.push(elemento+2)
    return newArray
}

myFunction([0,2,4],sumDosFunction)
(3) [2, 4, 6] //nuevo array

caso 5//nuevo array que sea el array original sumandole un 3 a cada elemento
function sumTresFunction (array){
    const newArray=[]
        for (elemento of array) newArray.push(elemento+3)
    return newArray
}
myFunction([0,2,4],sumTresFunction)
(3) [3, 5, 7]

caso 6 //nuevo array que sea el array original cada elemento multiplicado por 2
function multipliFunction (array){
    const newArray=[]
        for (elemento of array) newArray.push(elemento*2)
    return newArray
}
myFunction([0,2,4],multipliFunction)
(3) [0, 4, 8]

caso7 //nuevo array que sea el array original cada elemento restado por 2
