// gesture duel

const choices = ["paper", "scissor", "stone"];

function play_round(e) {
  const player = e.target.value;
  const ai = choices[Math.floor(Math.random() * 3)];
  document.querySelector(
    ".player"
  ).innerHTML = `<span>you choose  ${player} </span>`;
  document.querySelector(".ai").innerHTML = `<span>AI choose ${ai} </span>`;
  judge(player, ai);
}
function judge(i, j) {
  let result;
  if (i == j) {
    result = "Tie";
  } else if (i == choices[0]) {
    if (j == choices[1]) {
      result = "you lose";
    } else {
      result = "you win";
    }
  } else if (i == choices[1]) {
    if (j == choices[2]) {
      result = "you lose";
    } else {
      result = "you win";
    }
  } else if (i == choices[2]) {
    if (j == choices[0]) {
      result = "you lose";
    } else {
      result = "you win";
    }
  }
  document.querySelector(".result").innerHTML = `<span> ${result} </span>`;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".button")
    .forEach((btn) => btn.addEventListener("click", play_round));
});
