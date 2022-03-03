function mediaNote(){
let note1 = parseInt (prompt("Escriu la primera nota",""))
let note2 = parseInt (prompt("Escriu la segona nota",""))
let note3 = parseInt (prompt("Escriu la tercera nota",""))

resultMedia=(note1+note2+note3)/3
resultMedia=parseInt(resultMedia)

alert(`La mitja de les notes es ${resultMedia}`)
}
 
function showMessage(){
    if (resultMedia < 5){
        alert("No has superat el curs. Has de recuperar.")
    }

    else if (resultMedia >= 5 && resultMedia <= 7){
        alert("Enhorabona! Has aprovat però hauries de seguir practicant.")
    }   

    else if (resultMedia> 7){
        alert("Enhorabona! Has superat el curs! Passa ja al següent nivell!")
    } 
}
