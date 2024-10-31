export default {
	currentCount: 0,
	onCountClick (newCount) {
		console.log("count change", newCount);
		this.currentCount = newCount;
		
	},
}