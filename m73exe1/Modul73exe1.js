function getSquare(){
    let sideSquare=Number(prompt("Insertar en cm la medida de cada lado del cuadrado"))
    let areaSquare= sideSquare*sideSquare
    areaSquare=document.getElementById("square").innerText=`El area del cuadrado es ${areaSquare} cm`
}
function getRectangle(){
    let baseRectangle=Number(prompt("Insertar en cm la medida de la base del rectangulo"))
    let heightRectangle=Number(prompt("Insertar en cm la medida de la altura del rectangulo"))
    let areaRectangle= baseRectangle*heightRectangle
    areaRectangle=document.getElementById("rectangle").innerText=`El area del rectángulo es ${areaRectangle} cm`
    }
function getTriangle(){
    let baseTriangle=Number(prompt("Insertar en cm la medida de la base del triángulo"))
    let heightTriangle=Number(prompt("Insertar en cm la medida de la altura del triángulo"))
    let areaTriangle=baseTriangle*heightTriangle/2
    areaTriangle=document.getElementById("triangle").innerText=`El area del triángulo es ${areaTriangle} cm`
    }
function getCircle(){
    let diametroCircle=Number(prompt("Insertar en cm la medida del diametro del círculo"))
    let radioCircle=diametroCircle/2
    console.log(radioCircle)
    let pi=parseFloat(3.1416)
    console.log(pi)
    let areaCircle = parseFloat(pi*radioCircle*radioCircle)
    console.log(areaCircle)
    areaCircle=document.getElementById("circle").innerText=`El area del círculo es ${areaCircle} cm`

}
