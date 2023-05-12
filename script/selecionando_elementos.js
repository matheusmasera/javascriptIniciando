// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll("img");
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasImagem = document.querySelectorAll("[src^='img/imagem']");
console.log(apenasImagem);

// Selecione todos os links internos (onde o href começa com #)
const apenasLink = document.querySelectorAll("[href^='#']");
console.log(apenasLink);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector(".animais-descricao");
console.log(animaisDescricao);

const firstH2 = animaisDescricao.querySelector("h2");
console.log(firstH2);

// Selecione o último p do site
const lastP = document.querySelectorAll("p");
console.log(lastP[--lastP.length]);a
