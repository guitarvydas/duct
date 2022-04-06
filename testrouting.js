
function Try_component () {
    var lambdas = {
	Try_component: function (_label) {
	    if (_label === 0) {
	    } else {
		this.panic (_label); 
	    }
	},
	skewerb: function (_label) {
	    if (_label === 0) {
	    } else {
		this.panic (_label); 
	    }
	},
	_endoflambdas: null
    };
    return (function () { this.lambdas.Try_component (0); });
}

