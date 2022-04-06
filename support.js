exports.mangle = function (s) {
    return s.replace (/-/g, "_");
}

const re = /(.*)\/(.*)/;

exports.formatIndex = function (s) {
    // hmm, this works, but could be simpler (if we returned objects instead of strings)
    let groups = s.match (re);
    return `${groups[2]}`;
}

exports.formatLabelFunction = function (s) {
    // hmm, this works, but could be simpler (if we returned objects instead of strings)
    let groups = s.match (re);
    return `${groups[1]} (${groups[2]})`;
}

