
var player1 = 0;
var player2 = 0;
var finalScore1 = 0;
var finalScore2 = 0;


var diceRoll =  function() {
  return (Math.floor(Math.random() * 6 + 1));
};

//line 23 is the attempt to make the game stop and declare a winner
//at 100 points. it's a work in progress :)

var turn = function() {
  var tempScore = 0;
  var diceResult = diceRoll();

  if (diceResult === 1) {
    tempScore = 0;
    player1 = 0;
    player2 = 0;
    alert("Boo! You lost your turn because you rolled a 1.");
    return tempScore;
  } else if (tempScore >= 100) {
    alert("You win, great, blah.");
    return tempScore;
  } else {
    tempScore = tempScore + diceResult;
  } return tempScore;

};

$(document).ready(function() {

  var p1tempScore = 0;
  var p2tempScore = 0;

//the stop buttons don't know that "1" should empty your turn yet.
//they'll still let you add the points from your turn.
//that is a bug for now.

  $(".player1score").text(player1);
  $(".player2score").text(player2);

  $("form#rollDice1").submit(function(event) {
    var tempScore = turn();

    $(".p1tempScore").text(tempScore);
    $("#result").show();

    event.preventDefault();

    $("form#stop1").submit(function(event) {

      finalScore1 += tempScore;
      tempScore = 0;

      $(".player1score").text(finalScore1);
      $("#result").show();

      event.preventDefault();
    });

  });


  $("form#rollDice2").submit(function(event) {
    var tempScore = turn();
    $(".p2tempScore").text(tempScore);

    $("#result").show();

    event.preventDefault();

    $("form#stop2").submit(function(event) {

      finalScore2 += tempScore;
      tempScore = 0;

      $(".player2score").text(finalScore2);
      $("#result").show();

      event.preventDefault();
    });
  });

});
