/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */

     const info = [
       {
         question: "What goes in between () in Javascript?",
         answers: ["parameter" , "placeholder" , "number" , "joke"],
         correct choice:0
       }

      {
         question: "What gives you only true or false values",
         answers: ["switch" , "function" , "boolean" , "class"],
         correct choice:2
      }

      {
         question: "What do you inclose a function with?",
         answers: [":" , "{}" , "[]" , "$"],
         correct choice:1
       }
       
     ];

//turn tracker
var turn= 0;

//var for score
var point = 0;

//After page load show question show score
showQuestion();
keepScore();

//showQuestion with current answers
function showQuestion(){
  //set counter
  $('#turns').text(turn + 1);

  //show question in text
  $('#question').text( info[turn].question );

  //provide buttons for answers
  $('#ding').empty();

  for ( let index in info[turn].answers ){
    // make button and set text to answer text 
    var button = $("<button>");
    button.text( info[turn].answer[index] );
  }
}

//keep trck of score convert to jquery
/*function keepScore(){
 if (document.getElementById("answer").value === answers[turn] ){
    gameScore += 5;
  document.getElementById("score").innerHTML =  gameScore;
      
  } else {
    document.getElementById ("score").innerHTML = gameScore;
  }
}
*/

function keepScore(){
  if $('#answers').value === answers[turn] {
    point += 5;
    $('#score').text = point;
  }else{
    $('#score').text = point;
  }
}