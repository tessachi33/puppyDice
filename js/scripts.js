//global variables
var player1 = 0;
var player2 = 0;

var diceRoll =  function() {
  return (Math.floor(Math.random() * 6 + 1));
};

var turn = function(player) {
  var tempScore = 0;

  diceRoll();
  if (diceRoll === 1) {
    tempScore = 0;
    playerTurn = false;
  } else {
    tempScore = tempScore + diceRoll;
  }

  if (player === player1) {
    player1 += tempScore;
  } else {
    player2 += tempScore;
  }
};

$(document).ready(function() {

  var player1score = player1;
  var player2score = player2;

  $(".player1score").text(player1score);
  $(".player2score").text(player2score);

  $("form#rollDice").submit(function(event) {
    var diceResult = diceRoll();
    $(".diceResult").text(diceResult);

    $("#result").show();
    event.preventDefault();

  });
});






// var player1 = { tempScore: 0, totalScore: 0 };

//
