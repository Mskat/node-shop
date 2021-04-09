class Product {
	constructor(intId, strName, strImageUrl, intPrice, strDescription) {
		this._intId = intId;
		this._strName = strName;
		this._strImageUrl = strImageUrl;
		this._intPrice = intPrice;
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
		return this._intPrice;  
	}

	getDescription() {
		return this._strDescription;  
	}

	toString() {
		console.log(
			'Product ID: ' + this.getId() + '\nName: ' + this.getName() +  '\nLink: ' + this.getImageUrl() + '\nPrice: £' + this.getPrice() + '\nDescription: ' + this.getDescription()
		);
	}
}

module.exports = Product;