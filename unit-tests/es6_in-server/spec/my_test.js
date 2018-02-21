import {expect} from 'chai';
import identity from 'runningCode';

describe('the identity function', function () {
    beforeEach(() => {
    });
    afterEach(() => {
    });

    it('returns whatever you give her', function () {
        expect(identity(1)).to.be.eql(1);
    });
});
