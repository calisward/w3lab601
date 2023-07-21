import { helloWorld } from './helloWorld';

describe('helloWorld', () => {
  test('prints Hello World', () => {
    expect(helloWorld()).toBe('Hello, world!');
  });
});