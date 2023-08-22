import { generateDunderMifflinIpsum } from '../src/index';

describe('generateDunderMifflinIpsum', () => {
  it('should generate a quote with author', () => {
    const ipsum = generateDunderMifflinIpsum();
    const regex = /^'.+' - .+$/;
    expect(ipsum).toMatch(regex);
  });
});
