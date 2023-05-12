// // Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// //Porque Let e Const possuem escopo de bloco impossibilitando o acesso fora do mesmo.

// // Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2;
  return x / dois;
}

console.log(somarDois(4), dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

var arr = [1, 2, 3, 4];
var arr2 = [];
arr.forEach((num) => {
  const val = num;
  arr2.push(val);
});
console.log(arr2);
