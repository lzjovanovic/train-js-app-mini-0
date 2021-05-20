const choices = ["paper", "scissor", "stone"];
let playerScore = 0;
let aiScore = 0;
function gameplay(e) {
  const playerChoice = e.target.value;
  const aiChoice = choices[Math.floor(Math.random() * 3)];
  document.querySelector(".play-player").textContent = `${playerChoice}`;
  document.querySelector(".play-ai").textContent = `${aiChoice}`;
  playRound(playerChoice, aiChoice);
}
function playRound(p1, p2) {
  let result;
  if (p1 == p2) {
    result = "Tie";
    document.querySelector(".result").textContent = `${result}`;
    return;
  }
  if (p1 == choices[0]) {
    if (p2 == choices[1]) {
      result = "you lose";
      aiScore++;
    } else {
      result = "you win";
      playerScore++;
    }
  }
  if (p1 == choices[1]) {
    if (p2 == choices[2]) {
      result = "you lose";
      aiScore++;
    } else {
      result = "you win";
      playerScore++;
    }
  }
  if (p1 == choices[2]) {
    if (p2 == choices[0]) {
      result = "you lose";
      aiScore++;
    } else {
      result = "you win";
      playerScore++;
    }
  }
  if (playerScore == 3 || aiScore == 3) {
    document
      .querySelectorAll(".button")
      .forEach((btn) => (btn.disabled = true));
    if (playerScore == 3)
      document.querySelector(
        ".result-match"
      ).textContent = `GAME OVER ! U Win !`;
    if (aiScore == 3)
      document.querySelector(
        ".result-match"
      ).textContent = `GAME OVER ! AI Win !`;
  }
  document.querySelector(".result").textContent = `${result}`;
  document.querySelector(".score-player").textContent = `${playerScore}`;
  document.querySelector(".score-ai").textContent = `${aiScore}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".button")
    .forEach((btn) => btn.addEventListener("click", gameplay));
});
