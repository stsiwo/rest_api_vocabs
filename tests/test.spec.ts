import { testFunc } from '../src/test';

test('basic', () => {
  expect(testFunc("satoshi")).toEqual("satoshi");
});
