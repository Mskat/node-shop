// const classMdlProduct = require('./product.js');

class FilteredProductList {
	constructor() {
		this._arrProducts = [];
	}

	getFilteredProducts() {
		return this._arrProducts;
	}

	listAllFilteredProducts() {
		const arrAllProducts = this.getFilteredProducts();
		for (let i = 0; i < arrAllProducts.length; i++) {
			const objProduct = arrAllProducts[i];
			console.log(objProduct.toString());
		}
	}

	addProductToFilteredList(objProduct) {
		let arrItems = this.getFilteredProducts();
		arrItems.push(objProduct);
	}

	getItem(intId) {
		let arrItems = this.getFilteredProducts();
		for (let i = 0; i < arrItems.length; i++) {
			const intProductId = arrItems[i].getId();
			if (intId === intProductId) {
				return arrItems[i];
			}
		}
	}
}

module.exports = FilteredProductList;