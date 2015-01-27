var mainWindow = Ti.UI.createWindow({
	backgroundColor : "black",
	//fullscreen : true,
	//layout : "vertical",
	//title : "HYP3",
	//image:"1669679_523030604478031_865814781_o.jpg"

});

console.log(Ti.Platform.osname);

if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
	var navigationWindow = Titanium.UI.iOS.createNavigationWindow({
		window : mainWindow
	});
};

exports.buildUI = function(obj) {
	//console.log(obj);
	console.log("obj " + JSON.stringify(obj));
	var scrollView = Ti.UI.createScrollableView({
		width : '100%',
		height : '60%',
		top : "19%",
		backgroundColor : "black",
		showHorizontalScrollIndicator : true,
		// borderColor : '#FF0000',
		// borderWidth : '2dp'
		//backgroundColor:"red"
	});
	var views = [];

	for ( i = 0,
	j = obj.length; i < j; i++) {

		var mainView = Ti.UI.createView({
			layout : "vertical",
			//width : "40%",
		});
		var igPic = Ti.UI.createImageView({
			image : obj[i].image,
			top : 0,
			// height : "90%",
			width : Ti.UI.FILL,
			//scale:"50%"
		});

		var usernameLbl = Ti.UI.createLabel({
			font : {
				fontSize : "10dp",
				//backgroundColor:"yellow"
			},
			bottom : "10%",
			color : "white",
			text : "post by: " + obj[i].username,
		});

		mainView.add(igPic);
		mainView.add(usernameLbl);
		views.push(mainView);
		scrollView.views = views;
	}
	
	var t = 0;
	
	setInterval(function(e) {
		if(t >= scrollView.views.length) {
			t = 0;
		}
		
		scrollView.scrollToView(t);
		t++;
		
	}, 3000);
	
	mainWindow.add(scrollView);
	mainWindow.open();
};

//data.buildUI(dbData);

var hyp3Img = Ti.UI.createImageView({
	image : "1669679_523030604478031_865814781_o.jpg",
	layout : "vertical",
	top : 0,
});

var tagLabel = Ti.UI.createLabel({
	text : "#HYP3Life",
	textAlignment : "center",
	color : "white",
	fontSize : "25dp",
	top : "15%",
});

////instagram
var igButton = Ti.UI.createView({
	backgroundColor : "#3f729b",
	width : "33%",
	height : "10%",
	bottom : "10%",
	left : 0

});

var igView = Ti.UI.createImageView({
	image:"icons/icons_09.png",
	height:"80%"
});

var igLabel = Ti.UI.createLabel({
	//text : "instagram",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15dp",
		fontFamily : "Helvetica"
	}
});



var igWindow = Ti.UI.createWindow({
	backgroundColor : "pink",
	title : "#HYP3Life",
	//fullscreen : true
});

//////facebook page BUTTON

var fbButton = Ti.UI.createView({
	backgroundColor : "#3b5998",
	width : "33%",
	height : "10%",
	bottom : "10%"
	//top : 150,

});

var fbLabel = Ti.UI.createLabel({
	//text : "facebook",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15dp",
		fontFamily : "Helvetica"
	}
});

var fvView = Ti.UI.createImageView({
	image:"icons/icons_03.png",
	height:"80%"
});


var fbWindow = Ti.UI.createWindow({
	backgroundColor : "white",
	//fullscreen : true
});


fbButton.addEventListener('click', function() {
	var fbwindow = Ti.UI.createWindow();

	var fbWv = Titanium.UI.createWebView({
		url : 'https://www.facebook.com/HYP3Orlando'
	});
	fbwindow.add(fbWv);
	navigationWindow.open();
	navigationWindow.openWindow(fbwindow);
	//window.open({modal:true});

});

////twitter

var twitterButton = Ti.UI.createView({
	backgroundColor : "#55acee",
	width : "33%",
	height : "10%",
	right : "0%",
	bottom : "10%"

});

var twitterLabel = Ti.UI.createLabel({
	//text : "twitter",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15dp",
		fontFamily : "Helvetica"
	}
});

var twitterView = Ti.UI.createImageView({
	image:"icons/icons_06.png",
	height:"80%"
});

twitterButton.addEventListener('click', function() {
	var window = Ti.UI.createWindow();

	var twitterWind = Titanium.UI.createWebView({
		url : 'https://twitter.com/HYP3Orlando'
	});
	window.add(twitterWind);
	console.log(navigationWindow);
	navigationWindow.open();
	navigationWindow.openWindow(window);
	//window.open({modal:true});

});

////EVENT

var snapButton = Ti.UI.createView({
	backgroundColor : "#04B4AE",
	width : "33%",
	height : "10%",
	left : "0%",
	bottom : "0%"

});

var snapLabel = Ti.UI.createLabel({
	text : "Events",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15sp",
		fontFamily : "Helvetica"
	}
});

var snapWindow = Ti.UI.createWindow({
	backgroundColor : "yellow",
	//fullscreen : true
});

snapButton.addEventListener('click', function() {
	var eventWind = Ti.UI.createWindow();

	//var loadFile = require("custom");
	//navigationWindow.openWindow(customWindow);
	eventWind.open();
});

////contact

var contactButton = Ti.UI.createView({
	backgroundColor : "#58FA82",
	width : "33%",
	height : "10%",
	right : "0%",
	bottom : "0%"

});

var contactLabel = Ti.UI.createLabel({
	text : "Contact Us",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15sp",
		fontFamily : "Helvetica"
	}
});

var contactWindow = Ti.UI.createWindow({
	backgroundColor : "pink",
	//fullscreen : true
});

////camera

var cameraButton = Ti.UI.createView({
	backgroundColor : "#01DFD7",
	width : "33%",
	height : "10%",
	//left:"0%",
	bottom : "0%"

});

var cameraLabel = Ti.UI.createLabel({
	text : "Camera",
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15sp",
		fontFamily : "Helvetica"
	}
});

cameraButton.addEventListener('click', function() {
	Titanium.Media.showCamera({
		success : function(event) {
			var imageView = Ti.UI.createImageView({
				width : win.width,
				height : win.height,
				image : event.media
			});

		},
		saveToPhotoGallery : true
	});
});


fbLabel.add(fvView);
twitterLabel.add(twitterView);
igLabel.add(igView);
//adding up
cameraButton.add(cameraLabel);
contactButton.add(contactLabel);
snapButton.add(snapLabel);
twitterButton.add(twitterLabel);
igButton.add(igLabel);
fbButton.add(fbLabel);
mainWindow.add(hyp3Img);
mainWindow.add(tagLabel);
mainWindow.add(fbButton);
mainWindow.add(igButton);
mainWindow.add(twitterButton);
mainWindow.add(snapButton);
mainWindow.add(contactButton);
mainWindow.add(cameraButton);

//navigationWindow.open();
