var api = require("api");
// var geo = require("geo");


// 

// // geo.getGeo();
// //ipad でやるとき↑
if (Ti.Network.online ===true) {
	var Cloud = require("ti.cloud");
Cloud.debug = true;


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
			alert("No Connection");
		}
		
	});
	// // //simulatorでやるとき↑
// // 

} else if(Ti.Network.online === false) {

	var data = require('data');
	data.read();
	alert("No Connection");
	// // //bring Data from DB favorite from final
	// // alert("You are not connecting to any internet.");
// // 	
};
