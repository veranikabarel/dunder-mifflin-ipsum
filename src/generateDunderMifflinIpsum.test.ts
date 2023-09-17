import { generateDunderMifflinIpsum } from "./index";

describe("generateDunderMifflinIpsum", () => {
  it("should generate a quote with author", () => {
    const ipsum = generateDunderMifflinIpsum();
    const regex = /^'.+' - .+$/;
    expect(ipsum).toMatch(regex);
  });
});
