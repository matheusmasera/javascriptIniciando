// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var x = +"25s";
var y = +"22s";

var xy = x + y;
console.log(xy);

// Somar a string '200' com o número 50 e retornar 250
var i = "200";
var u = 50;

var iu = +i + u;

console.log(iu);

// Incremente o número 5 e retorne o seu valor incrementado
var t = 5;
console.log(++t);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var total = pesoPorDois + unidade;

console.log(total);
