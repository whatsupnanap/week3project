exports.bunbun = function(lat, lng) {
	var data = require('data');
	
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			console.log("XHR onload has worked: " + e);
			var json = JSON.parse(this.responseText);
			var igData = {
				username: data.username,
			};
			
			console.log("igData" + JSON.stringify(igData));
			data.save(igData);
			data.saveToCloud(igData);
		},

		anerror : function(e) {
			alert("XHR API error:" + e.error);
		},
		timeout : 5000
	});

	var url = "https://api.instagram.com/v1/tags/hyp3life/media/recent?access_token=823866714.2306ee1.eebafb817f0543738674f41caa9a1aa2";
	
	console.log(url);
	
	xhr.open("GET", url);
	xhr.send();
};