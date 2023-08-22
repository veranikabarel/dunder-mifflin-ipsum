import { getRandomIndex } from '../src';

describe('getRandomIndex', () => {
  it('should return an index within the given range', () => {
    const min = 0;
    const max = 5;
    const index = getRandomIndex(min, max);
    expect(index).toBeGreaterThanOrEqual(min);
    expect(index).toBeLessThanOrEqual(max);
  });

  it('should return the correct index when min and max are the same', () => {
    const min = 10;
    const max = 10;
    const index = getRandomIndex(min, max);
    expect(index).toBe(min);
  });
});
