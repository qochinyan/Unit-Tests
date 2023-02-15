const { getSquare, getRoot } = require("../Functions/math.js");

describe("Math Functions", () => {
  test("Square", () => {
    expect(getSquare(4)).toEqual(16);
    expect(getSquare(0)).toEqual(0);
    expect(getSquare(-5)).toEqual(25);
    expect(getSquare(-5)).not.toEqual(-25);
    expect(getSquare(-11111)).toBeGreaterThan(0);
  });
  test("Root", () => {
    expect(getRoot(4)).toEqual(2);
    expect(getRoot(16)).toEqual(4);
    expect(getRoot(-100)).not.toEqual(10);
    expect(getRoot(-100)).toBeNaN();
  });
  // func mock
  
});
