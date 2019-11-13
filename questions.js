$(document).ready(function () {
  var questions = [
      {
          title: "What number am I thinking of?",
          choices: ["1", "4", "9", "3"],
          answer: "9"
      },
      {
          title: "How many licks does it take to get to the center of a Tootsie Pop?",
          choices: ["207", "458", "92", "a three"],
          answer: "a three"
      },
      {
          title: "Who likes orange soda?",
          choices: ["Kennan", "Kel", "Arnold", "Doug"],
          answer: "Kel"
      },
      {
          title: "Who lives in a Pineapple under the Sea?",
          choices: ["Spongebob", "curly brackets", "parentheses", "square brackets"],
          answer: "Spongebob"
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
  var quesScores = [];
  input.value = 0;
  

  function setTime() {
    secondsLeft = 60;
     var timerInterval = setInterval(function() {
       secondsLeft--;
       $("#timer").text(secondsLeft + " secs");
       if(secondsLeft === 0 || i === 4) {
         clearInterval(timerInterval);
         $("#A, #B, #C, #D").hide();
           
         }
     }, 1000);
   }

  function empty() {
      //empty your array
      quesScores.length = 0;
      highScores.length = 0;
  }


  function hideQues() {
      $("#high-score, #start").show();
      $("#A, #B, #C, #D, #next").hide();

    };
      
  

  hideQues();

  $("#start").on("click", function () {
    reset();
    setTime();
    $("#timer").show();
  });
  //Questions and Answers
  $("#start").on("click", function () {
      
      $("#question").text(questions[0].title);
      $("#A").text(questions[0].choices[0]);
      $("#B").text(questions[0].choices[1]);
      $("#C").text(questions[0].choices[2]);
      $("#D").text(questions[0].choices[3]);
      $("#start, #high-score").hide();
      $("#high-score").hide();
      $("#A, #B, #C, #D, #next, #save").show();
      console.log(highScores);
      
      
      

  });

  $("#next").on("click", function () {
            
      var inputEl = document.querySelector("#input");
      if (i < questions.length - 1) {
          questions[i++];
          $("#question").text(questions[i].title);
          $("#A").text(questions[i].choices[0]);
          $("#B").text(questions[i].choices[1]);
          $("#C").text(questions[i].choices[2]);
          $("#D").text(questions[i].choices[3]);
          quesScores.push(secondsLeft);
          console.log(secondsLeft);
      
          if (inputEl.value === questions[i - 1].answer) {
              score++;
              $("#score").text("Base Score: " + score);
          }else if (inputEl.value !== questions[i - 1].answer) {
            score + 0;
            $("#score").text("Base Score: " + score);
        };
      } else {           
          scoreCalc();
      }
  });

  function scoreCalc() {
      var userEl = document.querySelector("#user");
      var quesScoresTOT = quesScores[0] + quesScores[1] + quesScores[2] + quesScores[3];
      var initials = userEl.value;
      console.log(initials);
      console.log(highScores.push(initials + " : " + score * quesScoresTOT));
      console.log(highScores);
      hideQues();
      console.log(quesScores);
      console.log(quesScoresTOT);
  }    

  //Input Value Answer
  $("#A").click(function () {
      var text = $(this).text();
      $("#input").val(text);
  });
  $("#B").click(function () {
      var text = $(this).text();
      $("#input").val(text);
  });
  $("#C").click(function () {
      var text = $(this).text();
      $("#input").val(text);
  });
  $("#D").click(function () {
      var text = $(this).text();
      $("#input").val(text);
  });

  function reset(){
    secondsLeft = 0;
    i = 0;
    score = 0;
    $("#timer").hide();
  }


  $("#high-score").click(function () {
      $(".modal").show();
      $("#save").show();
      localStorage.setItem("Scores", JSON.stringify(highScores));

  });


  $(".close").click(function () {
      $(".modal").hide();
  });

  $("#save").click(function () {
      for (var j = 0; j < highScores.length; j++) {
          var highScore = highScores[j];

          var listItem = document.createElement("li");
          listItem.textContent = highScore;

          document.querySelector("#scoreList").appendChild(listItem);

      }
      $(".modal").hide();
      
      empty();
      $("#save").hide();

  });
});
