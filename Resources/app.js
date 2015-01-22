var Cloud = require("ti.cloud");
Cloud.debug = true;

var api = require("api");
// var geo = require("geo");

// 

// // geo.getGeo();
// //ipad でやるとき↑
if (Ti.Network.online) {
	console.log("online");
	
	
	
	//push to DB which is save
	Cloud.Users.login({
		login:"nanap",
		password:"12345"
	},
	function(e){
		if(e.success){
			api.bunbun();
		}else{
			alert("Error Login");
		}
		
	}
	);
	// // //simulatorでやるとき↑
// // 

} else {
	var data = require('data');
	data.read();
	console.log("no network");
	// // //bring Data from DB favorite from final
	// // alert("You are not connecting to any internet.");
// // 	
};
