function Vehicle () {
    this.kind = "vehicle";
}

function Thing () {
    this.subkind = "thing";
    var r = {};
    r.kind = "empty";
    return r;
}

function Thing2 () {
    this.subkind = "thing2";
    return this;
}

function Thing3 () {
    this.subkind = "thing3";
    var r = {};
    r.subkind = "empty3";
    // 2 returns in sequence
    return this;
    return r;
}

function Thing4 () {
    this.subkind = "thing4";
    var r = {};
    r.subkind = "empty4";
    // 2 returns flipped
    return r;
    return this;
}

function Thing5 () {
    this.subkind = "thing5";
    // r inherits from Vehicle
    var r = new Vehicle;
    r.subkind = "empty5";
    // 2 returns flipped
    return r;
    return this;
}

function Thing6 () {
    // this is an implicit arg
    console.log (this);
}

var v = new Vehicle ();
var r = new Thing ();
var r2 = new Thing2 ();
var r3 = new Thing3 ();
var r4 = new Thing4 ();
var r5 = new Thing5 ();
var r5a = Thing5 ();
var r4a = Thing4 ();
console.log (v);
console.log (r);
console.log (r2);
console.log (r3);
console.log (r4);
console.log (r5);
console.log (Object.keys (r5));
console.log (r5a);
console.log (r4a);

var r6 = new Thing6 ();
var r6a = Thing6 ();
console.log (r6);
console.log (r6a);
