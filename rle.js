function encode_re(input) {
    var encoding = [];
    input.match(/(.)\1*/g).forEach(function(substr){ encoding.push([substr.length, substr[0]]) });
    return encoding;
}

function decode(encoded) {
    var output = "";
    encoded.forEach(function(pair){ output += new Array(1+pair[0]).join(pair[1]) })
    return output;
}
