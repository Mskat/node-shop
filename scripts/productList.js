const classItem = require('./item.js');

class ProductList extends classItem{
	constructor() {
		super();
	}

	setItems(arrMdlItem) {
		return this._arrItems = arrMdlItem;
	}
}

module.exports = ProductList;
