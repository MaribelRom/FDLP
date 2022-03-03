function showTriangle(){
    let usuNumber= Number (prompt("Escriu un nro del 1 al 10"))
    let i //incremento
    let j //repeticion
    
    for (i=1; i<=usuNumber;i++){
    
        for (j=0 ;j<i; j++){
          
        
        document.write("*")
        }

document.write("<br>")

    }


}