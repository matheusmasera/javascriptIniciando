// // // // // Retorne no console todas as imagens do site
// const todasImagens = document.querySelectorAll("img");
// console.log(todasImagens);

// // // // // Retorne no console apenas as imagens que começaram com a palavra imagem
// const apenasImagem = document.querySelectorAll("[src^='img/imagem']");
// console.log(apenasImagem);

// // // // // Selecione todos os links internos (onde o href começa com #)
// const apenasLink = document.querySelectorAll("[href^='#']");
// console.log(apenasLink);

// // // // // Selecione o primeiro h2 dentro de .animais-descricao
// const animaisDescricao = document.querySelector(".animais-descricao");
// console.log(animaisDescricao);

// const firstH2 = animaisDescricao.querySelector("h2");
// console.log(firstH2);

// // // // // Selecione o último p do site
// const lastP = document.querySelectorAll("p");
// console.log(lastP[--lastP.length]);

// // // // criando arrow function
// // // // Mostre no console cada parágrado do site
// const paragrafos = document.querySelectorAll("p");

// // // // Mostre o texto dos parágrafos no console
// paragrafos.forEach((item) => console.log(item.innerText));

// // // // Como corrigir os erros abaixo:
// const imgs = document.querySelector("img");
// console.log(imgs.getAttribute("src"));

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// // // Adicione a classe ativo a todos os itens do menu

// const menu = document.querySelectorAll(".menu ul li");
// menu.forEach((item) => {
//   console.log(item.classList.add("ativo"));
// });

// // // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// menu.forEach((item) => {
//   console.log(item.classList.remove("ativo"));
// });

// menu[0].classList.add("ativo");

// // // Verifique se as imagens possuem o atributo alt

// const imagens = document.querySelectorAll("img");

// imagens.forEach((imagem) => {
//   console.log(imagem.hasAttribute("alt"));
// });

// // // // Modifique o href do link externo no menu

// const linkExterno = document.querySelector("a[href^='http']");

// linkExterno.setAttribute("href", "#teste.com.br");
// console.log(linkExterno);

// // // Verifique a distância da primeira imagem
// // // em relação ao topo da página
// const primeiraImg = document.querySelector("img");
// console.log(primeiraImg.offsetTop);

// // // // Retorne a soma da largura de todas as imagens
// function somaImagens() {
//   const todasImagens = document.querySelectorAll("img");
//   let soma = 0;
//   todasImagens.forEach((img) => {
//     soma += img.offsetWidth;
//   });
//   console.log(soma);
// }

// window.onload = function () {
//   somaImagens();
// };

// // // Verifique se os links da página possuem
// // // o mínimo recomendado para telas utilizadas
// // // com o dedo. (48px/48px de acordo com o google)

// const links = document.querySelectorAll("a");

// links.forEach((links) => {
//   const linksWidth = links.offsetWidth;
//   const linksHeigth = links.offsetHeight;

//   console.log(linksHeigth);

//   if (linksWidth >= 48 && linksHeigth >= 48) {
//     console.log(links, "Possui Acessibilidade");
//   } else {
//     console.log(links, "Não possui Acessibilidade");
//   }
// });

// // // Se o browser for menor que 720px,
// // // adicione a classe menu-mobile ao menu

// const janelaUsuario = window.matchMedia("(max-width: 720px)").matches;
// if (janelaUsuario) {
//   const menu = document.querySelector(".menu");
//   console.log(menu.classList.add("teste"));
// }

// Selecionar img1

// function clicouImg(e) {
//   console.log(e);
// }

// const imagemFirst = document.querySelector("img");
// console.log(imagemFirst);
// imagemFirst.addEventListener("focus", clicouImg);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll("a");
console.log(linksInternos);

function addClass(e) {
  linksInternos.forEach((item) => {
    item.classList.remove("ativo");
  });
  e.preventDefault();
  e.currentTarget.classList.add("ativo");
}

linksInternos.forEach((links) => {
  links.addEventListener("click", addClass);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");
console.log(todosElementos);

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", (e) => e.currentTarget.remove());
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function keyPress(event) {
  if (event.key === "t") {
    const corpo = document.querySelector("body");
    console.log(corpo);
    corpo.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", keyPress);
