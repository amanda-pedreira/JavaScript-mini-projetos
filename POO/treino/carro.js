export class Carro{
    cor;
    modelo;
    velocidade;

    constructor(pCor, pModelo, pVelocidade){
        this.cor = pCor;
        this.modelo = pModelo;
        this.velocidade = pVelocidade;
    }

    acelerar(...args) {
        if (args.length === 0) {
            // Sem argumentos
            this.velocidade += 10;
        } else if (args.length === 1 && typeof args[0] === "number") {
            // Um argumento
            this.velocidade += args[0];
        } else {
            throw new Error("Número inválido.");
        }
    }
}
