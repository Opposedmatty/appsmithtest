export default {

	async onProductViewClick (itemId) {
		if(!itemId) return;
		console.log("clicked item", itemId);

		const params = {
			productId: itemId
		}
		const productById = await GetProductById.run(params);
		productModal.show(productById);
	},
	async onPageChange (newPage) {
		console.log("new page", newPage);
		GetProducts.run({page: newPage})
	}
}