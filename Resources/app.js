var pullData = require("api").remote;
var data = require('data');

// iPad でやるとき↑
if (Ti.Network.online === true) {
	var Cloud = require("ti.cloud");
	Cloud.debug = true;

	console.log("online");
		
	// Push to DB which is save
	Cloud.Users.login({
		login : "nanap",
		password : "12345"
	}, function(e){
		if(e.success){
			// Intagram feed URL
			var instagram = "https://api.instagram.com/v1/tags/hyp3life/media/recent?access_token=823866714.2306ee1.eebafb817f0543738674f41caa9a1aa2";
			
			// Pull Remote Data
			pullData(instagram, function() {
				// Get Response Text
				Ti.API.debug('Connected to Instagram');
				Ti.API.debug('Instagram Status:' + this.status);
				
				var json = JSON.parse(this.responseText);
				var igDataArray = [];
			
				// Loop through received data and build slider
				for(var i = 0, j = json.data.length; i < j; i++){
					var instagram = json.data[i];
					
					igDataArray.push({	
						// TODO Add more API JSON data if VINNY want more
						username : instagram.user.username,
						images : instagram.images.low_resolution.url,
					});
				};
			
				// Save cache data locally and to the cloud
				data.save(igDataArray);
				data.saveToCloud(igDataArray);
			});
		} else {
			alert("No Connection");
		}
	});
	// Simulator でやるとき↑

} else if (Ti.Network.online === false) {
	// Bring Data from DB favorite from final	
	var data = require('data');
	data.read();
	
	alert("No Connection");
};
