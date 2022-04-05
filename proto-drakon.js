function Try_component () {
    var lambdas = {
	main: function (label) {
	    if (label === 0) {
		if (!this.has_children ()) {
		    return try_self (1);
		} else {
		    run_each_child ();
		    if (!this.child_produced_output ()) {
			return this.try_self (2);
		    } else {
			return this.produced_output (null);
		    }
		}
	    } else {
		this.panic ();
	    }
	},
	try_self: function (label) {
	    if (label === 0) {
		return this.try_self (1);
	    } else if (label === 1 ) {
		return this.try_self (2);
	    } else if (label === 2) {
		this.run_self ();
		if (!this.self_produced_output) {
		    return this.no_output (3);
		} else {
		    return this.produced_output (0);
		}
	    } else {
		this.panic ();
	    }
	},
	no_output: function (label) {
	    if (label === 0) {
		return this.no_output (3);
	    } else if (label === 3) {
		this.send ("no output", true);
		return this.finished (0);
	    } else {
		this.panic ();
	    }	    
	},
	produced_output: function (label) {
	    if (label === 0) {
		this.send ("produced output", true);
		return this.finished (0);
	    } else {
		this.panic ();
	    }
	},
	finished: function (label) {
	    if (label === 0) {
		return true;
	    } else {
		this.panic ();
	    }
	}
    };
    return function () { this.lambdas.main (0); }
}


	
		
