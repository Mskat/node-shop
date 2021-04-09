class Product {
	constructor(intId, strTitle, strImageUrl, intPrice, strDescription) {
		this._intId = intId;
		this._strTitle = strTitle;
		this._strImageUrl = strImageUrl;
		this._intPrice = intPrice;
		this._strDescription = strDescription;
	}

	getId() {
		return this._intId;
	}

	getTitle() {
		return this._strTitle;        
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
			'Product ID: ' + this.getId() + 
            '\nName: ' + this.getTitle() +  
            '\nLink: ' + this.getImageUrl() +
            '\nDescription: ' + this.getDescription() +
            '\nPrice: ' + this.getPrice()
		);
	}
}

module.exports = Product;