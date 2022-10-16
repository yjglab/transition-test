const $container = document.querySelector(".container");
const $btn = document.querySelector(".btn");
$container.addEventListener("click", () => {
  $container.classList.add("container-clicked");
});
$btn.addEventListener("click", () => {
  $container.classList.remove("container-clicked");
});
