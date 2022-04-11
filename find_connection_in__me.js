exports.find_connection_in__me = function (_me, child, etag) {
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.component === child) && (sender.etag === etag)) {

_ret = connection;
}
});
if (_ret === null) {
console.error ("no value returned");
console.error (`connection not found for ${etag}`);
process.exit (1);}

return  _ret;
}
