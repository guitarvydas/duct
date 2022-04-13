
function testRead () {
    var rw = require ('./readwrapper');
    var testHarness = new rw.ReadWrapper ();
    testHarness.send ("filename", "test1.txt");

    testHarness.tracing = true;

    while (!testHarness.done ()) {
        testHarness.send ("req", true); 
        testHarness.step ();
        testHarness.route ();
    }
}

console.log ();
console.log ('read ...');
testRead ();
