import { Produto } from "./produto.js";

// crie uma nova variavel que possua um novo produto usando a classe Produto, com as mesmas propriedades
const produto1 = new Produto("Guitarra", 1500.00, 10 , "Instrumentos Musicais");
console.log(produto1.nome);
console.log(produto1.preco);
console.log(produto1.estoque);
console.log(produto1.categoria);

produto1.verificarEstoque();
console.log(produto1.aplicarDesconto(0.1));

const produto2 = new Produto("Piano", 2000.00, 3 , "Instrumentos Musicais");
console.log(produto2.nome);
console.log(produto2.preco);
console.log(produto2.estoque);
console.log(produto2.categoria);

produto2.verificarEstoque();
console.log(produto2.aplicarDesconto(0.2));
