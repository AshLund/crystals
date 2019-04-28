 

 // $(document).ready(function() 
        
 var computerGuess=Math.floor((Math.random() * 120) + 19)
 $("#computerGuess").append(computerGuess)
 //generates random number and appends it to the dom//



var crystalOne =Math.floor((Math.random() * 12) + 1)
var crystalTwo =Math.floor((Math.random() * 12) + 1)
var crystalThree =Math.floor((Math.random() * 12) + 1)
var crystalFour =Math.floor((Math.random() * 12) + 1)

//randomizes words for reach crystal

var counter=0;
//variable to store user's guesses
var wins=0;
var losses=0;


function reset () {
computerGuess=Math.floor((Math.random() * 120) + 19)
$("#computerGuess").text(computerGuess)
crystalOne =Math.floor((Math.random() * 12) + 1)
crystalTwo =Math.floor((Math.random() * 12) + 1)
crystalThree =Math.floor((Math.random() * 12) + 1)
crystalFour =Math.floor((Math.random() * 12) + 1)
counter=0;
$("#your-score").text(counter)
}

//resets everything to the start of the game


$("#crystal-one").on("click", function() {
counter= counter + crystalOne;
console.log(counter)
$("#your-score").text(counter)
if (counter===computerGuess) {
  wins++
  $("#wins").text("Wins:" + "" + wins)
  reset ();
}   else if (counter > computerGuess) {
  losses++
  $("#losses").text("Losses:" + "" + losses)
  reset ();
}
})

$("#crystal-two").on("click", function() {
counter= counter + crystalTwo;
console.log(counter)
$("#your-score").text(counter)
if (counter===computerGuess) {
  wins++
  $("#wins").text("Wins:" + "" + wins)
}   else if (counter > computerGuess) {
  losses++
  $("#losses").text("Losses:" + "" + losses)
  reset ();
}
})

$("#crystal-three").on("click", function() {
counter= counter + crystalThree;
console.log(counter)
$("#your-score").text(counter)
if (counter===computerGuess) {
  wins++
  $("#wins").text("Wins:" + "" + wins)
}  else if (counter > computerGuess) {
  losses++
  $("#losses").text("Losses:" + "" + losses)
  reset ();
}
})

$("#crystal-four").on("click", function() {
counter= counter + crystalFour;
console.log(counter)
$("#your-score").text(counter)
if (counter===computerGuess) {
  wins++
  $("#wins").text("Wins:" + "" + wins)
}   else if (counter > computerGuess) {
  losses++
  $("#losses").text("Losses:" + "" + losses)
  reset();
}
})


console.log(wins)
//when person clicks on crystal, the random number will display to "your score"
//updates wins or loses if needed and resets game

