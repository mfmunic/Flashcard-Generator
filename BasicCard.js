"use strict";

(function (){

	function basicCard (front, back){

		var rePunc = front.replace("?", ".")
		var answer = rePunc.replace("Who", back)

		this.front = front
		this.back = back
		this.answer = answer
	}

	module.exports = {
		"Card":basicCard
	}
	
})();