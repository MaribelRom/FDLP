console.log("hola")
//if (!Number.isInteger(numUsuario)){
    //alert('Tiene que ser un numero entero, vuelve a introducir el numero')
//}

function getFactorial() {
	let numUsuario = Number(prompt("Escribe el numero que deseas obtener su valor factorial"))

	resultado = 1
	for (var i = 1; i <= numUsuario; i++) {
		resultado =  resultado *i;
	}
	return resultado
	console.log(resultado)
	console.log(numUsuario)
	
}








