const classMdlProductList = require('../scripts/productList.js');

describe('productList', function() {
	describe('constructor', function() {
		it('should create an instance', function() {
			const mdlProductList = new classMdlProductList();
			expect(mdlProductList).toBeInstanceOf(classMdlProductList);
		});
	});
});
