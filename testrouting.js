
function Try_component () {
    var lambdas = {
	try_self C: function (_label) {
	    if (_label === 0) {
		return try_self (1);
	    } else if (_label === 1) {

		return try_self (2);
	    } else if (_label === 2) {
		this.func ();
		return this.produced_output (0) ();



		else {
		    this.panic ("try_self", _label); 
		}
	    },
	    no_output C: function (_label) {
		if (_label === 0) {
		    return no_output (3);
		} else if (_label === 3) {
		    this.funcX ();


		    else {
			this.panic ("no_output", _label); 
		    }
		},
		produced_output B: function (_label) {
		    if (_label === 0) {
			this.funcY ();

		    } else {
			this.panic ("produced_output", _label); 
		    }
		},
		_endoflambdas: null
	    };
	    return (function () { this.lambdas.Try_component (0); });
	}

