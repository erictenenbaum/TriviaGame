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
},
{
	question: "Who won the 2017 World Series?",
	answerChoices: ["Dodgers", "Yankees", "Astros", "Indians"],
	correctAnswerIndex: "Astros",
},
{
	question: "What year did the Angels win the World Series?",
	answerChoices: ["2000", "2001", "2002", "2003"],
	correctAnswerIndex: "2002",
},
{
	question: "Which direction does the sun rise?",
	answerChoices: ["North", "East", "South", "West"],
	correctAnswerIndex: "East",	
},
{
	question: "What year did the Diamondbacks win the World Series?",
	answerChoices: ["2000", "2001", "2002", "2003"],
	correctAnswerIndex: "2001",
},
{
	question: "What was the last year the Lakers won the NBA Finals?",
	answerChoices: ["2007", "2008", "2009", "2010"],
	correctAnswerIndex: "2010",
},
{
	question: "What is the capital of Texas?",
	answerChoices: ["Houston", "Dallas", "San Antonio", "Austin"],
	correctAnswerIndex: "Austin",
},
{
	question: "What is the highest single-game point total of Kobe's Career?",
	answerChoices: ["60", "69", "81", "95"],
	correctAnswerIndex: "81",
},
{
	question: "How many championships have the Lakers won?",
	answerChoices: ["15", "16", "17", "18"],
	correctAnswerIndex: "16",
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
					trivia.displayPage();						
				}
				else {
					alert("thats it!");
				}

				}, 10000);
		},
		questionOne: function (q, a, b, c, d) {

			var userGuess;
			questionDOM.html(q)
			answerOneDOM.html(a).attr('data-value', a);
			answerTwoDOM.html(b).attr('data-value', b);
			answerThreeDOM.html(c).attr('data-value', c);
			answerFourDOM.html(d).attr('data-value', d);			
		},
		displayPage: function() {			
			clearInterval(clearCountdown);
			clearInterval(clear);
			questionDOM.html("The correct answer was " + questionBank[trivia.j].correctAnswerIndex);
			answerOneDOM.html("You have answered " + correctAnswerCounter + 
				" questions correctly, " + incorrectAnswerCounter +
				" questions inccorectly, and have not answered " + unansweredCounter + " questions");

			answerTwoDOM.empty();
			answerThreeDOM.empty();
			answerFourDOM.empty();
			countDownDOM.empty();
				
			setTimeout(function() {			
				trivia.nextQuestion();			
			}, 3000)		
				
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
	}
}

$("#startButton").on("click", function() {
	trivia.initializeGame();
		console.log("hi");
})

// $("#answerOne").on("click", function () {

// 	if (questionBank[trivia.j].correctAnswerIndex === $(this).attr('data-value')) {
// 		console.log("true");
// 		++correctAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);			
// 	}
// 	else {
// 		console.log("false");
// 		++incorrectAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// });
// $("#answerTwo").on("click", function () {
// 	if (questionBank[trivia.j].correctAnswerIndex === $(this).attr('data-value')) {
// 		console.log("true");
// 		++correctAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// 	else {
// 		console.log("false");
// 		++incorrectAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// });
// $("#answerThree").on("click", function () {
// 	if (questionBank[trivia.j].correctAnswerIndex === $(this).attr('data-value')) {
// 		console.log("true");
// 		++correctAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// 	else {
// 		console.log("false");
// 		++incorrectAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// });
// $("#answerFour").on("click", function () {
// 	if (questionBank[trivia.j].correctAnswerIndex === $(this).attr('data-value')) {
// 		console.log("true");
// 		++correctAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// 	else {
// 		console.log("false");
// 		++incorrectAnswerCounter;
// 		trivia.displayPage(questionBank[trivia.j].correctAnswerIndex);
// 	}
// });

$(".answer").on("click", function () {
	if (questionBank[trivia.j].correctAnswerIndex === $(this).attr('data-value')) {
		console.log("true");
		++correctAnswerCounter;
		trivia.displayPage();
	}
	else {
		console.log("false");
		++incorrectAnswerCounter;
		trivia.displayPage();
	}
});

