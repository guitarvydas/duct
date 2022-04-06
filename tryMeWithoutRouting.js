
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
	    }
	},

	try_self: function (_label) {
	    if (_label === 0) {
		else if (_label === 1) {
		    else if (_label === 2) {
			this.run_self ();
			if (!this.self_produced_output ()) {
			    return this.no_output (3);
			} else {
			    return this.produced_output ();
			}
		    }
		}
	    }
	},

	no_output: function (_label) {
	    if (_label === 0) {
		else if (_label === 3) {
		    this.send ("no_output", true);
		    return this.finished ();
		}
	    }
	},

	produced_output: function (_label) {
	    if (_label === 0) {
		this.send ("produced_output", true);
		return this.finished ();
	    }
	},

	finished: function (_label) {
	    if (_label === 0) {
		this.end ();
	    }
	},
	null
    }
    return function () { this.lambdas.main (0); }
}
