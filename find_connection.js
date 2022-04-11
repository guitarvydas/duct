const msg = require ('./message');
exports.find_connection = function (_me, etag) {
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

if ((sender.name === "_me") && (sender.etag === etag)) {

_ret = connection;
}
});
if (_ret === null) {
console.error ("no value returned");
console.error (`find_connection: connection not found in ${this.name} for ${etag}`);
process.exit (1);}

return  _ret;
}
