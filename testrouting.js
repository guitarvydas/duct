
function Sb () {
    var lambdas = {
	sb D: function (_label) {
	    this.panic ("sb", _label); 
	},
	_endoflambdas: null
    };
    return (function () { this.lambdas.Sb (0); });
}

