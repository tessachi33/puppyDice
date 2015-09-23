//global variables
var player1 = 0;
var player2 = 0;

var diceRoll =  function() {
  return (Math.floor(Math.random() * 6 + 1));
};

var turn = function(player) {
  var tempScore = 0;
  var diceResult = diceRoll();

  if (diceResult === 1) {
    tempScore = 0;
    alert("Boo! You lost your turn because you rolled a 1.");
    return tempScore;
  } else {
    tempScore = tempScore + diceResult;
  }

  if (player === player1) {
    player1 += tempScore;
    return player1;
  } else {
    player2 += tempScore;
    return player2;
  }

};

$(document).ready(function() {

  var player1score = player1;
  var player2score = player2;
  var p1tempScore = 0;
  var p2tempScore = 0;

  $(".player1score").text(player1score);
  $(".player2score").text(player2score);

  $("form#rollDice1").submit(function(event) {
    var tempScore = turn(player1);

    $(".p1tempScore").text(tempScore);
    $("#result").show();

    event.preventDefault();
  });


  $("form#rollDice2").submit(function(event) {
    var tempScore = turn(player2);
    $(".p2tempScore").text(tempScore);

    $("#result").show();

    event.preventDefault();
  });

});
