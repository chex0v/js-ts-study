import sum from "./index";

describe("intro/sum", () => {
  it("should return sum of numbers", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
