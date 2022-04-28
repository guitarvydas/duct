
function testRead () {
    var rw = require ('./readwrapper');
    var testHarness = new rw.ReadWrapper ();
    testHarness.tracing = true;
    testHarness.send ("filename", "test1.txt");
    while (!testHarness.done ()) {
        testHarness.send ("req", true); 
        testHarness.step ();
        testHarness.route ();
    }
}

function testWrite () {
    var ww = require ('./writewrapper');
    var testHarness = new ww.WriteWrapper ();
    testHarness.send ("filename", "test.out");
    testHarness.step ();
    testHarness.route ();
    testHarness.send ("char", "x");
    testHarness.step ();
    testHarness.route ();
    testHarness.send ("char", "y");
    testHarness.step ();
    testHarness.route ();
    testHarness.send ("char", "z");
    testHarness.step ();
    testHarness.route ();
}

function testContainer () {
    var tw = require ('./topwrapper');
    var testHarness = new tw.TopWrapper ();
    
    //testHarness.tracing = true;
    
    testHarness.begin ('test1.txt', 'test.out');
    testHarness.route ();

    while (!testHarness.done ()) {
        testHarness.step ();
        testHarness.route ();
    }

    testHarness.route ();

    testHarness.finish ();
}

function testContainerContainer () {
    var ttw = require ('./toptopwrapper');
    var testHarness = new ttw.TopTopWrapper ();
    
    //testHarness.tracing = true;
    
    testHarness.begin ('test.txt', 'test.out');
    testHarness.route ();

    while (!testHarness.done ()) {
        testHarness.step ();
        testHarness.route ();
    }

    testHarness.finish ();
}

console.log ();
console.log ('read ...');
testRead ();

console.log ();
console.log ('write ...');
testWrite ();

console.log ();
console.log ();
console.log ('top ...');
testContainer ();

console.log ();
console.log ();
console.log ('top top ...');
testContainerContainer ();
