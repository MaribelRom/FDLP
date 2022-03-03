function showRombo() {
    let usuNumber = Number(prompt("Escriu un numero del 1 al 10"))
    let i      
    let j 

for ( i=1; i<=usuNumber; i++) {
    for (let j=1; j<i; j++) {
        document.write("*");
    }
    document.write("<br>");

}

for (let i=usuNumber; i>0; i--) {
    for (let j=i; j>0; j--) {
        document.write("*");
    }
    document.write("<br>");
}
}
