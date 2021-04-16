const fs = require('fs');
const readline = require('readline');

const classMdlProduct = require('../scripts/product.js');

class Data {
	static async importItemsFromList() {
		const fileStream = fs.createReadStream('../items.txt');

		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity
		});

		let arrMdlProduct = [];
		for await (const line of rl) {
			// create an array where single line from a text file is one element of the array
			const arrFromFile = line.toString().split('\n');

			for (let i = 0; i< arrFromFile.length; i++) {
				const strLine = arrFromFile[i];
				const objFromFile = JSON.parse(strLine);
				const mdlProduct = new classMdlProduct(
					objFromFile.id,
					objFromFile.name,
					objFromFile.link,
					objFromFile.price,
					objFromFile.description
				);
				arrMdlProduct.push(mdlProduct);
			}
		}
		return await Promise.resolve(arrMdlProduct);
	}
}

module.exports = Data;
