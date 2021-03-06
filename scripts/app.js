const classMdlInput = require('../scripts/input.js');
const classMdlProductList = require('../scripts/productList.js');
const classShoppingCart = require('../scripts/shoppingCart.js');
const classFilteredProductList = require('../scripts/filteredProductList.js');
const classMdlData = require('../scripts/data.js');

const mdlProductList = new classMdlProductList();
const mdlShoppingCart = new classShoppingCart();
const mdlFilteredProductList = new classFilteredProductList();

const DEFAULT_MESSAGE = '\nThank you for your visit! See you soon!\n';

class App {
	static init() {
		greetingMenu();

		function greetingMenu() {
			console.log('Hi there!');
			console.log('Do you want to start shopping?');
			console.log('\nType Y/N:');
			showOptions(chooseProduct);
		}

		function showOptions(yesAction, noAction) {
			const strUserInput = classMdlInput.getInput().toUpperCase();
			switch (strUserInput) {
			case 'Y':
				if(yesAction && typeof yesAction === 'function') {
					// await callbackFunction();
					yesAction();
				}
				break;
			case 'N':
				if(noAction && typeof noAction === 'function') {
					noAction();
					break;
				}
				printMessage(DEFAULT_MESSAGE);
				return;
			default:
				console.log('Choose from avaliable options! Press ENTER to continue.');
				classMdlInput.getInput();
				greetingMenu();
			}
		}

		function printMessage(message) {
			console.log(message);
		}

		async function chooseProduct() {
			//set product list
			const arrMdlItem = await classMdlData.importItemsFromList();
			mdlProductList.setItems(arrMdlItem);

			// list all products in the shop
			console.log('\nOur products:\n');
			mdlProductList.listItems();

			console.log('Type the name of product:');
			const products = mdlProductList.getItems();
			const strInput = classMdlInput.getInput();
			let intCounter = 0;
			for (let i = 0; i < products.length; i++) {
				const strName = products[i]
					.getName()
					.toLowerCase();
				// checks if any result fits to given keywords
				if (strName.includes(strInput)) {
					console.log(products[i].toString());
					mdlFilteredProductList.addProductToFilteredList(products[i]);
					intCounter++;
				}
			}

			if (intCounter > 0) {
				console.log(`We found ${intCounter} result.\n`);
				chooseProductID();
			} else if (intCounter === 0){
				console.log(`\nWe found ${intCounter} results.\n`);
				console.log('Do you want to try again?');
				console.log('Type Y/N:');
				showOptions(chooseProduct);
			}
		}

		function chooseProductID() {
			let objProduct;
			do {
				console.log('Type an ID of product you want to add to shopping cart: ');
				const strInput2 = classMdlInput.getInput();
				objProduct = mdlFilteredProductList.getItem(parseInt(strInput2));

				if (objProduct) {
					mdlShoppingCart.addItem(objProduct);
					console.log('Added item to shopping cart.\n');
				} else {
					console.log('There is no item with given ID. Press ENTER to continue.');
					classMdlInput.getInput();
				}
			} while (objProduct === undefined);
			continueShoppingOrPay();
		}

		function continueShoppingOrPay() {
			console.log('Do you want to continue shopping?');
			console.log('Type Y/N:');
			showOptions(chooseProduct, payForShopping);
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
						console.log(`\nYou paid ??${mdlShoppingCart.getTotalPrice()}`);
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
