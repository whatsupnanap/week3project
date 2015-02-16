var mainWindow = Ti.UI.createWindow({
	backgroundColor : "black",
	navBarHidden : true

});

console.log(Ti.Platform.osname);

if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
	var navigationWindow = Titanium.UI.iOS.createNavigationWindow({
		window : mainWindow
	});
};

exports.buildUI = function(obj) {
	console.log("obj " + JSON.stringify(obj));

	var scrollView = Ti.UI.createScrollableView({
		width : '100%',
		height : '60%',
		top : "19%",
		backgroundColor : "black",
		showHorizontalScrollIndicator : true,
	});
	
	var views = [];

	for (var i = 0, j = obj.length; i < j; i++) {

		var mainView = Ti.UI.createView({
			layout : "vertical",
		});
		var igPic = Ti.UI.createImageView({
			image : obj[i].image,
			top : 0,
			width : Ti.UI.FILL,
		});

		var usernameLbl = Ti.UI.createLabel({
			font : { fontSize : "10dp" },
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
		if (t >= scrollView.views.length) {
			t = 0;
		}

		scrollView.scrollToView(t);
		t++;

	}, 3000);

	mainWindow.add(scrollView);
	mainWindow.open();
};

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
	bottom : "10.3%",
	left : 0

});

var igView = Ti.UI.createImageView({
	image : "icons/icons_09.png",
	height : "50%"
});

var igLabel = Ti.UI.createLabel({
	textAlignment : "center",
	color : "white",
	font : {
		fontSize : "15dp",
		fontFamily : "Helvetica"
	}
	
});

if (Ti.Platform.osname == "android") {
	igLabel.text = "instagram";
};

var igWindow = Ti.UI.createWindow({
	backgroundColor : "pink",
	title : "#HYP3Life",
});

igButton.addEventListener('click', function() {
	var igwindow = Ti.UI.createWindow();
	var igWv = Titanium.UI.createWebView({
		url : 'http://instagram.com/hyp3orlando'
	});
	igwindow.add(igWv);
	if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
	navigationWindow.open();
	navigationWindow.openWindow(igwindow);
	}else{
		igwindow.open();
	};
});

//////facebook page BUTTON
var fbButton = Ti.UI.createView({
	backgroundColor : "#3b5998",
	width : "33%",
	height : "10%",
	bottom : "10.3%"
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

if (Ti.Platform.osname == "android") {
	fbLabel.text = "facebook";
};

var fvView = Ti.UI.createImageView({
	image : "icons/icons_03.png",
	height : "50%"
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
	
	if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
	navigationWindow.open();
	navigationWindow.openWindow(fbwindow);
	}else{
		fbwindow.open();
	};
	
	//window.open({modal:true});

});

////twitter

var twitterButton = Ti.UI.createView({
	backgroundColor : "#55acee",
	width : "33%",
	height : "10%",
	right : "0%",
	bottom : "10.3%"

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

if (Ti.Platform.osname == "android") {
	twitterLabel.text = "twitter";
};

var twitterView = Ti.UI.createImageView({
	image : "/icons/icons_06.png",
	height : "50%"
});

twitterButton.addEventListener('click', function() {
	var window = Ti.UI.createWindow();

	var twitterWind = Titanium.UI.createWebView({
		url : 'https://twitter.com/HYP3Orlando'
	});
	window.add(twitterWind);
	if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
	navigationWindow.open();
	navigationWindow.openWindow(window);
	}else{
		window.open();
	};
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
	// TODO Change this to use API module with callback
	var calendar = require('calendar');
	
	navigationWindow.open();
	navigationWindow.openWindow(snapWindow);
	snapWindow.open();
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

var emailDialog = Titanium.UI.createEmailDialog({
	messageBody : "<br /><br /><br /><br /><br /><br /><br /><br />Sent from the HYP3 App",
	html:true,
	toRecipients:['hyp3orlando@gmail.com']
});

contactButton.addEventListener('click', function() {
	Ti.API.info('Mail');
	emailDialog.open();
});

emailDialog.addEventListener('complete', function(e) {
	if (e.success) {
		Ti.API.info("Mail Sent");
	} else {
		Ti.API.info(e.error);
		//"system can't send email" means no account on device"
	}
});

//contactwindow.add(twitterWind);
//navigationWindow.open();
//navigationWindow.openWindow(contactwindow);
//window.open({modal:true});

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
