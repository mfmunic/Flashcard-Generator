"use strict";

(function (){

	// var generate = require("./CardGenerator2")
	var generate = require("./CardGenerator")
	var stdin = process.openStdin();

	var reCard

	var state = "start";
	var score = 0;


	stdin.addListener("data", gameLoop);
	gameLoop();

    function gameLoop(userInput) {
        userInput = userInput ? userInput.toString().trim().toLowerCase() : "";
        
		switch (state){
			case "start":

				start()
				break;

			case "ready":

				ready()
				break;

			case "checkReady":

				checkReady(userInput)
				break;

			case "leave":

				console.log("Goodbye.")
				process.exit()
				break;

			case "ask":

				ask()
				break;

			case "answer":

				answer(userInput)
				break;

			case "score":

				scored()
				break;

		}//end switch
	}//end gameloop
	
	function start (){
		console.log("Presidential Flashcards!!!!!!!")
		console.log("Answer each question with the first and/or last name of the President.")
		console.log("1 point for each name.")
		console.log("(Skip middle names and initials)")
		state = "ready"
		gameLoop()
	}

	function checkReady (userInput){
		if (userInput.indexOf("n") == 0) {
			state = "leave"
		} else if (userInput.indexOf("y") == 0) {
			state = "ask"
		} else {
			state = "ready"
		}
		gameLoop()
	}

	function ask (){
		console.log("----------------------------------------");
		generate.card(function(flashcard){
			reCard = flashcard
			console.log(reCard.front)
			state = "answer"
		})
		
	}

	function answer (userInput){

		var userAns = userInput.split(" ");
		var check = reCard.back.trim().toLowerCase();
		var checkEach = check.split(" ")
		var back = reCard.back;

			if (userAns[0].length == 0){

				console.log("Are you paying attention?")
				state = "ask";
				gameLoop();

			} else if (userAns.length == 1){

				if(checkEach.includes(userAns[0])){
					console.log("Correct.");
					score++;
				} else {
					console.log("Wrong.")
				}

				state = "score";
				gameLoop();

			} else if (userAns.length == 2){

				if (userInput === check){
					console.log("Correct!")
					score += 2;
				} else {
					console.log("Wrong!")
				}

				state = "score";
				gameLoop();

			} else if (userAns.length > 2) {
				console.log("Please first and/or last name ONLY!");
				state = "ask";
				gameLoop();
			}
	}

	function ready (){
		console.log("Ready? Yes on No")
		state = "checkReady"
	}

	function scored(){
		console.log(reCard.answer);
		console.log("----------------------------------------");
		console.log("Your score is "+score);
		console.log("Do you want another flashcard? Yes on No");
		state = "checkReady"
	}

})();//end wrapper