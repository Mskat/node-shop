class ProductList {
	constructor() {
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
