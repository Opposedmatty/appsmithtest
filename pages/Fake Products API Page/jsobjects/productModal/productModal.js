export default {
	show (productDetails) {
		console.log("set product modal", productDetails);
		txt_title.setText(productDetails.title);
		img_product.setImage(productDetails.images[0]);
		showModal(mdl_product.name);
	},
}