const classInput = require('../scripts/input.js');
const classMdlProductList = require('../scripts/productList.js');
const classShoppingCart = require('../scripts/shoppingCart.js');
const classFilteredProductList = require('../scripts/filteredProductList.js');

const mdlProductList = new classMdlProductList();
const mdlShoppingCart = new classShoppingCart();
const mdlFilteredProductList = new classFilteredProductList();

function greeting() {
	console.log('Hi there!');
	console.log('Do you want to start shopping?');
	console.log('\nType Y/N:');
	const strUserInput = classInput._getInput().toUpperCase();
	switch (strUserInput) {
	case 'Y':
		chooseProduct();
		break;
	case 'N':
		console.log('\nThank you for your visit! See you soon!');
		break;
	default:
		console.log('Choose from avaliable options! Press ENTER to continue.');
		classInput._getInput();
		greeting();
	}

}

function chooseProduct() {
	console.log('\nOur products:');
	mdlProductList.listAllProducts();

	let strInput;
	let intCounter = 0;

	console.log('Type the name of product:');
	strInput = classInput._getInput();
	const products = mdlProductList.getProducts();

	for (let i = 0; i < products.length; i++) {
		const strName = products[i]
			.getName()
			.toLowerCase();

		if (strName.includes(strInput)) {
			console.log(products[i].toString());
			mdlFilteredProductList.getFilteredProducts(products[i]);
			intCounter++;
		}
	}

	if (intCounter > 0) {
		console.log(`We found ${intCounter} result.\n`);
	} else if (intCounter === 0){
		console.log(`We found ${intCounter} results.\n`);
	}

	console.log('Choose an ID of product you want to add to shopping cart: ');
	const strInput2 = classInput._getInput();
	const regPattern = /^[0-9]/;

	if (strInput2.match(regPattern)) {
		const objProduct = mdlFilteredProductList.getItem(parseInt(strInput2));
		mdlShoppingCart.addItem(objProduct);
		console.log('Added item to shopping cart.');
	}

	mdlShoppingCart.listItems();

}

function initApp() {
	greeting();
}

initApp();