function lado(lado, base) {
  console.log(lado * base);
}
lado(2, 5);

function pi(pi) {
  return pi;
}

console.log(pi(3.14));

// Crie uma função para verificar se um valor é Truthy

function isTruthy(x) {
  // if (x) {
  //   console.log(`é verdadeiro porque o valor "${typeof x}, ${x}" é truthy`);
  // } else {
  //   console.log(`é falso porque o valor "${x}" não é truthy`);
  // }
  return !!x;
}
console.log(isTruthy(23));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimeter(perimetro) {
  const soma = perimetro * 4;
  console.log(soma);
}

perimeter(5);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `o seu nome é ${nome + " " + sobrenome}`;
}

console.log(nomeCompleto("matheus", "masera"));

// Crie uma função que verifica se um número é par

function ePar(numero) {
  if (numero % 2 != 0) {
    console.log(`o número ${numero} não é par`);
  } else {
    console.log(`o número ${numero} é par`);
  }
}

ePar(90);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  console.log(typeof dado);
}

tipoDado(23);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", () => {
  console.log(nomeCompleto("juscelino", "gabriel"));
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
