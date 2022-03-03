import {Computer} from "./ordenador.js" 
let computer1;
let computer2;

function createFirstComputer () {
  computer1 = createComputers ();
    console.log (computer1)
    }
function createSecondComputer () {
    computer2 = createComputers ();
    console.log (computer2)
}

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
button1.addEventListener("click", () => {createFirstComputer ()})
button2.addEventListener("click", () => {createSecondComputer ()})
const buttonRam = document.getElementById("buttonRam")
buttonRam.addEventListener("click", () => {
   const newRam = document.getElementById("ramComputer1").value
   computer1.Ram = newRam;
} )

function createComputers() {
  let brand = prompt("Ingresa la marca del ordenador.");
  let model = prompt("Ingresa la modelo del ordenador.");
  let processor = prompt("Ingresa el processador del ordenador.");
  let ram = prompt("Ingresa la cantidad memoria RAM del ordenador.");
  let hdd = prompt("Ingresa la capacidad del disco duro del ordenador.");

  const computer = new Computer(brand, model, processor, ram, hdd); 
  return computer
 
}
