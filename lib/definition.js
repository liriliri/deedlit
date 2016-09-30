var util = require('./util');

exports.tokens = [
    'END',
    '\n',
    '=', ':',
    '||', '&&', '!',
    '==', '!=', '<', '<=', '>=', '>',
    '+', '-', '*', '/', '%',
    '(', ')',
    'end',
    'continue', 'break',
    'if', 'else',
    'cmd', 'return',
    'loop',
    'true', 'false'
];

exports.whitespace = arrToMap(['\t', '\r', ' ']);

function arrToMap(arr)
{
    var ret = {};

    util.each(arr, function (val){ ret[val] = true });

    return ret;
}

