import { Carro } from "./Carro.js";

const objeto1 = new Carro("Preto", "Golf", 200);
console.log(objeto1.cor);
console.log(objeto1.modelo);
console.log(objeto1.velocidade);

const objeto2 = new Carro("Cinza", "Celta", 250);
console.log(objeto2.cor);
console.log(objeto2.modelo);
console.log(objeto2.velocidade);

// console.log(objeto1);
// console.log(objeto2);

const objeto3 = new Carro("Vermelho", "Prisma", 0);
console.log(objeto3.velocidade); 
objeto3.acelerar();
console.log(objeto3.velocidade); 
