
exports.Try_component = function () {
var _ret = undefined;
var lambdas = {
main: function (_me, _label) {
if (_label === 0) {
if (!_me.has_children ()) {
 return lambdas.try_self (_me, 1);
} else {

_me.step_each_child ();
if (!_me.child_wasActivated ()) {
 return lambdas.try_self (_me, 2);
} else {

return lambdas.activated (_me, 0);

;}


;}

} else {
_me.panic ("main", _label); 
}
},
try_self: function (_me, _label) {
if (_label === 0) {
return lambdas.try_self (_me, 1);
} else if (_label === 1) {

return lambdas.try_self (_me, 2);
} else if (_label === 2) {
_me.run_self ();
if (!_me.self_wasActivated ()) {
 return lambdas.not_activated (_me, 3);
} else {

return lambdas.activated (_me, 0);

;}



} else {
_me.panic ("try_self", _label); 
}
},
not_activated: function (_me, _label) {
if (_label === 0) {
return lambdas.not_activated (_me, 3);
} else if (_label === 3) {
_ret = false;
return lambdas.finished (_me, 0);



} else {
_me.panic ("not_activated", _label); 
}
},
activated: function (_me, _label) {
if (_label === 0) {
_ret = true;
return lambdas.finished (_me, 0);


} else {
_me.panic ("activated", _label); 
}
},
finished: function (_me, _label) {
if (_label === 0) {
return _ret;

} else {
_me.panic ("finished", _label); 
}
},
_endoflambdas: null
};
return (function (_me) { lambdas.main (_me, 0); });
}

