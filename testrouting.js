
function Try_component () {
    var lambdas = {
	Try_component: function (_label) {
	    if (_label === 0) {
		if (!this.pred ()) {
		    return this.dest (5);
		} else {

		    ;}
	    } else {
		this.panic (_label); 
	    }
	},
	_endoflambdas: null
    };
    return (function () { this.lambdas.Try_component (0); });
}

