Ti.API.info("Instagram Module loaded");
Ti.API.info("Loading API Call");

var api = require("api");

var igView = Ti.UI.createView({
	backgroundColor: "green",
});

api.bunbun();

var username = Ti.UI.createLabel({
	font : {
		fontSize : "80dp"
	},
	color : "black",
	text: "Hello!"

});

console.log("API file loaded");

// exports.buildUI = function(obj) {
	// console.log(obj);
	// console.log("obj " + JSON.stringify(obj));
	// username.text = obj.username + "post by: ";
// 	
	// //win.open();
// };

igView.add(username);
exports.igView = igView;