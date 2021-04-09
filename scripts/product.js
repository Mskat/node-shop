class Product {
	constructor(intId, strName, strImageUrl, intPrice, strDescription) {
		this._intId = intId;
		this._strTitle = strName;
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

	getDescription() {
		return this._strDescription;  
	}

	getPrice() {
		return this._intPrice;  
	}

	toString() {
		console.log(
			'Product ID: ' + this.getId() + '\nName: ' + this.getName() +  '\nLink: ' + this.getImageUrl() + '\nDescription: ' + this.getDescription() + '\nPrice: ' + this.getPrice()
		);
	}
}

module.exports = Product;