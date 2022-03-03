function showTriangle(){
    let usuNumber= Number (prompt("Escriu un nro del 1 al 10"))
    let i //incremento
    let j //repeticion

    for ( i=usuNumber; i>0; i--) {
        for (let j=i; j>0; j--) {
            document.write("*");
        }
        document.write("<br>");
    }
}

