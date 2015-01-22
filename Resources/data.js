var read = function(lastID, username) {
	///database name is "igDB"
	var db = Ti.Database.open("igDB");
	/// table name is "igTBL"
	db.execute("CREATE TABLE IF NOT EXISTS igTBL (id INTEGER PRIMARY KEY, username TEXT)");
	db.execute("INSERT INTO igTBL (username) VALUES (?)", username);
	var dbRow = db.execute("SELECT * FROM igTBL WHERE id=?", lastID);
	
	//result set
	//var dbData = [];
	var dbPost = {};
	while (dbRow.isValidRow()) {
			dbPost.username = dbRow.fieldByName('username');
			
		dbRow.next();
	}
	dbRow.close();
	db.close();
	// console.log(dbPost);
	// api.buildUI(dbPost);

	return dbPost;
};


/// save to cloud
exports.saveToCloud = function(apiInfo) {
	console.log("cloud info: " +JSON.stringify(apiInfo));
	Cloud.Objects.create({
			classname : 'instagram',
			fields : {
				username : apiInfo.username,
				
			}
		}, function(e) {
			if (e.success) {
				console.log("saved!");
			} else {
				alert("cant save");
			}
		});

};


//////saving to local 
exports.save = function(apiInfo) {
	console.log("data page apiInfo" + JSON.stringify(apiInfo));
	var db = Ti.Database.open("igDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, username TEXT)");
	db.execute("INSERT INTO weatherTBL (username) VALUES (?)", apiInfo.username);
	
	var lastID = db.getLastInsertRowId();
	
	db.close();
	
	var saveData = read(lastID, apiInfo.username);
	return saveData;
	
	///its same thing as return 
	//read(lastID, apiInfo.username);
	
};


//exports.data = data;
