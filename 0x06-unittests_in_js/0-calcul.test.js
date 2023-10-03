const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    const tests = [
        { a: 1, b: 3, expected: 4 },
        { a: 1, b: 3.7, expected: 5 },
        { a: 1.2, b: 3.7, expected: 5 },
        { a: 1.5, b: 3.7, expected: 6 },
        { a: 1.4, b: 3.7, expected: 5 },
        { a: 0, b: 3.7, expected: 4 }
    ];

    tests.forEach((test) => {
        it(`correctly adds ${test.a} and ${test.b}`, () => {
            assert.strictEqual(calculateNumber(test.a, test.b), test.expected);
        });
    });
});
