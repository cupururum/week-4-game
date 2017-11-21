// problem webpage does not respond to the user
// solution : add jQuery to improve user experience
var wins = 0;
var losses = 0;
var $winsP = $("#winsP");
var $lossesP = $("#lossesP");
var randomNumberP = $("#randomNumberDisplay");
var yourNumberP = $("#guessNumberDisplay")
var $beginGame = $("#beginGame");


//when user clicks button with crystal
  //the button should add the number in the "your number"

var randomNumber;
var randomNumberCrystalsValue;
var crystalsValue;
var sumOfValues = 0;

function randomNumbersCall() {

  sumOfValues = 0;

  randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(randomNumber);
  randomNumberP.text(randomNumber);
  yourNumberP.text(sumOfValues);

// when game begins for each cristal we assign a random value

  $(".crystals").each(function(){
    randomNumberCrystalsValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $(this).attr("value", randomNumberCrystalsValue);
    console.log("randomNumberCrystalsValue: " + randomNumberCrystalsValue)
  });

};
//the game gives random number that should appear in the "random number"
randomNumbersCall();

    $(".crystals").on("click", function(){
      crystalsValue = parseInt(this.value);
      console.log(crystalsValue);
      sumOfValues = sumOfValues + crystalsValue;
      console.log("sumOfValues: " + sumOfValues);
      yourNumberP.text(sumOfValues);
      //check every time if the user riched the random number
      if (sumOfValues === randomNumber) {
           wins++;
           $winsP.text("Wins: " + wins);
           randomNumbersCall();

      } else if (sumOfValues > randomNumber) {
           losses++;
           $lossesP.text("Losses: " + losses);
           randomNumbersCall();

      } else {
        //ignore
      }
    });




// //when user presses the button "begin game"
//   $beginGame.on("click", function(){
//
//
//   });
// };








//when user wins the game
  //wins++

//when user losses the game
   //losses++
