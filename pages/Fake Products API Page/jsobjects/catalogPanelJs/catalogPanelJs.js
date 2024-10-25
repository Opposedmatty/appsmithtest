export default {

	currentPage: 0,
	currentItems: [],

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
		this.currentPage = newPage;
		const data = await GetProducts.run({page: newPage});
		if(data?.products !== undefined) {
			this.currentItems = data.products;
		} else {
			this.currentItems = [];
		}
	},
	async onPageLoad () { 
		this.onPageChange(0).then(res => {
			console.log("initial page load");
		});

	}
}