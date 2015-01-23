var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	//fullscreen : true,
	layout : "vertical",
	//title : "HYP3",
	//image:"1669679_523030604478031_865814781_o.jpg"

});

var navigationWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow,

});

exports.buildUI = function(obj) {
	console.log(obj);
	console.log("obj " + JSON.stringify(obj));
	username.text = obj.username + "post by: ";
	
	navigationWindow.open();
};

//data.buildUI(dbData);

var hyp3Img = Ti.UI.createImageView({
	image : "1669679_523030604478031_865814781_o.jpg",
	layout : "vertical",
	top:0,
});

////instagram
var igButton = Ti.UI.createView({
	backgroundColor : "#FFEA90",
	width : "33%",
	height : "18%",
	

});

var igLabel = Ti.UI.createLabel({
	text : "instagram",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "35dp",
		fontFamily : "Helvetica"
	}
});

var igWindow = Ti.UI.createWindow({
	backgroundColor : "pink",
	title : "#HYP3Life",
	//fullscreen : true
});


var username = Ti.UI.createLabel({
	font : {
		fontSize : "80dp"
	},
	color : "black",
	text: "Hello!"
	//↑json.data.username

});

// igButton.addEventListener('click', function(e) {
	// igWindow.add(instagram.igView);
	// navigationWindow.openWindow(igWindow);
// });

//////facebook page BUTTON

var fbButton = Ti.UI.createView({
	backgroundColor : "#333399",
	width : "33%",
	height : "18%",
	//top : 150,

});

var fbLabel = Ti.UI.createLabel({
	text : "facebook",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "35dp",
		fontFamily : "Helvetica"
	}
});

var fbWindow = Ti.UI.createWindow({
	backgroundColor : "white",
	//fullscreen : true
});



////twitter


var twitterButton = Ti.UI.createView({
	backgroundColor : "#1FDBFF",
	width : "33%",
	height : "18%",
	

});

var twitterLabel = Ti.UI.createLabel({
	text : "twitter",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "35dp",
		fontFamily : "Helvetica"
	}
});

var twitterWindow = Ti.UI.createWindow({
	backgroundColor : "blue",
	//fullscreen : true
});

// twitterButton.addEventListener('click', function(e) {
// 
	// var loadFile = require("custom");
	// navigationWindow.openWindow(customWindow);
// 
// });





////snapchat


var snapButton = Ti.UI.createView({
	backgroundColor : "#FFFF1A",
	width : "33%",
	height : "18%",
	left:"30%"

});

var snapLabel = Ti.UI.createLabel({
	text : "snapchat",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "35dp",
		fontFamily : "Helvetica"
	}
});

var snapWindow = Ti.UI.createWindow({
	backgroundColor : "yellow",
	//fullscreen : true
});

// snapButton.addEventListener('click', function(e) {
// 
	// var loadFile = require("custom");
	// navigationWindow.openWindow(customWindow);
// 
// });






////contact


var contactButton = Ti.UI.createView({
	backgroundColor : "#5DFB70",
	width : "33%",
	height : "18%",
	

});

var contactLabel = Ti.UI.createLabel({
	text : "contact",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "35dp",
		fontFamily : "Helvetica"
	}
});

var contactWindow = Ti.UI.createWindow({
	backgroundColor : "pink",
	//fullscreen : true
});

exports.buildUI = function(obj) {
console.log(obj);
console.log("obj " + JSON.stringify(obj));
username.text = obj.username + "post by: ";
mainWindow.open();
};


//adding up
contactButton.add(contactLabel);
snapButton.add(snapLabel);
twitterButton.add(twitterLabel);
igButton.add(igLabel);
fbButton.add(fbLabel);
mainWindow.add(hyp3Img);
mainWindow.add(username);
mainWindow.add(fbButton);
mainWindow.add(igButton);
mainWindow.add(twitterButton);
mainWindow.add(snapButton);
mainWindow.add(contactButton);



//navigationWindow.open();
