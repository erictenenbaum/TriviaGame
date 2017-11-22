var questionDOM = $("#question");
var answerOneDOM = $("#answerOne");
var answerTwoDOM = $("#answerTwo");
var answerThreeDOM = $("#answerThree");
var answerFourDOM = $("#answerFour");
var countDownDOM = $("#counter");
var startButtonDOM = $("#startButton");
var clear;
var clearCountdown;
var correctAnswerCounter;
var incorrectAnswerCounter;
var unansweredCounter;

var questionBank = [
{
	question: "Who was the first president of the United States?",
	answerChoices: ["George Washington", "Bill Clinton", "Abe Lincoln", "Jim Carey"],
	correctAnswerIndex: "George Washington",
	giffy: "https://giphy.com/embed/VuIhRKfp0B3iw",
},
{
	question: "Who won the 2017 World Series?",
	answerChoices: ["Dodgers", "Yankees", "Astros", "Indians"],
	correctAnswerIndex: "Astros",
	giffy: "https://giphy.com/embed/3ohBVmZV5qUIXqRA3u",
},
{
	question: "What year did the Angels win the World Series?",
	answerChoices: ["2000", "2001", "2002", "2003"],
	correctAnswerIndex: "2002",
	giffy: "https://giphy.com/embed/ZZKQ1RBxjq7AI", 
},
{
	question: "Which direction does the sun rise?",
	answerChoices: ["North", "East", "South", "West"],
	correctAnswerIndex: "East",
	giffy: "https://giphy.com/embed/FgJ6FbfJGwztK", 
},
{
	question: "What year did the Diamondbacks win the World Series?",
	answerChoices: ["2000", "2001", "2002", "2003"],
	correctAnswerIndex: "2001",
	giffy: "https://giphy.com/embed/q1ORsQkVoVFfy", 
},
{
	question: "What was the last year the Lakers won the NBA Finals?",
	answerChoices: ["2007", "2008", "2009", "2010"],
	correctAnswerIndex: "2010",
	giffy: "https://giphy.com/embed/URYPJ7fIPZz1K", 
},
{
	question: "What is the capital of Texas?",
	answerChoices: ["Houston", "Dallas", "San Antonio", "Austin"],
	correctAnswerIndex: "Austin",
	giffy: "https://giphy.com/embed/l378u1qzSChGdbkpG", 
},
{
	question: "What is the highest single-game point total of Kobe's Career?",
	answerChoices: ["60", "69", "81", "95"],
	correctAnswerIndex: "81",
	giffy: "https://giphy.com/embed/q5hVhkKwKHDuo" 
},
{
	question: "How many championships have the Lakers won?",
	answerChoices: ["15", "16", "17", "18"],
	correctAnswerIndex: "16",
	giffy: "https://giphy.com/embed/hG6zC3KaKjiUw"
}];

var trivia = {	

		j: 0,
		n: 10,

		initializeGame: function() {			
			trivia.j = 0;
			correctAnswerCounter = 0;
			incorrectAnswerCounter = 0;
			unansweredCounter = 0;
			countDownDOM.empty();
			startButtonDOM.hide();
			clearInterval(clear);
			clearInterval(clearCountdown);

			trivia.questionOne(questionBank[trivia.j].question, 
				questionBank[trivia.j].answerChoices[0], 
				questionBank[trivia.j].answerChoices[1],
				questionBank[trivia.j].answerChoices[2], 
				questionBank[trivia.j].answerChoices[3]
				);

			trivia.timer();
			trivia.resetCountDown();							
		},
		nextQuestion: function() {

			if (trivia.j < questionBank.length - 1) {				
				console.log("continue");			
			}
			else {
				trivia.finalResults();
				startButtonDOM.show();
			}
			clearInterval(clear);
			clearInterval(clearCountdown);
			
			trivia.j++;
			trivia.questionOne(questionBank[trivia.j].question, 
					questionBank[trivia.j].answerChoices[0], 
					questionBank[trivia.j].answerChoices[1],
					questionBank[trivia.j].answerChoices[2], 
					questionBank[trivia.j].answerChoices[3],
				);
			trivia.timer();
			trivia.resetCountDown();	
						
		},
		timer: function() {

			clear = setTimeout(function() {

				if(trivia.j < questionBank.length -1) {	
					++unansweredCounter;	
					trivia.displayPage("Out of time!" + "The correct answer was " + questionBank[trivia.j].correctAnswerIndex);						
				}
				else {
					trivia.finalResults();
				}

				}, 10000);
		},
		questionOne: function (q, a, b, c, d) {
			$("#showGif").empty()
			var userGuess;
			questionDOM.html(q)
			answerOneDOM.html(a).attr('data-value', a);
			answerTwoDOM.html(b).attr('data-value', b);
			answerThreeDOM.html(c).attr('data-value', c);
			answerFourDOM.html(d).attr('data-value', d);			
		},
		displayPage: function(e) {			
			clearInterval(clearCountdown);
			clearInterval(clear);

			countDownDOM.html(e);			
			
			var iframe = $("<iframe>").attr("src", questionBank[trivia.j].giffy).attr({
				width: "480",
				height: "330"
			})
			$("#showGif").html(iframe);
			
			questionDOM.empty();
			answerOneDOM.empty();
			answerTwoDOM.empty();		
			answerThreeDOM.empty();
			answerFourDOM.empty();			
				
			setTimeout(function() {			
				trivia.nextQuestion();			
			}, 5000)						
		},
		countDown: function() {

	 	 	clearCountdown = setTimeout(function() {
   			trivia.n--;
			if(trivia.n > 0){	     		 
	     		trivia.countDown();
   			}
   			else {
   				console.log("unanswered");
   			}

		   console.log(trivia.n);
		   $("#counter").html(trivia.n);
		}, 1000);
	},	
		resetCountDown: function() {
			countDownDOM.empty();
			trivia.n = 10;
			trivia.countDown();
	},
		finalResults: function() {
			clearInterval(clearCountdown);
			clearInterval(clear);
			
			questionDOM.html("That's the end of the game!" + "<br>" + "Final Results:" + "<br>" +
				"Correct Answers: " + correctAnswerCounter + "<br>" +
				"Incorrect Answers: " + incorrectAnswerCounter + "<br>" +
				"Unanswered Questions: " + unansweredCounter);	
			
			answerOneDOM.empty();
			answerTwoDOM.empty();		
			answerThreeDOM.empty();
			answerFourDOM.empty();
			countDownDOM.empty();
			$("#showGif").empty();

		}	
}

$("#startButton").on("click", function() {
	trivia.initializeGame();
		console.log("hi");
})


$(".answer").on("click", function () {
	if (questionBank[trivia.j].correctAnswerIndex === $(this).attr('data-value')) {
		console.log("true");
		++correctAnswerCounter;
		trivia.displayPage("Correct!");
	}
	else {
		console.log("false");
		++incorrectAnswerCounter;
		trivia.displayPage("Wrong! " + "The correct answer was " + questionBank[trivia.j].correctAnswerIndex);
	}
});


