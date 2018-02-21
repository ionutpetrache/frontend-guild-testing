(function () {
    'use strict';

    define([
        'runningCode',
        'chai',
    ], function (runningCode, chai) {
        var expect = chai.expect;
        var identity = runningCode.default;

        describe('the identity function', function () {
            beforeEach(() => {
            });
            afterEach(() => {
            });

            it('returns whatever you give her', function () {
                expect(identity(1)).to.be.eql(1);
            });
        });
    });
})();