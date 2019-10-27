var args = $.args;

function onOpen(e) {
	// get article
	api.getArticle({
		slug: args.slug
	}, function(data) {
		// data
		console.log(data);
		$.lbl_title.text = data.article.title;
		$.lbl_text.text = data.article.body;
	}, function(error) {
		console.log(error.message);
	})
}
