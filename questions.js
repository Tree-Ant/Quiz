$(document).ready(function() {
var questions = [
  {
      title: "1.  Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      title: "2.  The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "3.  Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      title: "4.  The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
    title: "Congratulations!! Enter your Initals above to save High Scores!!",
    choices: ["1. alerts", "2. parentheses", "3. alert", "4. parentheses"],
    answer: "----"
},
];

var highScores = [];
var score = 0;
var i = 0;
var secondsLeft = 60;

/*function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    $("#timer").text(secondsLeft);
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      hideQues();  
      $("#question").text("Too Slow Press Start to Play Again");  
      }
  }, 1000);
}*/

function hideQues(){
$("#high-score").show();
$("#start").show();
$("#A").hide();
$("#B").hide();
$("#C").hide();
$("#D").hide();
$("#next").hide();
$(".modal").hide();
score = 0;
i = 0;
input.value = 0;
secondsLeft = 60;
};

hideQues();

//Questions and Answers
$("#start").on("click", function () {
  $("#question").text(questions[0].title);
  $("#A").text(questions[0].choices[0]);
  $("#B").text(questions[0].choices[1]);
  $("#C").text(questions[0].choices[2]);
  $("#D").text(questions[0].choices[3]); 
  $("#start, #high-score").hide(); 
  $("#high-score").hide();
  $("#A, #B, #C, #D, #next").show();  
  setTime();
  $("#scoreList").attr("<li>");
});

$("#next").on("click", function () {
  if(i < questions.length -1){
  questions[i++];
  $("#question").text(questions[i].title);
  $("#A").text(questions[i].choices[0]);
  $("#B").text(questions[i].choices[1]);
  $("#C").text(questions[i].choices[2]);
  $("#D").text(questions[i].choices[3]);
  if(input.value === questions[i-1].answer){
    score++;
    $("#score").text("Score: " + score);
  };
  }else {        
    var initials = input.value;    
    highScores.push(initials + " : " + score )       
    alert("Score: " + score);
    console.log(highScores);
    hideQues();
  }
});

//Input Value Answer
$("#A").click(function() {
  var text = $(this).text();
  $("input").val(text);
});
$("#B").click(function() {
  var text = $(this).text();
  $("input").val(text);
});
$("#C").click(function() {
  var text = $(this).text();
  $("input").val(text);
});
$("#D").click(function() {
  var text = $(this).text();
  $("input").val(text);
});



$("#high-score").click(function() {
  $(".modal").show();
} );
  

  $(".close").click(function() {
    $(".modal").hide();
  });

$("#save").click(function() {
    
    $("#scoreList").text(highScores);
   
   
});
});
