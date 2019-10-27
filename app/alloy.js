var reste = require("reste");
var api = new reste();

api.config({
	debug: !(Ti.App.deployType == "production"),
	validatesSecureCertificate: false,
	timeout: 4000,
	url: "https://conduit.productionready.io/api/",
	requestHeaders: {
		"Content-Type": "application/json"
	},
	methods: [{
		name: "getArticles",
		get: "articles?limit=<limit>&offset=<offset>"
	}, {
		name: "getArticle",
		get: "articles/<slug>"
	}],
	onError: function(e, retry) {},
	onLoad: function(e, callback) {
		callback(e);
	}
});
