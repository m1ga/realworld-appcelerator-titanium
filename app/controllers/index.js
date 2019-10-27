function onOpen(e) {
	// get list
	api.getArticles({
		limit: 10,
		offset: 0
	}, function(data) {
		// data
		console.log(data);

		var listData = [];
		_.each(data.articles, function(item) {
			listData.push({
				title: {
					text: item.title,
				},
				author: {
					text: "by " + item.author.username,
				},
				authorImage: {
					image: item.author.image
				},
				properties: {
					slug: item.slug,
					height: 40
				}
			})
		})
		$.lst_articles.sections[0].items = listData;
	}, function(error) {
		console.log(error.message);
	})
}

$.navWindow.open();

function onClickItem(e) {
	if (OS_IOS) {
		$.lst_articles.deselectItem(0, e.itemIndex);
	}
	var slug = e.section.getItemAt(e.itemIndex).properties.slug;

	var w = Alloy.createController("/article", {
		slug: slug
	}).getView();
	$.navWindow.openWindow(w);
}
