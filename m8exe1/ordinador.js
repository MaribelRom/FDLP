//export 
export class Ordinador {
 #marca
 #processador
 #memoriaRam
 #capacitatDiscDur

  constructor(marca, processador, memoriaRam, capacitatdiscdur) {
    this.#marca = marca;
    this.#processador = processador;
    this.#memoriaRam = memoriaRam;
    this.#capacitatDiscDur = capacitatdiscdur;
  }
  get marcaOrdinador() {
    return this.#marca;
  }
  get processadorOrdinador() {
    return this.#processador;
  }
  get memoriaRamOrdinador() {
    return this.#memoriaRam;
  }
  get capacitatDiscDurOrdinador() {
    return this.#capacitatDiscDur;
  }
  set processadorOrdinador(x) {
    this.#processador = x;
  }
  set memoriaRamOrdinador(y) {
    this.#memoriaRam = y;
  }
  set capacitatDiscDurOrdinador(z) {
    this.#capacitatDiscDur = z;
  }
  toString() {
    console.log(
      this.#marca,
      this.#processador,
      this.#memoriaRam,
      this.#capacitatDiscDur
    )
  }
  showMessage(x) {
      alert(`En aquests moments s'està executant: ${x}`)
  }
}



/* function crearOrdinadors(){
    let marca= prompt("Introdueix la marca del ordinador").value
    let processador=prompt("introdueix un procesador").value
    const pc=new Ordinador (marca,processador,memoriaRam,capacitatdiscdur)
    return pc
    
 }
 const maria= crearOrdinadors()
 const acer=crearOrdinadors()
 
 console.log(maria)
 console.log(acer) */

//let pc1= new Ordinador ('acer','combo',40,5)
//let pc2 = new Ordinador ('sony','combo',60,5)
//pc1.toString()
//console.log(acer.marca)