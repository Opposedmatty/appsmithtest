export default {

	setProductModal (productDetails) {
		console.log("set product modal", productDetails);
		txt_title.setText(productDetails.title);
		img_product.setImage(productDetails.image);
		showModal(mdl_product.name);
	},

	async onProductViewClick (itemId) {
		console.log("clicked item", itemId);

		const params = {
			productId: itemId
		}

		const productById = await GetProductById.run(params);
		this.setProductModal(productById);
	}
}