const classMdlItem = require('../scripts/item.js');
const classMdlProduct = require('../scripts/product.js');

describe('item', function() {
	describe('constructor', function() {
		it('should create an instance', function() {
			const mdlItem = new classMdlItem();
			expect(mdlItem).toBeInstanceOf(classMdlItem);
		});
	});
	describe('getter', function() {
		it('should return set value', function() {
			const intId = 1;
			const strName = 'Pillow';
			const strImageUrl = 'https://link.com';
			const mixPrice = 25.99;
			const strDescription = 'Some description';
			const mdlProduct = new classMdlProduct(
				intId,
				strName,
				strImageUrl,
				mixPrice,
				strDescription
			);
			const arrMdlItems = [mdlProduct];
			const mdlItem = new classMdlItem();

			mdlItem.setItems(arrMdlItems);

			expect(mdlItem.getItems()).toEqual(arrMdlItems);
		});
		it('should return default value', function() {
			const mdlItem = new classMdlItem();
			expect(mdlItem.getItems()).toEqual([]);
		});
	});
	describe('listItems', function() {
		it('should print items', function() {
			const intId = 1;
			const strName = 'Pillow';
			const strImageUrl = 'https://link.com';
			const mixPrice = 25.99;
			const strDescription = 'Some description';
			const mdlProduct = new classMdlProduct(
				intId,
				strName,
				strImageUrl,
				mixPrice,
				strDescription
			);
			const arrMdlItems = [mdlProduct];
			const mdlItem = new classMdlItem();

			const log = jest.spyOn(global.console, 'log');

			mdlItem.setItems(arrMdlItems);
			mdlItem.listItems();

			expect(log).toHaveBeenCalledWith(mdlItem.getItems().toString());
		});
	});
});
