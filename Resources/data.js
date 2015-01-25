var api = require("api");
var win = require("window");

var read = function() {
	///database name is "igDB"
	var db = Ti.Database.open("igDB");
	console.log("open the DB");
	/// table name is "igTBL"
	db.execute("CREATE TABLE IF NOT EXISTS igTBL (id INTEGER PRIMARY KEY, username TEXT, image TEXT)");
	console.log("creat table");
	var dbRow = db.execute("SELECT * FROM igTBL");

	//result set
	var dbData = [];
	//var dbPost = {};
	//var dvPost = new Object();
	while (dbRow.isValidRow()) {
		//dvPost.username = dbRow.fieldByName('username');
		dbData.push({
			username:dbRow.fieldByName('username'),
			image:dbRow.fieldByName('image')
		});

		dbRow.next();
	}
	dbRow.close();
	db.close();
	// console.log(dbPost);
	win.buildUI(dbData);
	//api.buildUI(dbData);

};

/// save to cloud
exports.saveToCloud = function(apiInfo) {
	//console.log("cloud info: " + JSON.stringify(apiInfo));
	for ( i = 0,
	j = apiInfo.length; i < j; i++) {
		Cloud.Objects.create({

			classname : 'instagram',
			fields : {
				username : apiInfo[i].username,
				image : apiInfo[i].url

			}
		}, function(e) {
			if (e.success) {
				console.log("saved!");
			} else {
				alert("cant save");
			}
		});

	};

};

//////saving to local
exports.save = function(apiInfo) {
	//console.log("data page apiInfo" + JSON.stringify(apiInfo));
	var db = Ti.Database.open("igDB");
	db.execute("CREATE TABLE IF NOT EXISTS igTBL (id INTEGER PRIMARY KEY, username TEXT, image TEXT)");
	////// add more atuff apiInfo.images etc....
	for(i=0,j=apiInfo.length;i<j;i++){
		db.execute("INSERT INTO igTBL (username,image) VALUES (?,?)", apiInfo[i].username,apiInfo[i].images);
		}

	var lastID = db.getLastInsertRowId();

	db.close();

	read();

	///its same thing as return
	//read(lastID, apiInfo.username);

};

//exports.data = data;
