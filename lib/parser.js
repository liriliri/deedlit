var Tokenizer = require('./Tokenizer'),
    util = require('./util');

exports.parse = function (src, fileName, lineNum)
{
    var parser = new Parser(new Tokenizer(src, fileName, lineNum));

    return parser.script();
};

var Parser = util.Class({
    initialize: function (tokenizer)
    {

    },
    script: function ()
    {

    }
});