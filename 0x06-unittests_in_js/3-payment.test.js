const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('validate the usage of the Utils function', () => {
        const utils = sinon.spy(Utils);

        sendPaymentRequestToApi(100, 20);
        expect(utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(utils.calculateNumber.alwaysReturned(120)).to.be.true;
        utils.calculateNumber.restore();
    });
});
