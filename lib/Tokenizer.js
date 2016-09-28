var util = require('./util'),
    definition = require('./definition');

module.exports = util.Class({
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

    },
    skip: function ()
    {
        var src = this.src;

        while (1)
        {
            var c = src[this.cursor++];

            if (c === '\n')
            {
                this.lineNum++;
            } else if (c === '#')
            {
                this.cursor++;
                while (1)
                {
                    c = src[this.cursor++];
                    if (c === undefined) return;
                    if (c === '\n')
                    {
                        this.lineNum++;
                        break;
                    }
                }
            } else if (!definition.whitespace[c])
            {
                this.cursor--;

                return;
            }
        }
    },
    get: function ()
    {
        var token;

        this.skip();
    },
    unGet: function ()
    {

    }
});