exports.find_connection_in__me = function (_me, childobj, etag) {
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.component === childobj.name) && (sender.etag === etag)) {

_ret = connection;
}
});
if (_ret === null) {
console.error ("no value returned");
console.error (`find_connection_in__me: connection not found for ${childobj.name}:${etag}`);
process.exit (1);}

return  _ret;
}
