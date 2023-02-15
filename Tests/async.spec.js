const getAsyncData = require("../Functions/async");

describe("Async Test", () => {
  it("Data Correctivity", async () => {
    const data = await getAsyncData(5);
    expect(data).toBeInstanceOf(Object);
    expect(data.name).toBe("Aren");
    expect(data.surname).toBe("Qochinyan");
    expect(data.age).toBeGreaterThanOrEqual(18);
  });
  it("Error Handle", async () => {
    try {
      await getAsyncData();
    } catch (e){
        expect(e.message).toBe("Unknown Time")
    }
  });
});
