exports.find_connection = function (etag) {
    var _me = this;
    var connection = _me.connections.forEach (item => {
	var sender = connection.sender;

	if (sender.component === _me && sender.etag === etag) {

	    return connection;
	}
    });
}
