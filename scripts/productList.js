const classMdlProduct = require('../scripts/product.js');

class ProductList {
	constructor() {
		this._arrProducts = [
			new classMdlProduct(
				1,
				'Pillow',
				'https://zvelo.com/wp-content/tld-path-protocol.jpg',
				34.99,
				'Some description about a Pillow.',
			),
			new classMdlProduct(
				2,
				'Matress',
				'https://www.wikihow.com/images/he-URL-for-Step-2-6.jpg.webp',
				129.99,
				'Some description about a Matress.',
			),
			new classMdlProduct(
				3,
				'Classic Pillow',
				'https://some.com/wp-kmk/tld-path.jpg',
				64.99,
				'Some description about a Classic Pillow.',
			),
			new classMdlProduct(
				4,
				'Bookcase',
				'https://media.wired.com/photos/5lling%20the%20URL.jpg',
				229.00,
				'Some description about a Bookcase.',
			),
		];
	}

	getProducts() {
		return this._arrProducts;
	}

	listAllProducts() {
		const arrAllProducts = this.getProducts();

		for (let i = 0; i < arrAllProducts.length; i++) {
			const objProduct = arrAllProducts[i];
			console.log(objProduct.toString());
		}
	}
}

module.exports = ProductList;