let numUsuari = parseInt(prompt("Introduzca un numero para comprobar si es un numero primo"));
let numPrimo = true;


if (numUsuari === 1) {
    alert("El numero 1 no se considera un numero primo");
}


else if (numUsuari > 1) {
    for (let i = 2; i < numUsuari; i++) {
        if (numUsuari % i == 0) {
            numPrimo = false;
            break;
        }
    }

    if (numPrimo) {
      alert(`${numUsuari} es un número primo`);
    } else {
        alert(`${numUsuari} no es un número primo`);
    }
}
else {
    alert("Este número no es un número primo");
}