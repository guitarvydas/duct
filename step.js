
exports.Try_component = function () {
var lambdas = {
main: function (_label) {
if (_label === 0) {
if (!this.has_children ()) {
 return this.try_self (1);
} else {

this.run_each_child ();
if (!this.child_produced_output ()) {
 return this.try_self (2);
} else {

return this.produced_output (0) ();

;}


;}

} else {
this.panic ("main", _label); 
}
},
try_self: function (_label) {
if (_label === 0) {
return try_self (1);
} else if (_label === 1) {

return try_self (2);
} else if (_label === 2) {
this.run_self ();
if (!this.self_produced_output ()) {
 return this.no_output (3);
} else {

return this.produced_output (0) ();

;}



} else {
this.panic ("try_self", _label); 
}
},
no_output: function (_label) {
if (_label === 0) {
return no_output (3);
} else if (_label === 3) {
this.send ("no_output", true);
return this.finished (0) ();



} else {
this.panic ("no_output", _label); 
}
},
produced_output: function (_label) {
if (_label === 0) {
this.send ("produced_output", true);
return this.finished (0) ();


} else {
this.panic ("produced_output", _label); 
}
},
finished: function (_label) {
if (_label === 0) {
this.end ();

} else {
this.panic ("finished", _label); 
}
},
_endoflambdas: null
};
return (function () { lambdas.main (0); });
}

