export default {

	setup () {
		console.log("on load");

		const posts = GetPosts.data;

		Text2.setText(posts.length + "");
	},
}