var rowData = [];
 
// // remote response from server 
var remoteResponse = function() {
	Ti.API.debug('Remote response received from serves\n===================');
	Ti.API.debug('Remote response received from serves\n===================' + this.status);
	Ti.API.debug('Remote response received from serves\n===================' + this.responseXML.documentElement);
	Ti.API.debug('Remote response received from serves\n===================' + this.responseText);
	Ti.API.debug(this.status);
	
	var json_data = this.reponseText;
	
	Ti.API.debug(JSON.stringify(json_data));
};

// // remote error handler to print errors
var remoteError = function(e) {
	Ti.API.debug('there was an error contactiong the remote server');
	Ti.API.debug('remote server status' + this.status);
	Ti.API.debug('application error' + e.error);
};

var xhr = Ti.Network.createHTTPClient({
	onload : remoteResponse,
	onerror : remoteError,
	timeOut : 3000
});

xhr.open('GET', 'https://www.google.com/calendar/feeds/hyp3orlando%40gmail.com/public/full?alt=json');
xhr.send();








