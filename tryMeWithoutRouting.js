
function Try_component () {
    var lambdas = {

	main: function (_label) {
	    if (_label === 0) {
		if (!this.has_children ()) {
		    return this.try_self (1);
		} else {
		    this.run_each_child ();
		    if (!this.child_produced_output ()) {
			return this.try_self (2);
		    } else {
			return this.produced_output ();
		    }
		}
		else {
		    this.panic (); 
		}
	    }
	    return this.main (1);
	},

	try_self: function (_label) {
	    if (_label === 0) {

		return try_self (1);
	    } else if (_label === 1) {

		return try_self (2);
	    } else if (_label === 2) {
		this.run_self ();
		if (!this.self_produced_output ()) {
		    return this.no_output (3);
		} else {
		    return this.produced_output ();
		}
	    }
	}
	else {
	    this.panic (); 
	}
    }
    return this.try_self (1);
},

no_output: function (_label) {
    if (_label === 0) {

	return no_output (3);
    } else if (_label === 3) {
	this.send ("no_output", true);
	return this.finished ();
    }
    else {
	this.panic (); 
    }
}
return this.no_output (1);
},

produced_output: function (_label) {
    if (_label === 0) {
	this.send ("produced_output", true);
	return this.finished ();
	else {
	    this.panic (); 
	}
    }
    return this.produced_output (1);
},

finished: function (_label) {
    if (_label === 0) {
	this.end ();
	else {
	    this.panic (); 
	}
    }
    return this.finished (1);
},
null
}
return function () { this.lambdas.main (0); }
}
