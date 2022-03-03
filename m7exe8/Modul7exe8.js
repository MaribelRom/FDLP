

function converseFarenheit() {
    let centiDegrees= Number(prompt("Introduce the temparature in Centigrade"))
    farehDegrees=(centiDegrees*9/5)+32
    console.log(farehDegrees)
    document.write(`(${centiDegrees} x 9 / 5) + 32= ${farehDegrees}`)
}
