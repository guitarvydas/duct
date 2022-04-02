function Vehicle () {
    this.kind = "vehicle";
}

function Thing () {
    this.kind = "thing";
    var r = {};
    r.kind = "empty";
    return r;
}

function Thing2 () {
    this.kind = "thing2";
    return this;
}

function Thing3 () {
    this.kind = "thing3";
    var r = {};
    r.kind = "empty3";
    return this;
    return r;
}

function Thing4 () {
    this.kind = "thing4";
    var r = {};
    r.kind = "empty4";
    return r;
    return this;
}

var v = new Vehicle ();
var r = new Thing ();
var r2 = new Thing2 ();
var r3 = new Thing3 ();
var r4 = new Thing4 ();
console.log (v);
console.log (r);
console.log (r2);
console.log (r3);
console.log (r4);

