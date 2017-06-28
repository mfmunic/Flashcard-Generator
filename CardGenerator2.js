"use strict";

(function (){

	function cardGenerator(){

		var Basic = require("./BasicCard")
		var Cloze = require("./ClozeCard")
		var fs = require("fs")

		var presPlace, flashCard;

		var presArray = ["George Washington", "John Adams", "Thomas Jefferson", 
		"James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson",
		"Martin Van Buren", "William Henry Harrison", "John Tyler", "James Polk",
		"Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan",
		"Abraham Lincoln", "Andrew Johnson", "Ulysses Grant", "Rutherford Hayes",
		"James Garfield", "Chester Arthur", "Grover Cleveland", "Benjamin Harrison",
		"Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Taft",
		"Woodrow Wilson", "Warren Harding", "Calvin Coolidge", "Herber Hoover",
		"Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John Kennedy",
		"Lyndon Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan",
		"George Bush", "Bill Clinton", "George Bush", "Barack Obama", "Donald Trump"];

		var pickPres = Math.ceil(Math.random()*45);
		var cardBack = presArray[pickPres - 1];

			switch(pickPres){
				case 1:
				case 21:
				case 31:
				case 41:
					presPlace = `${pickPres}st`
					break;
				case 2:
				case 22:
				case 32:
				case 42:
					presPlace = `${pickPres}nd`
					break;
				case 3:
				case 23:
				case 33:
				case 43:
					presPlace = `${pickPres}rd`
					break;
				default:
					presPlace = `${pickPres}th`
					break;
			}

			if (Math.random() > 0.5){
				flashCard = new Basic.Card(`Who is the ${presPlace} president of the United States?`, cardBack)
			} else {
				flashCard = new Cloze.Card(`${cardBack} is the ${presPlace} president of the United States?`, cardBack)
			}

			console.log(flashCard.front)
			return flashCard;
	}

	module.exports = {
		"card": cardGenerator
	}

})();