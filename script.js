/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */

     const info = [
       {
         question: "What goes in between () in Javascript?",
         answers: ["parameter" , "placeholder" , "number" , "joke"],
         correct_choice:0
       },

      {
         question: "What gives you only true or false values",
         answers: ["switch" , "function" , "boolean" , "class"],
         correct_choice:2
      },

      {
         question: "What goes after function()?",
         answers: [";" , "{}" , "[]" , "$"],
         correct_choice:1
       }
       
     ];

//turn tracker
var turn= 0;

//var for score
var point = 0;

//After page load show question and show score
console.log("yup");
showQuestion();


//showQuestion with current answers
console.log("hello");
function showQuestion() {
  //set counter
  $('#turns').text(turn + 1);

  //show question in text
  $('#question').text( info[turn].question );

  //provide buttons for answers
  $('#answers').empty();

  

  for ( let index in info[turn].answers ){
    // make button and set text to answer text 
    let button = $("<button>");
    button.text( info[turn].answers[index] );
    
      if(index == info[turn].correct_choice){
        console.log(index);
          button.click(keepScore); 
      };
    $('#answers').append(button);
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
  
  //do I need a jquery var to check answers and add score?
  //does it make sense with #answers in so many places...is that the right one to add?
  // var myAnswer = $("#answers").val();
  //if ('#ding') {
   // myAnswer === info[turn].correct_choice;
    point += 5;
    console.log(point);
    $('#score').text(point);
    turn ++ 
    if( turn < info.length){
         showQuestion();
    }else{
      $("#ding").text("All Done!"); 
    }

   

 // }else{
   // $('#score').text = point;
 // }
}