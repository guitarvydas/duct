exports.find_connection = function (etag) {
var _me = this;
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender.sender;

if ((sender.component === "$me") && (sender.etag === etag)) {

_ret = connection;
}
});
return  _ret;
}
