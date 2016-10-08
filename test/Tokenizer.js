var chai = require('chai');

var Tokenizer = require('../lib/Tokenizer');

var expect = chai.expect;

describe('token', function ()
{
    it('number', function ()
    {
        var tokenizer = new Tokenizer('5 5.12 0.2', 'number');

        var tokens = [],
            token = tokenizer.token();

        while (token)
        {
            tokens.push(token);
            token = tokenizer.token();
        }

        expect(tokens).to.eql([]);
    });
});