"use strict";

(function (){

	var generate = require("./CardGenerator")
	var stdin = process.openStdin();

	var front, back, answer;
	var state = "start";

	stdin.addListener("data", gameLoop);
	gameLoop();

    function gameLoop(userInput) {
        userInput = userInput ? userInput.toString().trim().toLowerCase() : "";
        
		switch (state){
			case "start":
				start(userInput)
				break;
			case "checkReady":
	
				checkReady(userInput)

				break;
			case "leave":
				console.log("Goodbye.")
				process.exit()
				break;
			case "ask":
				generate.card()
				// front = generate.FlashCard.front
				// back = generate.FlashCard.back
				// answer = generate.FlashCard.answer
				break;
		}//end switch
	}//end gameloop
	
	function start (){
		console.log("Presidential Flashcards!!!!!!!")
		console.log("Answer each question with the first and last name of the President.")
		console.log("(Skip middle names and initials)")
		console.log("Ready? Y on N")
		state = "checkReady"
	}

	function checkReady (userInput){
		if (userInput == "n"){
			state = "leave"
		} else {
			state = "ask"
		}
		gameLoop()
	}

})();//end wrapper