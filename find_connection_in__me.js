exports.find_connection_in__me = function (_me, child, etag) {
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.component === child.name) && (sender.etag === etag)) {

_ret = connection;
}
});
if (_ret === null) {
console.error ("no value returned");
console.error (`find_connection_in__me: connection not found for ${child.name}${etag}`);
process.exit (1);}

return  _ret;
}
