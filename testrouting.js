
function Sb () {
    var lambdas = {
	sb: function (_label) {
	    if (_label === 0) {
		this.func1 ();

		return sb (7);
	    } else if (_label === 7) {
		this.func2 ();


	    } else {
		this.panic ("sb", _label); 
	    }
	},
	_endoflambdas: null
    };
    return (function () { this.lambdas.Sb (0); });
}

