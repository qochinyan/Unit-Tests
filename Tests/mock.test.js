const { testFunc } = require("../Functions/mock");

describe("Using Mock Test", () => {
  let fn;
  beforeEach(() => {
    fn = jest.fn((x) => x + x);
    // jest.clearMocks()
  });
  test("Manual Mock Test", () => {
    expect(testFunc(fn(10))).toEqual(100);
    // testFunc(fn(10));
    expect(fn).toBeCalledTimes(1);
    expect(fn.mock.calls.length).toBe(1);
  });
  test("Mock Return Value", () => {
    fn(10);
    expect(fn.mock.results[0].value).toBe(20);
  });
  test("Should work with New Rules", () => {
    fn.mockReturnValueOnce(10)
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(30)
      .mockReturnValue(100);
      expect(fn()).toBe(10)
      expect(fn()).toBe(20)
      expect(fn()).toBe(30)
      expect(fn()).toBe(100)
      expect(fn()).toBe(100)
  });
});
