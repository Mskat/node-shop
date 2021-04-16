const classItem = require('./item.js');

class ShoppingCart extends classItem{
	constructor() {
		super();

		this._intTotalPrice = 0;
	}

	getTotalPrice() {
		return this._intTotalPrice;
	}

	setTotalPrice(intPrice) {
		this._intTotalPrice = intPrice;
	}

	listItemsInShoppingCart() {
		const arrItems = this.getItems();
		console.log('\nYour shopping cart:');
		for (let i = 0; i < arrItems.length; i++) {
			console.log(arrItems[i].getName());
		}
		console.log('\nTotal: £' + this.getTotalPrice());
	}

	addItem(objProduct) {
		let arrItems = this.getItems();
		arrItems.push(objProduct);

		let intCurrentPrice = this.getTotalPrice();
		intCurrentPrice += objProduct.getPrice();

		this.setTotalPrice(intCurrentPrice);
	}
}

module.exports = ShoppingCart;