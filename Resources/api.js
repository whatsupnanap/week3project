// TODO Consolidate Calendar and Instagram calls into a single remote data function
exports.remote = function(url, callback) {
	
	var xhr = Ti.Network.createHTTPClient({
		onload : callback,
		onerror : function(e) {
			Ti.API.debug("XHR API error: " + e.error);
		},
		timeout : 5000
	});

	xhr.open("GET", url);
	xhr.send();
};
