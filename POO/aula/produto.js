

export class Produto{
    // propriedades que vão ser usadas para criar um produto
    nome;
    preco;
    estoque;
    categoria;

    constructor(pNome, pPreco, pEstoque, pCategoria){       
        this.nome = pNome;
        this.preco = pPreco;
        this.estoque = pEstoque;
        this.categoria = pCategoria;
    }

    //Métodos
    verificarEstoque(){
        console.log("Estoque do produto " + this.nome + " é: " + this.estoque);
    }

    //Método - Padrão de nomenclatura Camel Case
    aplicarDesconto(percentual){
        return this.preco - (this.preco * percentual);
    }
}

