
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
    testHarness.send ("char", "x");
}

testRead ();
testWrite ();
