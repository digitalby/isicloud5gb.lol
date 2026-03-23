import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isIcloud5gb } from './index.js';

test('isIcloud5gb returns true', () => {
  assert.equal(isIcloud5gb(), true);
});

test('isIcloud5gb returns a boolean', () => {
  const result = isIcloud5gb();
  assert.equal(typeof result, 'boolean');
});

test('isIcloud5gb is idempotent', () => {
  // No matter how many times you ask, the answer does not change.
  const results = Array.from({ length: 5 }, () => isIcloud5gb());
  assert.ok(results.every(r => r === true));
});

test('isIcloud5gb is not false', () => {
  assert.equal(!isIcloud5gb(), false);
});
