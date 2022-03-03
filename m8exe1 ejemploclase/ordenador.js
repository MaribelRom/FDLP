export class Computer {

    #brand 
    #model
    #processor
    #ram
    #hdd

  constructor(brand, model, processor, ram, hdd) {
    this.#brand = brand;
    this.#model = model;
    this.#processor = processor;
    this.#ram = ram;
    this.#hdd = hdd;
  }

  getBrand() {
    return this.#brand;
  }

  getModel() {
    return this.#model;
  }

  getProcessor() {
    return this.#processor;
  }

  getRam() {
    return this.#ram;
  }

  getHdd() {
    return this.#hdd;
  }

  set Processor(processor) {
    this.#processor = processor;
  }

  set Ram(ram) {
    this.#ram = ram;
  }

  set Hdd(hdd) {
    this.#hdd = hdd;
  }

  mensaje(aplication) {
    alert(`En estos momentos se estÃ¡ ejecutando: + ${aplication}`);
  }

  toString() {
    console.log(this.#brand, this.#model, this.#processor, this.#ram, this.#hdd);
  }
}