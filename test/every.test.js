import { describe, expect, test } from "@jest/globals";
import every from "../src/every";

describe("[C-20919] Null within array", () => {
  test("Should return false, when null in array", () => {
    expect(every([true, null], Boolean)).toEqual(false);
  });
});

describe("[C-20920] All values evaluate to true", () => {
  test("Should return true, when all values evaluate to true", () => {
    expect(every([true, 1], Boolean)).toEqual(true);
  });
});

describe("[C-20921] All values are strings", () => {
  test("Should return true, when all values evaluate to true", () => {
    expect(every(["foo", "bar"], String)).toEqual(true);
  });
});

describe("[C-20922] Null array", () => {
  test("Should return true", () => {
    expect(every(null, Boolean)).toEqual(true);
  });
});
