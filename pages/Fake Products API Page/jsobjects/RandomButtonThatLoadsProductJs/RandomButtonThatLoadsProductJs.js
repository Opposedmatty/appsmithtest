export default {

	async loadProduct19 () {
		const params = { productId : 19 }
		const productById = await GetProductById.run(params);
		console.log(productById)
		showAlert(JSON.stringify(productById));
	}
}