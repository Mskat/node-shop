const prompt = require('prompt-sync')({ sigint: true });

class Input {
	static getInput() {
		let strInput = prompt('-> ')
			.trim()
			.toLowerCase();

		return strInput;
	}
}

module.exports = Input;
