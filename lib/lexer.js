var util = require('./util'),
    definition = require('./definition');

exports.Tokenizer = util.Class({
    initialize: function (src, fileName, lineNum)
    {
        util.extend(this, {
            cursor: 0,
            src: src,
            tokens: [],
            tokenIdx: 0,
            lookAhead: 0,
            fileName: fileName || '',
            lineNum: lineNum || 1
        });
    },
    done: function ()
    {

    },
    token: function ()
    {

    },
    peek: function ()
    {

    }
});