class Item {
	constructor() {
		this._arrItems = [];
	}

	getItems() {
		return this._arrItems;
	}

	setItems(arrMdlItem) {
		return this._arrItems = arrMdlItem;
	}

	listItems() {
		const arrItems = this.getItems();
		for (let i = 0; i < arrItems.length; i++) {
			const objItem = arrItems[i];
			console.log(objItem.toString());
		}
	}
}

module.exports = Item;
