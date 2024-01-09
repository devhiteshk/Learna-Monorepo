'use strict';

const server1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(server1(), 'Hello from server1');
console.info('server1 tests passed');
