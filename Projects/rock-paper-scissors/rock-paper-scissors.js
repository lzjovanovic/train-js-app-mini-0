// gesture duel

// jquery

let player = "";
let ai = "";
let result = "";
const gestures = ["paper", "scissor", "stone"];

function duel() {
  player = $(this).attr("value");
  ai = gestures[Math.floor(Math.random() * 3)];
  judge(player, ai);
  $(".player").html("<span>you choose " + player + "</span>");
  $(".ai").html("<span>AI choose " + ai + "</span>");
  $(".result").html("<span>" + result + "</span>");
}
function judge(i, j) {
  if (i == j) {
    result = "Tie";
  } else if (i == gestures[0]) {
    if (j == gestures[1]) {
      result = "you lose";
    } else {
      result = "you win";
    }
  } else if (i == gestures[1]) {
    if (j == gestures[2]) {
      result = "you lose";
    } else {
      result = "you win";
    }
  } else if (i == gestures[2]) {
    if (j == gestures[0]) {
      result = "you lose";
    } else {
      result = "you win";
    }
  }
  return result;
}
$(document).ready(function () {
  $(".button").bind("click", duel);
});
