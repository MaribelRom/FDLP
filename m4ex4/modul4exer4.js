let mes=prompt("Indica el mes","escribe un mes [1-12]");
mes=Number(mes)
let nameMes = "enero"
 
switch (mes){

  case 1: 
  mes="enero"

  alert (`"El mes de ${mes} tiene 31 dias"`)

 break;

    case 2:
    mes="febrero";
    alert(`"El mes de ${mes} tiene 28 días`)
    break;

    case 3:
    mes="marzo";
    alert(`"El mes de ${mes} tiene 31 días"` )  
    break;

    case 4:
    mes="abril";
    alert(`"El mes de ${mes} tiene 30 días"` )  
    break; 

    case 5:
    mes="mayo";
    alert(`"El mes de ${mes} tiene 31 días"` )  
    break;

    case 6:
    mes="junio";
    alert(`"El mes de ${mes} tiene 30 días"` )  
    break;   

    case 7:
    mes="julio";
    alert(`"El mes de ${mes} tiene 31 días"` )  
    break;

    case 8:
    mes="agosto";
    alert(`"El mes de ${mes} tiene 31 días"` )  
    break;

    case 9:
    mes="septiembre"
    alert(`"El mes de ${mes} tiene 30 días"` )  
    break;

    case 10:
    mes="octubre"
    alert(`"El mes de ${mes} tiene 31 días"` )  
    break;  
    
    case 11:
    mes="noviembre"
    alert(`"El mes de ${mes} tiene 30 días`)
    break;

    case 12:
    mes="diciembre"
    alert(`"El mes de ${mes} tiene 31 días"` )  
    break;
} 



