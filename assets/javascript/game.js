// problem webpage does not respond to the user
// solution : add jQuery to improve user experience
var randomNumber;
var crystalsValue;
var sumOfValues = 0;
var randomNumberCrystalsValue;
var wins = 0;
var losses = 0;
var $winsP = $("#winsP");
var $lossesP = $("#lossesP");
var randomNumberP = $("#randomNumberDisplay");
var yourNumberP = $("#guessNumberDisplay")
var $beginGame = $("#beginGame");

function randomNumberCall() {
  //the game gives random number that should appear in the "random number"
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomNumber);
    randomNumberP.text(randomNumber);
    yourNumberP.text(sumOfValues);
}

// when game begins for each cristal we assign a random value
function randomNumberCrystals() {
    $(".crystals").each(function(){
      randomNumberCrystalsValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      $(this).attr("value", randomNumberCrystalsValue);
      console.log("randomNumberCrystalsValue: " + randomNumberCrystalsValue)
    });
};

//when user clicks button with crystal
  //the button should add the number in the "your number"
function addValueFromTheCrystal(){

    $(".crystals").on("click", function(){
      crystalsValue = this.value;
      console.log(crystalsValue);
      crystalsValue = parseInt(crystalsValue);
      sumOfValues = sumOfValues + crystalsValue;
      console.log("sumOfValues: " + sumOfValues);
      yourNumberP.text(sumOfValues);

    });
};

// function gameOver(){
//   if (sumOfValues === randomNumber) {
//        wins++;
//        $winsP.text("Wins: " + wins);
//        beginGame();
//   } else if (sumOfValues > randomNumber) {
//        losses++;
//        $lossesP.text("Losses: " + losses);
//        beginGame();
//   } else {
//     //ignore
//   }
// };
//
// gameOver();



//when user presses the button "begin game"
function beginGame() {
  $beginGame.on("click", function(){
    console.log(sumOfValues);
    sumOfValues = 0;
    $beginGame.text("Play Again");
    randomNumberCall();
    randomNumberCrystals();
    addValueFromTheCrystal();
  });
};

beginGame()





//when user wins the game
  //wins++

//when user losses the game
   //losses++
