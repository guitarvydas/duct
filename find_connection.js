exports.find_connection = function (etag) {
var _me = this;
var _ret =  null;

_me.connections.forEach (connection => {
var sender = connection.sender;

console.log (sender.component);
console.log ((sender.component === "$me"));
console.log (sender.etag);
console.log (etag);
console.log ((sender.etag === etag))

if ((sender.component === "$me") && (sender.etag === etag)) {

_ret = connection;
}
});
return  _ret;
}
