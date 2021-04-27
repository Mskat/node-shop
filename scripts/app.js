const classMdlInput = require('../scripts/input.js');
const classMdlProductList = require('../scripts/productList.js');
const classShoppingCart = require('../scripts/shoppingCart.js');
const classFilteredProductList = require('../scripts/filteredProductList.js');
const classMdlData = require('../scripts/data.js');

const mdlProductList = new classMdlProductList();
const mdlShoppingCart = new classShoppingCart();
const mdlFilteredProductList = new classFilteredProductList();

class App {
	static init() {
		greeting();

		greeting() {
			console.log('Hi there!');
			console.log('Do you want to start shopping?');
			console.log('\nType Y/N:');
			const strUserInput = classMdlInput._getInput().toUpperCase();
			switch (strUserInput) {
			case 'Y':
				chooseProduct();
				break;
			case 'N':
				console.log('\nThank you for your visit! See you soon!');
				break;
			default:
				console.log('Choose from avaliable options! Press ENTER to continue.');
				classMdlInput._getInput();
				greeting();
			}
		}

		async chooseProduct() {
			try {
				const arrMdlItem = await classMdlData.importItemsFromList();
				mdlProductList.setItems(arrMdlItem);

				await console.log('\nOur products:\n');
				mdlProductList.listItems(); // list all products in the shop
			} catch (err) {
				console.log(err);
			}

			let strInput = '';
			let intCounter = 0;

			console.log('Type the name of product:');
			strInput = classMdlInput._getInput();
			const products = mdlProductList.getItems();

			for (let i = 0; i < products.length; i++) {
				const strName = products[i]
					.getName()
					.toLowerCase();

				if (strName.includes(strInput)) { // checks if any result fits to given keywords
					console.log(products[i].toString());
					mdlFilteredProductList.addProductToFilteredList(products[i]);
					intCounter++;
				}
			}

			if (intCounter > 0) {
				console.log(`We found ${intCounter} result.\n`);
			} else if (intCounter === 0){
				console.log(`We found ${intCounter} results.\n`);
			}

			let objProduct;
			do {
				console.log('Type an ID of product you want to add to shopping cart: ');

				const strInput2 = classMdlInput._getInput();
				objProduct = mdlFilteredProductList.getItem(parseInt(strInput2));

				if (objProduct) {
					mdlShoppingCart.addItem(objProduct);
					console.log('Added item to shopping cart.');
				} else {
					console.log('There is no item with given ID. Press ENTER to continue.');
					classMdlInput._getInput();
				}
			} while (objProduct === undefined);

			mdlShoppingCart.listItems();
		}

		function payForShopping() {
			console.log('\nGo to checkout...');
			setTimeout(function() {
				mdlShoppingCart.listItemsInShoppingCart();
				let strInput = '';
				do {
					console.log('\nChoose the payment method. Type card or cash:');
					strInput = classMdlInput.getInput().toUpperCase();
					if (strInput === 'CARD' || strInput === 'CASH') {
						console.log(`\nYou paid £${mdlShoppingCart.getTotalPrice()}`);
						console.log(DEFAULT_MESSAGE);
						return;
					} else {
						console.log('Choose from avaliable options! Press ENTER to continue.');
						classMdlInput.getInput();
					}
				} while (strInput !== 'CARD' || strInput !== 'CASH');
			}, 3000);
		}
	}
}

App.init();
