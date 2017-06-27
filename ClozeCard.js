"use strict";

(function (){

	function clozeCard (fullText, cloze){

		var answer = fullText.replace("?", ".")
		var front = answer.replace(cloze, "...")

		this.back = cloze
		this.front = front
		this.answer = answer
	}

	module.exports = {
		"Card":clozeCard
	}
	
})();