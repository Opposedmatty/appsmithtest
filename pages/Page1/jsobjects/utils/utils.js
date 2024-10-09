export default {

	async updatePostTitle (title) {
		UpdatePost.run(
			{
				PostID : 3,
				Title: title,
				Content: 'Test',

			}
		).then((res) => {
			console.log(res)
			GetPosts.run();
		})

		fetch("https://jsonplaceholder.typicode.com/todos/3").then(res => {
			res.json().then(res2 => {
				console.log("FETCH RESULT");
				console.log(res2);
			})
		})
	}
}