var xxx = {

    Main : function (_i) { 
	_ruleEnter ("Main");

	var i = _i._glue ().join ('');
	var _result = `${i}`; 
	_ruleExit ("Main");
	return _result; 
    },
    
    Implementation : function (_x) { 
	_ruleEnter ("Implementation");

	var x = _x._glue ();
	var _result = `${x}`; 
	_ruleExit ("Implementation");
	return _result; 
    },
    
    ContainerImplementation_withParam : function (_ki,_name,_lp,_formal,_rp,_b) { 
	_ruleEnter ("ContainerImplementation_withParam");

	var ki = _ki._glue ();
	var name = _name._glue ();
	var lp = _lp._glue ();
	var formal = _formal._glue ();
	var rp = _rp._glue ();
	var b = _b._glue ();
	var _result = `${ki}${name}${lp}${formal}${rp}${b}`; 
	_ruleExit ("ContainerImplementation_withParam");
	return _result; 
    },
    
    ContainerImplementation_noParam : function (_ki,_name,_b) { 
	_ruleEnter ("ContainerImplementation_noParam");

	var ki = _ki._glue ();
	var name = _name._glue ();
	var b = _b._glue ();
	var _result = `${ki}${name}${b}`; 
	_ruleExit ("ContainerImplementation_noParam");
	return _result; 
    },
    
    SynchronousLeafImplementation_withFormals : function (_ksync,_name,_karrow,_dl,_b) { 
	_ruleEnter ("SynchronousLeafImplementation_withFormals");

	var ksync = _ksync._glue ();
	var name = _name._glue ();
	var karrow = _karrow._glue ();
	var dl = _dl._glue ();
	var b = _b._glue ();
	var _result = `${ksync}${name}${karrow}${dl}${b}`; 
	_ruleExit ("SynchronousLeafImplementation_withFormals");
	return _result; 
    },
    
    SynchronousLeafImplementation_withoutFormals : function (_ksync,_name,_b) { 
	_ruleEnter ("SynchronousLeafImplementation_withoutFormals");

	var ksync = _ksync._glue ();
	var name = _name._glue ();
	var b = _b._glue ();
	var _result = `${ksync}${name}${b}`; 
	_ruleExit ("SynchronousLeafImplementation_withoutFormals");
	return _result; 
    },
    
    SequenceOfBoxes : function (_nb) { 
	_ruleEnter ("SequenceOfBoxes");

	var nb = _nb._glue ().join ('');
	var _result = `${nb}`; 
	_ruleExit ("SequenceOfBoxes");
	return _result; 
    },
    
    NestedBox : function (_b) { 
	_ruleEnter ("NestedBox");

	var b = _b._glue ();
	var _result = `${b}`; 
	_ruleExit ("NestedBox");
	return _result; 
    },
    
    NB : function (_b) { 
	_ruleEnter ("NB");

	var b = _b._glue ();
	var _result = `${b}`; 
	_ruleExit ("NB");
	return _result; 
    },
    
    Box : function (_klb,_bo,_b,_krb) { 
	_ruleEnter ("Box");

	var klb = _klb._glue ();
	var bo = _bo._glue ();
	var b = _b._glue ().join ('');
	var krb = _krb._glue ();
	var _result = `${klb}${bo}${b}${krb}`; 
	_ruleExit ("Box");
	return _result; 
    },
    
    BoxOperation : function (_op) { 
	_ruleEnter ("BoxOperation");

	var op = _op._glue ();
	var _result = `${op}`; 
	_ruleExit ("BoxOperation");
	return _result; 
    },
    
    When : function (_kwhen,_kmessages,_nb) { 
	_ruleEnter ("When");

	var kwhen = _kwhen._glue ();
	var kmessages = _kmessages._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kwhen}${kmessages}${nb}`; 
	_ruleExit ("When");
	return _result; 
    },
    
    FindConnectionFromMe : function (_kfind,_d,_kfrom,_kme,_kon,_kport,_d2,_nb) { 
	_ruleEnter ("FindConnectionFromMe");

	var kfind = _kfind._glue ();
	var d = _d._glue ();
	var kfrom = _kfrom._glue ();
	var kme = _kme._glue ();
	var kon = _kon._glue ();
	var kport = _kport._glue ();
	var d2 = _d2._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfind}${d}${kfrom}${kme}${kon}${kport}${d2}${nb}`; 
	_ruleExit ("FindConnectionFromMe");
	return _result; 
    },
    
    WhenAll : function (_kwhen,_kall,_pb,_nb) { 
	_ruleEnter ("WhenAll");

	var kwhen = _kwhen._glue ();
	var kall = _kall._glue ();
	var pb = _pb._glue ();
	var nb = _nb._glue ();
	var _result = `${kwhen}${kall}${pb}${nb}`; 
	_ruleExit ("WhenAll");
	return _result; 
    },
    
    Return : function (_karrow,_d,_nb) { 
	_ruleEnter ("Return");

	var karrow = _karrow._glue ();
	var d = _d._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${karrow]${d}${nb}`; 
	_ruleExit ("Return");
	return _result; 
    },
    
    CheckReturn : function (_kcheck,_kreturn,_s,_nb) { 
	_ruleEnter ("CheckReturn");

	var kcheck = _kcheck._glue ();
	var kreturn = _kreturn._glue ();
	var s = _s._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kcheck}${kreturn}${s}${nb}`; 
	_ruleExit ("CheckReturn");
	return _result; 
    },
    
    Cond : function (_kcond,_first,_rest) { 
	_ruleEnter ("Cond");

	var kcond = _kcond._glue ();
	var first = _first._glue ();
	var rest = _rest._glue ().join ('');
	var _result = `${kcond}${first}${rest}`; 
	_ruleExit ("Cond");
	return _result; 
    },
    
    CondClause : function (_klb,_p,_b,_krb) { 
	_ruleEnter ("CondClause");

	var klb = _klb._glue ();
	var p = _p._glue ();
	var b = _b._glue ();
	var krb = _krb._glue ();
	var _result = `${klb}${p}${b}${krb}`; 
	_ruleExit ("CondClause");
	return _result; 
    },
    
    FirstCondClause : function (_c) { 
	_ruleEnter ("FirstCondClause");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("FirstCondClause");
	return _result; 
    },
    
    RestCondClause : function (_c) { 
	_ruleEnter ("RestCondClause");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("RestCondClause");
	return _result; 
    },
    
    WithLock : function (_klock,_name,_nb) { 
	_ruleEnter ("WithLock");

	var klock = _klock._glue ();
	var name = _name._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${klock}${name}${nb}`; 
	_ruleExit ("WithLock");
	return _result; 
    },
    
    Find_withParams : function (_kfind,_name,_kin,_d,_kgiven,_pl,_karrow,_name2,_nb) { 
	_ruleEnter ("Find_withParams");

	var kfind = _kfind._glue ();
	var name = _name._glue ();
	var kin = _kin._glue ();
	var d = _d._glue ();
	var kgiven = _kgiven._glue ();
	var pl = _pl._glue ();
	var karrow = _karrow._glue ();
	var name2 = _name2._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfind}${name}${kin}${d}${kgiven}${pl}${karrow}${name2}${nb}`; 
	_ruleExit ("Find_withParams");
	return _result; 
    },
    
    Find_withoutParams : function (_kfind,_name,_kin,_d,_karrow,_name2,_nb) { 
	_ruleEnter ("Find_withoutParams");

	var kfind = _kfind._glue ();
	var name = _name._glue ();
	var kin = _kin._glue ();
	var d = _d._glue ();
	var karrow = _karrow._glue ();
	var name2 = _name2._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfind}${name}${kin}${d}${karrow}${name2}${nb}`; 
	_ruleExit ("Find_withoutParams");
	return _result; 
    },
    
    VarBox : function (_kvar,_name,_karrow,_klb,_dl,_krb,_nb) { 
	_ruleEnter ("VarBox");

	var kvar = _kvar._glue ();
	var name = _name._glue ();
	var karrow = _karrow._glue ();
	var klb = _klb._glue ();
	var dl = _dl._glue ();
	var krb = _krb._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kvar}${name}${karrow}${klb}${dl}${krb}${nb}`; 
	_ruleExit ("VarBox");
	return _result; 
    },
    
    Synonym_obj : function (_ksyn,_name,_keq,_klb,_dl,_krb,_nb) { 
	_ruleEnter ("Synonym_obj");

	var ksyn = _ksyn._glue ();
	var name = _name._glue ();
	var keq = _keq._glue ();
	var klb = _klb._glue ();
	var dl = _dl._glue ();
	var krb = _krb._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${ksyn}${name}${keq}${klb}${dl}${krb}${nb}`; 
	_ruleExit ("Synonym_obj");
	return _result; 
    },
    
    Synonym_solitary : function (_ksyn,_name,_keq,_dl,_nb) { 
	_ruleEnter ("Synonym_solitary");

	var ksyn = _ksyn._glue ();
	var name = _name._glue ();
	var keq = _keq._glue ();
	var dl = _dl._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${ksyn}${name}${keq}${dl}${nb}`; 
	_ruleExit ("Synonym_solitary");
	return _result; 
    },
    
    ForEvery_sugaredWithParams : function (_kfor,_kevery,_kitem,_kin,_d,_kgiven,_pl,_kassign,_name,_nb) { 
	_ruleEnter ("ForEvery_sugaredWithParams");

	var kfor = _kfor._glue ();
	var kevery = _kevery._glue ();
	var kitem = _kitem._glue ();
	var kin = _kin._glue ();
	var d = _d._glue ();
	var kgiven = _kgiven._glue ();
	var pl = _pl._glue ();
	var kassign = _kassign._glue ();
	var name = _name._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfor}${kevery}${kitem}${kin}${d}${kgiven}${pl}${kassign}${name}${nb}`; 
	_ruleExit ("ForEvery_sugaredWithParams");
	return _result; 
    },
    
    ForEvery_withParams : function (_kfor,_kevery,_name1,_kin,_d,_kgiven,_pl,_kassign,_name,_nb) { 
	_ruleEnter ("ForEvery_withParams");

	var kfor = _kfor._glue ();
	var kevery = _kevery._glue ();
	var name1 = _name1._glue ();
	var kin = _kin._glue ();
	var d = _d._glue ();
	var kgiven = _kgiven._glue ();
	var pl = _pl._glue ();
	var kassign = _kassign._glue ();
	var name = _name._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfor}${kevery}${name1}${kin}${d}${kgiven}${pl}${kassign}${name}${nb}`; 
	_ruleExit ("ForEvery_withParams");
	return _result; 
    },
    
    ForEvery_sugaredWithoutParams : function (_kfor,_kevery,_kitem,_kin,_d,_kassign,_name,_nb) { 
	_ruleEnter ("ForEvery_sugaredWithoutParams");

	var kfor = _kfor._glue ();
	var kevery = _kevery._glue ();
	var kitem = _kitem._glue ();
	var kin = _kin._glue ();
	var d = _d._glue ();
	var kassign = _kassign._glue ();
	var name = _name._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfor}${kevery}${kitem}${kin}${d}${kassign}${name}${nb}`; 
	_ruleExit ("ForEvery_sugaredWithoutParams");
	return _result; 
    },
    
    ForEvery_withoutParams : function (_kfor,_kevery,_name1,_kin,_d,_kassign,_name,_nb) { 
	_ruleEnter ("ForEvery_withoutParams");

	var kfor = _kfor._glue ();
	var kevery = _kevery._glue ();
	var name1 = _name1._glue ();
	var kin = _kin._glue ();
	var d = _d._glue ();
	var kassign = _kassign._glue ();
	var name = _name._glue ();
	var nb = _nb._glue ().join ('');
	var _result = `${kfor}${kevery}${name1}${kin}${d}${kassign}${name}${nb}`; 
	_ruleExit ("ForEvery_withoutParams");
	return _result; 
    },
    
    SynchronousCall_params : function (_kat,_d1,_karrow,_d2) { 
	_ruleEnter ("SynchronousCall_params");

	var kat = _kat._glue ();
	var d1 = _d1._glue ();
	var karrow = _karrow._glue ();
	var d2 = _d2._glue ();
	var _result = `${kat}${d1}${karrow}${d2}`; 
	_ruleExit ("SynchronousCall_params");
	return _result; 
    },
    
    SynchronousCall_noparams : function (_kat,_d1) { 
	_ruleEnter ("SynchronousCall_noparams");

	var kat = _kat._glue ();
	var d1 = _d1._glue ();
	var _result = `${kat}${d1}`; 
	_ruleExit ("SynchronousCall_noparams");
	return _result; 
    },
    
    Datum_field : function (_n,_kof,_d) { 
	_ruleEnter ("Datum_field");

	var n = _n._glue ();
	var kof = _kof._glue ();
	var d = _d._glue ();
	var _result = `${n}${kof}${d}`; 
	_ruleExit ("Datum_field");
	return _result; 
    },
    
    Datum_dottedField : function (_n,_kdot,_d) { 
	_ruleEnter ("Datum_dottedField");

	var n = _n._glue ();
	var kdot = _kdot._glue ();
	var d = _d._glue ();
	var _result = `${n}${kdot}${d}`; 
	_ruleExit ("Datum_dottedField");
	return _result; 
    },
    
    Datum_name : function (_n) { 
	_ruleEnter ("Datum_name");

	var n = _n._glue ();
	var _result = `${n}`; 
	_ruleExit ("Datum_name");
	return _result; 
    },
    
    Datum_port : function (_n) { 
	_ruleEnter ("Datum_port");

	var n = _n._glue ();
	var _result = `${n}`; 
	_ruleExit ("Datum_port");
	return _result; 
    },
    
    Datum_me : function (_n) { 
	_ruleEnter ("Datum_me");

	var n = _n._glue ();
	var _result = `${n}`; 
	_ruleExit ("Datum_me");
	return _result; 
    },
    
    Predicate_me : function (_left,_kis,_kme) { 
	_ruleEnter ("Predicate_me");

	var left = _left._glue ();
	var kis = _kis._glue ();
	var kme = _kme._glue ();
	var _result = `${left}${kis}${kme}`; 
	_ruleExit ("Predicate_me");
	return _result; 
    },
    
    Predicate_eq : function (_left,_eq,_right) { 
	_ruleEnter ("Predicate_eq");

	var left = _left._glue ();
	var eq = _eq._glue ();
	var right = _right._glue ();
	var _result = `${left}${eq}${right}`; 
	_ruleExit ("Predicate_eq");
	return _result; 
    },
    
    Predicate_ne : function (_left,_eq,_right) { 
	_ruleEnter ("Predicate_ne");

	var left = _left._glue ();
	var eq = _eq._glue ();
	var right = _right._glue ();
	var _result = `${left}${eq}${right}`; 
	_ruleExit ("Predicate_ne");
	return _result; 
    },
    
    PredicateBlock : function (_lb,_p1,_pm,_rb) { 
	_ruleEnter ("PredicateBlock");

	var lb = _lb._glue ();
	var p1 = _p1._glue ();
	var pm = _pm._glue ().join ('');
	var rb = _rb._glue ();
	var _result = `${lb}${p1}${pm}${rb}`; 
	_ruleExit ("PredicateBlock");
	return _result; 
    },
    
    PredicateMore : function (_p) { 
	_ruleEnter ("PredicateMore");

	var p = _p._glue ();
	var _result = `${p}`; 
	_ruleExit ("PredicateMore");
	return _result; 
    },
    
    ParameterList_list : function (_d,_kx,_pl) { 
	_ruleEnter ("ParameterList_list");

	var d = _d._glue ();
	var kx = _kx._glue ();
	var pl = _pl._glue ();
	var _result = `${d}${kx}${pl}`; 
	_ruleExit ("ParameterList_list");
	return _result; 
    },
    
    ParameterList_solitary : function (_d) { 
	_ruleEnter ("ParameterList_solitary");

	var d = _d._glue ();
	var _result = `${d}`; 
	_ruleExit ("ParameterList_solitary");
	return _result; 
    },
    
    DatumList_list : function (_d1,_kcomma,_d2) { 
	_ruleEnter ("DatumList_list");

	var d1 = _d1._glue ();
	var kcomma = _kcomma._glue ();
	var d2 = _d2._glue ();
	var _result = `${d1}${kcomma}${d2}`; 
	_ruleExit ("DatumList_list");
	return _result; 
    },
    
    DatumList_solitary : function (_d) { 
	_ruleEnter ("DatumList_solitary");

	var d = _d._glue ();
	var _result = `${d}`; 
	_ruleExit ("DatumList_solitary");
	return _result; 
    },
    
    name : function (_first,_rest) { 
	_ruleEnter ("name");

	var first = _first._glue ();
	var rest = _rest._glue ().join ('');
	var _result = `${first}${rest}`; 
	_ruleExit ("name");
	return _result; 
    },
    
    namecharFirst : function (_c) { 
	_ruleEnter ("namecharFirst");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("namecharFirst");
	return _result; 
    },
    
    namecharRest : function (_c) { 
	_ruleEnter ("namecharRest");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("namecharRest");
	return _result; 
    },
    
    separator : function (_sep) { 
	_ruleEnter ("separator");

	var sep = _sep._glue ();
	var _result = `${sep}`; 
	_ruleExit ("separator");
	return _result; 
    },
    
    keyword : function (_kw) { 
	_ruleEnter ("keyword");

	var kw = _kw._glue ();
	var _result = `${kw}`; 
	_ruleExit ("keyword");
	return _result; 
    },
    
    eol : function (_c) { 
	_ruleEnter ("eol");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("eol");
	return _result; 
    },
    
    space : function (_c) { 
	_ruleEnter ("space");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("space");
	return _result; 
    },
    
    comment : function (_c) { 
	_ruleEnter ("comment");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("comment");
	return _result; 
    },
    
    string : function (_dq1,_s,_dq2) { 
	_ruleEnter ("string");

	var dq1 = _dq1._glue ();
	var s = _s._glue ().join ('');
	var dq2 = _dq2._glue ();
	var _result = `${dq1}${s}${dq2}`; 
	_ruleExit ("string");
	return _result; 
    },
    
    dq : function (_c) { 
	_ruleEnter ("dq");

	var c = _c._glue ();
	var _result = `${c}`; 
	_ruleExit ("dq");
	return _result; 
    },
    
    _terminal: function () { return this.sourceString; },
    _iter: function (...children) { return children.map(c => c._glue ()); }
}

/*

  execTranspiler ]
  /Users/tarvydas/tools/pre/pre:273
  throw err;
  ^

  SyntaxError: Missing } in template expression
  at execTranspiler (/Users/tarvydas/tools/pre/pre:259:62)
  at internal_stranspile (/Users/tarvydas/tools/pre/pre:280:24)
  at expand (/Users/tarvydas/tools/pre/pre:299:18)
  at expandAll (/Users/tarvydas/tools/pre/pre:371:25)
  at pre (/Users/tarvydas/tools/pre/pre:409:20)
  at main (/Users/tarvydas/tools/pre/pre:433:18)
  at Object.<anonymous> (/Users/tarvydas/tools/pre/pre:449:1)
  at Module._compile (internal/modules/cjs/loader.js:1063:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
  at Module.load (internal/modules/cjs/loader.js:928:32)
  make: *** [dev] Error 1
*/
};

