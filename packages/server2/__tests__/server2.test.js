'use strict';

const server2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(server2(), 'Hello from server2');
console.info('server2 tests passed');
