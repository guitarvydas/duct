const msg = require ('./message');
exports.find_connection = function (_me, etag) {
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.name === "_me") && (sender.etag === etag)) {

_ret = connection;
}
});
return  _ret;
}
