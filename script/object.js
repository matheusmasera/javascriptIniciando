// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
  nome: "Matheus",
  sobrenome: "Masera",
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
const carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  late(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    }
    return "Nada";
  },
};

console.log(cachorro);
