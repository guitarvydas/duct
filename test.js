
function testRead () {
    var rw = require ('./readwrapper');
    var testHarness = new rw.ReadWrapper ();
    testHarness.send ("filename", "test.txt");
    while (!testHarness.done ()) {
        testHarness.send ("req", true); 
        testHarness.step ();
    }
}

function testWrite () {
    var ww = require ('./writewrapper');
    var testHarness = new ww.WriteWrapper ();
    testHarness.send ("filename", "test.out");
        testHarness.step ();
    testHarness.send ("char", "x");
        testHarness.step ();
    testHarness.send ("char", "y");
        testHarness.step ();
    testHarness.send ("char", "z");
        testHarness.step ();
}

function testContainer () {
    var tw = require ('./topwrapper');
    var testHarness = new tw.TopWrapper ();
    testHarness.begin ('test.txt', 'test.out');
}

testRead ();
testWrite ();
testContainer ();

