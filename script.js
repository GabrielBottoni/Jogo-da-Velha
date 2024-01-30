const jogadorDaVez = document.querySelector(".jogadorDaVez");

let selecionado;
let jogador = "X";

let posicoes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  jogadorDaVez.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

  document.querySelectorAll(".jogo button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = jogador;
  e.target.removeEventListener("click", newMove);
  selected[index] = jogador;

  setTimeout(() => {
    check();
  }, [100]);

  jogador = jogador === "X" ? "O" : "X";
  jogadorDaVez.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function check() {
  let ultimoMovimento = jogador === "X" ? "O" : "X";

  const itens = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimoMovimento)
    .map((item) => item[1]);

  for (pos of posicoes) {
    if (pos.every((item) => itens.includes(item))) {
      alert("O JOGADOR '" + ultimoMovimento + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}
