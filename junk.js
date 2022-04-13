var read = require ('./read');
var message = require ('./message');

function ReadWrapper () {
    this.name = "rw";
    this.begin = function () { ... };
    this.finish = function () { ... };
    this.isValidETagForUUT = isValidETagForUUT;
    this.isInputETag = isInputETag;
    this.send = function (etag, v) { ... };
    this._done = false;
    this.conclude = function () { this.container._done = true; };
    this.done = function () {return this._done;};
    this.route = function () { ... };
    this.step = function () {
	this.uut.step ();
        this.route ();
    };    
    this.uut =  new read.Read (this);
    this.children = [{name: "uut", runnable: this.uut}];
}

function isValidETagForUUT (etag) { ...
function isInputETag (etag) { ... 
function destructivelyDisplayAllOutputsForAllChildren (me) { ...
function displayAllOutputs (child) { ...
function recursiveDisplay (m) { ...
exports.ReadWrapper = ReadWrapper;
