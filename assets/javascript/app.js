var questionBank = [
{
	question: "Who was the first president of the United States?",
	answerChoices: ["George Washington", "Bill Clinton", "Abe Lincoln", "Jim Carey"],
	correctAnswerIndex: 0,
},
{
	question: "Who won the 2017 World Series?",
	answerChoices: ["Dodgers", "Yankees", "Astros", "Indians"],
	correctAnswerIndex: 2,
},
{
	question: "What year did the Angels win the World Series?",
	answerChoices: ["2000", "2001", "2002", "2003"],
	correctAnswerIndex: 2,
},
{
	question: "Which direction does the sun rise?",
	answerChoices: ["North", "East", "South", "West"],
	correctAnswerIndex: 1,
},
{
	question: "What year did the Diamondbacks win the World Series?",
	answerChoices: ["2000", "2001", "2002", "2003"],
	correctAnswerIndex: 1,
},
{
	question: "What was the last year the Lakers won the NBA Finals?",
	answerChoices: ["2007", "2008", "2009", "2010"],
	correctAnswerIndex: 3,
},
{
	question: "What is the capital of Texas?",
	answerChoices: ["Houston", "Dallas", "San Antonio", "Austin"],
	correctAnswerIndex: 3,
},
{
	question: "What is the highest single-game point total of Kobe's Career?",
	answerChoices: ["60", "69", "81", "95"],
	correctAnswerIndex: 2,
},
{
	question: "How many championships have the Lakers won?",
	answerChoices: ["15", "16", "17", "18"],
	correctAnswerIndex: 1,
}]

var trivia = {	

	j: 0,

	initializeGame: function() {
		trivia.j = 0;

		trivia.questionOne(questionBank[trivia.j].question, 
			questionBank[trivia.j].answerChoices[0], 
			questionBank[trivia.j].answerChoices[1],
			questionBank[trivia.j].answerChoices[2], 
			questionBank[trivia.j].answerChoices[3], 
			questionBank[trivia.j].correctAnswerIndex);
	},

	questionOne: function(q, a, b, c, d, e) {	

		var userGuess;


		$("#question").html(q);
		$("#answerOne").html(a).on("click", function() {

			if (e === 0) {
				console.log("true");			

			}
			else {
				console.log("false");
			}	

			trivia.nextQuestion();					

		});
		$("#answerTwo").html(b).on("click", function() {
			if (e === 1) {
				console.log("true");
			}
			else {
				console.log("false");
			}	
			
			trivia.nextQuestion();			

		});
		$("#answerThree").html(c).on("click", function() {
			if (e === 2) {
				console.log("true");
			}
			else {
				console.log("false");
			}	

			trivia.nextQuestion();				
			
		});
		$("#answerFour").html(d).on("click", function() {
			if (e === 3) {
				console.log("true");
			}
			else {
				console.log("false");
			}

			trivia.nextQuestion();						
		});	

	// if (trivia.j < questionBank.length -1) {
	// 	trivia.nextQuestion();
	// 	console.log("still on");
	// }
	// else {
	// 	console.log("game over");
	// }	
},

nextQuestion: function() {

	if (trivia.j < questionBank.length - 1) {
		trivia.j++
	}
	
	trivia.j++;
	trivia.questionOne(questionBank[trivia.j].question, 
			questionBank[trivia.j].answerChoices[0], 
			questionBank[trivia.j].answerChoices[1],
			questionBank[trivia.j].answerChoices[2], 
			questionBank[trivia.j].answerChoices[3], 
			questionBank[trivia.j].correctAnswerIndex);
	}
}

trivia.initializeGame();

$("#startButton").on("click", function() {
		trivia.nextQuestion();
		console.log("hi");
	})











