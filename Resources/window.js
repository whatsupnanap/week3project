var instagram = require("ig");

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


var hyp3Img = Ti.UI.createImageView({
	image : "1669679_523030604478031_865814781_o.jpg",
	layout : "vertical",
	top:0,
});

////instagram
var igButton = Ti.UI.createView({
	backgroundColor : "#FFEA90",
	//width : 600,
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

igButton.addEventListener('click', function(e) {
	igWindow.add(instagram.igView);
	navigationWindow.openWindow(igWindow);
});

//////facebook page BUTTON

var fbButton = Ti.UI.createView({
	backgroundColor : "#333399",
	//width : 600,
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

// dataButton.addEventListener('click', function(e) {
// 
	// var loadFile = require("data");
	// navigationWindow.openWindow(dataWindow);
// 
// });

////twitter


var twitterButton = Ti.UI.createView({
	backgroundColor : "#1FDBFF",
	//width : 600,
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
	//width : 600,
	height : "18%",
	

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
	//width : 600,
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

// snapButton.addEventListener('click', function(e) {
// 
	// var loadFile = require("custom");
	// navigationWindow.openWindow(customWindow);
// 
// });





//adding up
contactButton.add(contactLabel);
snapButton.add(snapLabel);
twitterButton.add(twitterLabel);
igButton.add(igLabel);
fbButton.add(fbLabel);
mainWindow.add(hyp3Img);
mainWindow.add(fbButton);
mainWindow.add(igButton);
mainWindow.add(twitterButton);
mainWindow.add(snapButton);
mainWindow.add(contactButton);


navigationWindow.open();