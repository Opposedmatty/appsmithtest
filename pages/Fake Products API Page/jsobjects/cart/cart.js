export default {
	cart: [],
	async loadCart () {
		const currentCart = appsmith.store.cart || [];
		this.cart = currentCart;
	},
	async addItem (item) {
		const currentCart = appsmith.store.cart || [];
		const newCart = [...currentCart, item];
		storeValue('cart', newCart);
		this.cart = newCart;

		const addCartString = `Added item : ${item.title}`;
		showAlert(addCartString, "success");
	},
	async showCart () {
		showModal(mdl_cart.name);
	},
	async emptyCart () {
		const newCart = [];
		storeValue('cart', newCart);
		this.cart = newCart;
	}
}