const box = document.querySelector(".box");

box.addEventListener("mouseover", (ev) => {
  ev.target.style.backgroundColor = "white";
  ev.target.style.color = "blue";
});

box.addEventListener("mouseout", (ev) => {
  ev.target.style.backgroundColor = "blue";
  ev.target.style.color = "white";
});
