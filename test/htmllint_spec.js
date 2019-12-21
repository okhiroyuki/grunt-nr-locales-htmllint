var exec = require('child_process').exec;
var should = require('should');

var REG_TOTAL = /\d+(?= errors in total)/gm;
var REG_CODES = /E\d+(?=\))/gm;

describe('nr_locales_htmllint', function () {
    it('success', (done) => {
        exec('grunt nr_locales_htmllint:default', function (err, output) {
            var total = Number(output.match(REG_TOTAL)[0]);
            var codes = output.match(REG_CODES);
            should.equal(total,0);
            should.equal(codes,null);
            done();
        });
    });

    it('unclosed tag', (done) => {
        exec('grunt nr_locales_htmllint:unclose_tag', function (err, output) {
            var total = Number(output.match(REG_TOTAL)[0]);
            var codes = output.match(REG_CODES);
            should.equal(total,1);
            should.equal(codes,'E042');
            done();
        });
    });
});