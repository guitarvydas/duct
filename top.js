function top () {
    let me = new mp.ContainerFunction ();
    
    me.signature = {
	kindName: 'example';
	inputPorts: ['output filename', 'input filename'];
	outputPorts: [];
    };

    let child1 = read ();
    let child2 = write ();

    me.children =  [ child1, child2 ];

    me.connections = [
	{ {me, 'input filename'}, "net1", { child1, 'input filename'} },
	{ {me, 'output filename'}, "net2", { child2, 'output filename'} },
	{ {child1, 'char'}, "net3", { child2, 'char'} }.
	{ {child2, 'request'}, "net4", { child1, 'request'} }
    ];

    // me.handler = default handler for Containers 

    me.nets = [{"net1", [child1]}, {"net2", [child2] }, {"net3", [child2] }, {"net4", [child1]}];

    me.initially = function (inputFilename, outputFilename) {
	me.send ('input filename', inputFilename);
	me.send ('output filename', outputFilename);
    };

    // me.finally = nothing, just die

    me.implementation = {me.handler, me.nets, me.children, me.connections};

    return me;
}
