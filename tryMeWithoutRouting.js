
function Try_component () {
    var lambdas = {

	main: function (_label) {
	    if (_label === 0) {
		if (!this.has_children ()) {
		    U0;
		    return this.try_self/1 (1);
		    U1;
		} else {
		    U1;

		    if (_label === 0) {
			this.run_each_child ();
			if (_label === 0) {
			    if (!this.child_produced_output ()) {
				U0;
				return this.try_self/2 (2);
				U1;
			    } else {
				U1;

				if (_label === 0) {
				    return this.produced_output ();
				}
				U0;}
			}
		    }
		    U0;}
	    }
	    else {
		this.panic (); 
	    }
	}
	return this.main (1);
    },

	try_self: function (_label) {
	    return try_self (1);
	} else if (_label === 1) {
	}
    return try_self (2);
} else if (_label === 2) {
    if (_label === 0) {
	this.run_self ();
	if (_label === 0) {
	    if (!this.self_produced_output ()) {
		U0;
		return this.no_output/3 (3);
		U1;
	    } else {
		U1;

		if (_label === 0) {
		    return this.produced_output ();
		}
		U0;}
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
    return no_output (3);
} else if (_label === 3) {
    if (_label === 0) {
	this.send ("no_output", true);
	if (_label === 0) {
	    return this.finished ();
	}
    }
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
	if (_label === 0) {
	    return this.finished ();
	}
    }
    else {
	this.panic (); 
    }
}
return this.produced_output (1);
},

finished: function (_label) {
    if (_label === 0) {
	this.end ();
    }
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
