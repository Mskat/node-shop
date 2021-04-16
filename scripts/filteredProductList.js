// const classMdlProduct = require('./product.js');
const classItem = require('./item.js');

class FilteredProductList extends classItem{
	constructor() {
		super();
	}

	addProductToFilteredList(objProduct) {
		let arrItems = this.getItems();
		arrItems.push(objProduct);
	}

	getItem(intId) {
		let arrItems = this.getItems();
		for (let i = 0; i < arrItems.length; i++) {
			const intProductId = arrItems[i].getId();
			if (intId === intProductId) {
				return arrItems[i];
			}
		}
	}
}

module.exports = FilteredProductList;