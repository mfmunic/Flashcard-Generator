"use strict";

(function (){

	function cardGenerator(callback){

		var Basic = require("./BasicCard")
		var Cloze = require("./ClozeCard")
		var fs = require("fs")

		var presPlace
		var cardBack
		var flashCard

		var pickPres = Math.ceil(Math.random()*45);

		fs.readFile("presidents.txt", "utf8", function(err,data){
			if(err) {return console.log(err);}

			var presArray = JSON.parse(data)
			
			cardBack = presArray[pickPres - 1];

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

			callback(flashCard)
		})
	}

	module.exports = {
		"card": cardGenerator
	}

})();