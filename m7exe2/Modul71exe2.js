function showMitjaClasse(){
    let box = (document.getElementById("notesNum").value)
   
    
    console.log(box)
    //console.log("valueBox")
    let contadorPrompts =0
    let sumaNotas=0
    let notesClass=[]
        while (contadorPrompts<box){
            let noteStudent = prompt("Introdueix la nota.(Les notes han d'estar compreses entre 0 i 10)")
            contadorPrompts++
            notesClass.push(parseInt(noteStudent))
        }
        console.log(notesClass)

        for( i=0; i<notesClass.length;i++){
            sumaNotas += notesClass[i]
        }   
                  


    resultMedia=sumaNotas/contadorPrompts


  console.log(sumaNotas)  

alert ("La nota mitja de la clase es "+ resultMedia)

if (resultMedia < 5){
    document.write ("La nota mitjana de la classe està suspesa. Els alumnes haurien de preguntar els seus dubtes i treballar més")
}
else if (resultMedia >=5 && resultMedia <7){
    document.write ("La nota mitjana de la classe és bona, però els alumnes hauríen de millorar el treball personal.")
}
else{
    document.write ("Enhorabona! La nota mitjana de la classe es correspon amb l'esforç realitzat.")
}
}