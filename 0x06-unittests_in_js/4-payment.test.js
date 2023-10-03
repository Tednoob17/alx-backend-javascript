const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('validate the usage of the Utils function', () => {
        const spyUtils = sinon.stub(Utils, 'calculateNumber');
        const consoleSpy = sinon.spy(console, 'log');

        spyUtils.withArgs('SUM', 100, 20).returns(10);
        consoleSpy.withArgs('The total is: 10');

    });
});
