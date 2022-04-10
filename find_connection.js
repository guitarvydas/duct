exports.find_connection = function (etag) {
var _me = this;
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.component === "$me") && (sender.etag === etag)) {

_ret = connection;
}
});
if (_ret === null) {
console.error ("no value returned");
console.error (`connection not found for ${etag}`);
process.exit (1);}

return  _ret;
}
