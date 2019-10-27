var args = $.args;

function onOpen(e) {
	// get article
	api.getArticle({
		slug: args.slug
	}, function(data) {
		// data
		console.log(data);
		var d = new Date(data.article.createdAt);
		$.lbl_title.text = data.article.title;
		$.lbl_description.text = data.article.description;
		$.lbl_text.text = data.article.body;
		$.img_author.image = data.article.author.image;
		$.lbl_author.text = data.article.author.username;
		$.lbl_date.text = d.getDate() + "." + (d.getMonth() + 1) + ".";
	}, function(error) {
		console.log(error.message);
	})
}
