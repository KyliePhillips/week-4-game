$(document).ready(function()





//Variables for wins, losses, and "current score"
{
  var wins = 0;
  var losses = 0;
  var userTotal = 0;

  $("#wins").text(wins);
  $("#losses").text(losses);
//Variables for each crystal.. generates a random number for each

var crys1Value= Math.floor(Math.random()*12+1);
var crys2Value= Math.floor(Math.random()*12+1);
var crys3Value= Math.floor(Math.random()*12+1);
var crys4Value= Math.floor(Math.random()*12+1);


//Displays the currentScore Number
$("#currentScore").text(Random);

// Displays wins
function Youwon(){
  alert("Congrats, You know how to add!");
  wins++;
  $("#wins").text(wins);
  reset();
}
// Displays losses
function Youlost(){
  alert("Sorry, Go back to class!");
  losses++;
  $("#losses").html(losses);
  reset()
}
  // Once Crystals are clicked..

  $(".crys").on("click", function(){
    var pressed = $(this).attr("value");
    console.log(pressed);
    //add value of the Crystal to the userTotal
    if (pressed === "crys1"){
      userTotal += crys1value;
    } else if (pressed === "crys2"){
      userTotal += crys2value;
    } else if (pressed === "crys3"){
      userTotal += crys3value;
    } else if (pressed === "crys4"){
      userTotal += crys4value;
    } else {
      console.log("error");
    }});
