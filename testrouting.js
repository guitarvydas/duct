
function Try_component () {
    var lambdas = {
	Try_component: function (_label) {
	    if (_label === 0) {
		this.send ("portabc", true);
		this.send ("portabc", 123);
		this.send ("portabc", "def");
	    } else {
		this.panic (_label); 
	    }
	},
	_endoflambdas: null
    };
    return (function () { this.lambdas.Try_component (0); });
}

