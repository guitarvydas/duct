const msg = require ('./message');
exports.find_connection_in__me = function (_me, childname, etag) {
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.component === childname) && (sender.etag === etag)) {

_ret = connection;
}
});
if (_ret === null) {
console.error ("no value returned");
console.error (`find_connection_in__me: connection not found for ${childname}:${etag}`);
process.exit (1);}

return  _ret;
}
