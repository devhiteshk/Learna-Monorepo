'use strict';

const frontend1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(frontend1(), 'Hello from frontend1');
console.info('frontend1 tests passed');
