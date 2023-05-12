function somar() {
  const resultado1 = Number(document.querySelector("#resultado1").value);
  const resultado2 = Number(document.querySelector("#resultado2").value);
 
  const total = resultado1 + resultado2;

  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = total;

  
}
