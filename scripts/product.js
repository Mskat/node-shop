class Product {
	constructor(intId, strName, strImageUrl, mixPrice, strDescription) {
		if (!mixPrice) {
			throw new Error('Missing price');
		}
		if (typeof mixPrice !== 'number' && typeof mixPrice !== 'string' ) {
			throw new Error('Price should be a number or a string contains number');
		}
		if (typeof mixPrice === 'string') {
			mixPrice = parseFloat(mixPrice);
			if (!mixPrice) {
				throw new Error('Price should be only numbers');
			}
		}
		this._mixPrice = mixPrice;
		this._intId = intId;
		this._strName = strName;
		this._strImageUrl = strImageUrl;
		this._strDescription = strDescription;
	}

	getId() {
		return this._intId;
	}

	getName() {
		return this._strName;
	}

	getImageUrl() {
		return this._strImageUrl;
	}

	getPrice() {
		return this._mixPrice.toFixed(2);
	}

	getDescription() {
		return this._strDescription;
	}

	toString() {
		return 'Product ID: ' + this.getId() + '\nName: ' + this.getName() +  '\nLink: ' + this.getImageUrl() + '\nPrice: £' + this.getPrice() + '\nDescription: ' + this.getDescription() + '\n';
	}
}

module.exports = Product;
