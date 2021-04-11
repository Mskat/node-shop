const classMdlProduct = require('../scripts/product.js');

describe('product', function() {
	describe('constructor', function() {
		it('should create an instance', function() {
			const intPrice = 523.56;

			const mdlProduct = new classMdlProduct(
				null,
				null,
				null,
				intPrice,
			);
			expect(mdlProduct).toBeInstanceOf(classMdlProduct);
		});
		it('should throw an error on missing price', function() {
			expect(function() { new classMdlProduct(); }).toThrow('Missing price');
		});
		it('should throw an error on invalid type of price', function() {
			const arrPrice = ['something'];
			expect(
				function() { 
					new classMdlProduct(
						null,
						null,
						null,
						arrPrice,
					); 
				}
			).toThrow('Price should be a number or a string contains number');
		});
		it('should throw an error on invalid type of price', function() {
			const strPrice = 'foo';
			expect(
				function() { 
					new classMdlProduct(
						null,
						null,
						null,
						strPrice,
					); 
				}
			).toThrow('Price should be only numbers');
		});
	});
	describe('getters', function() {
		it('should return set value', function() {
			const intId = 56;
			const strName = 'Laptop';
			const strImageUrl = 'https://someURL';
			const strPrice = '456.6911';
			const strExpectedPrice = parseFloat(strPrice).toFixed(2);
			const strDescription = 'Some description about a Laptop';

			const mdlProduct = new classMdlProduct(
				intId,
				strName,
				strImageUrl,
				strPrice,
				strDescription
			);

			expect(mdlProduct.getId()).toEqual(intId);
			expect(mdlProduct.getName()).toEqual(strName);
			expect(mdlProduct.getImageUrl()).toEqual(strImageUrl);
			expect(mdlProduct.getPrice()).toEqual(strExpectedPrice);
			expect(mdlProduct.getDescription()).toEqual(strDescription);
			expect(mdlProduct.toString()).toMatch(
				`Product ID: ${intId}\nName: ${strName}\nLink: ${strImageUrl}\nPrice: £${strExpectedPrice}\nDescription: ${strDescription}`
			);
		});
	});
});