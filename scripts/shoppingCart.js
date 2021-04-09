class ShoppingCart {
	constructor() {
		this._arrItems = [];
		this._intTotalPrice = 0;
	}

	getItems() {
		return this._arrItems;
	}

	getTotalPrice() {
		return this._intTotalPrice;
	}

	setTotalPrice(intPrice) {
		this._intTotalPrice = intPrice;
	}

	listItems() {
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