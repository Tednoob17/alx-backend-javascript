const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    const tests = [
        { type: 'SUM', a: 1, b: 3, expected: 4 },
        { type: 'SUM', a: 1, b: 3.7, expected: 5 },
        { type: 'SUM', a: 1.2, b: 3.7, expected: 5 },
        { type: 'SUM', a: 1.5, b: 3.7, expected: 6 },
        { type: 'SUM', a: 1.4, b: 3.7, expected: 5 },
        { type: 'SUM', a: 0, b: 3.7, expected: 4 },
        { type: 'SUBTRACT', a: 1, b: 3, expected: -2 },
        { type: 'SUBTRACT', a: 1, b: 3.7, expected: -3 },
        { type: 'SUBTRACT', a: 1.2, b: 3.7, expected: -3 },
        { type: 'SUBTRACT', a: 1.5, b: 3.7, expected: -2 },
        { type: 'SUBTRACT', a: 1.4, b: 3.7, expected: -3 },
        { type: 'SUBTRACT', a: 0, b: 3.7, expected: -4 },
        { type: 'DIVIDE', a: 1, b: 3, expected: 0.3333333333333333 },
        { type: 'DIVIDE', a: 1, b: 3.7, expected: 0.25 },
        { type: 'DIVIDE', a: 1.2, b: 3.7, expected: 0.25 },
        { type: 'DIVIDE', a: 1.5, b: 3.7, expected: 0.5 },
        { type: 'DIVIDE', a: 1.4, b: 3.7, expected: 0.25 },
        { type: 'DIVIDE', a: 0, b: 3.7, expected: 0 },
    ];

    tests.forEach((test) => {
        it(`correctly ${test.type}s ${test.a} and ${test.b}`, () => {
            assert.strictEqual(calculateNumber(test.type, test.a, test.b), test.expected);
        });
    });
});
