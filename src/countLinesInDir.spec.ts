const { countLinesInDir } = require("./countLinesInDir");

describe("countLinesInDir", () => {
  it("should return number of lines of code in a directory", () => {
    const result = countLinesInDir("./src/example");

    expect(result).toBe("SLOC: 3");
  });
});
