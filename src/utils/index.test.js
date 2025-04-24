// src/utils/index.test.js
import { pathToRegexp } from 'path-to-regexp';

describe('test pathToRegexp', () => {
  it('should match the exact path "/user"', () => {
    const re = pathToRegexp('/user');
    const match = re.exec('/user');
    expect(match && match[0]).toBe('/user');
  });

  it('should not match the path "/zh/user" with the pattern "/user"', () => {
    const re = pathToRegexp('/user');
    expect(re.exec('/zh/user')).toBeNull();
  });
});