/*
ContainerFunction, // top level function->component transformer and component->function return
Container,
Leaf
*/

//////// component construction

function Signature (this) {
    this.kindName = '<noname Kind>';
    this.inputs = [];
    this.outputs = [];
}

function GenericComponent (this, prototypeComponent) {
    this.prototypeComponent = None;
    this.signature = new Signature ();
    this.implementation = {};
    let me = { signature, implementation };
    return me;
}


function ContainerDefaultImplementation (this) {
    this = new GenericComponent ();
    this.implementation.children = [];
    this.implementation.connections = [];
    this.implementation.handler = defaultContainerHandler;
}

function Container (this) {
    let me = new GenericComponent ();
    me.implementation = new ContainerDefaultImplementation ();
    return me;
}

function ContainerFunction (this) {
    let me = new Container ();
    me.implementation.initially = niy ();
    me.implementation.finally = niy ();
    return me;
}

function Leaf (this) {
    let me = new GenericComponent ();
    me.implementation = None;
    return me;
}

//////// component instantiation

function runtimeComponent (this) {
    this.inputQueue = new Queue ();
	 this.outputQueue = new Queue ();
	      
