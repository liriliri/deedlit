var util = require('./util');

exports.tokens = [
    'END',
    '\n',
    '=',
    '||', '&&', '!',
    '==', '!=',
    '<', '<=', '>=', '>',
    '+', '-', '*', '/', '%',
    '(', ')',
    'end',
    'continue', 'break',
    'if', 'else',
    'cmd', 'return',
    'loop',
    'true', 'false'
];

var whitespaceChars = ['\t', '\r', ' '],
    whitespace = {};

util.each(whitespaceChars, function (val) { whitespace[val] = true });
exports.whitespace = whitespace;


