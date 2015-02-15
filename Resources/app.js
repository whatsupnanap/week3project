var api = require("api");

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
			api.bunbun();
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
