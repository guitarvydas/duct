
function Try_component () {
var lambdas = {

a: function (_label) {
if (_label === 0) {
{}

else {
this.panic (); 
}
}
},

b: function (_label) {
if (_label === 0) {
{}

else {
this.panic (); 
}
}
},
null
}
return function () { this.lambdas.main (0); }
}
