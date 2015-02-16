// TODO Consolidate Calendar and Instagram calls into a single remote data function
exports.bunbun = function() {
	var data = require('data');

	var instagramOnLoad, onError;
		instagramOnLoad = function() {
			var json = JSON.parse(this.responseText);
			var igDataArray = [];
			
			for(var i=0, j = json.data.length; i < j; i++){
				var instagram = json.data[i];
				
				igDataArray.push({	
					// TODO Add more API JSON data if VINNY want more
					username : instagram.user.username,
					images : instagram.images.low_resolution.url,
				});
			};
			
			data.save(igDataArray);
			data.saveToCloud(igDataArray);
		};

	var xhr = Ti.Network.createHTTPClient({
		onload : instagramOnLoad,
		onerror : function(e) {
			alert("XHR API error: " + e.error);
		},
		timeout : 5000
	});

	var url = "https://api.instagram.com/v1/tags/hyp3life/media/recent?access_token=823866714.2306ee1.eebafb817f0543738674f41caa9a1aa2";
		
	xhr.open("GET", url);
	xhr.send();
};
