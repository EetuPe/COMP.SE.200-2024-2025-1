import { describe, expect, test } from "@jest/globals";
import isArguments from "../src/isArguments";

describe("[C-20997] Function with arguments", () => {
  test("Expect the result to be true", () => {
    (function () {
      expect(isArguments(arguments)).toBe(true)
    })()
  })
});

describe("[C-20998] Checking if function arguments are arguments", () => {
  test("Expect the result to be true", () => {
    const args = (function(){ return arguments })(1, 2)
    expect(isArguments(args)).toBe(true);
  });
});

describe("[C-20999] Checking if function is arguments", () => {
  test("Expect the result to be false", () => {
    expect(isArguments(function () {})).toBe(false);
  });
});

describe("[C-21000] Checking if array is arguments", () => {
  test("Expect the result to be false", () => {
    expect(isArguments([1, 2])).toBe(false);
  });
});

describe("[C-21001] Checking if null is arguments", () => {
  test("Expect the result to be false", () => {
    expect(isArguments(null)).toBe(false);
  });
});

describe("[C-21005] Checking if number is arguments", () => {
  test("Expect the result to be false", () => {
    expect(isArguments(1)).toBe(false);
  });
});

describe("[C-21002] Checking if string is arguments", () => {
  test("Expect the result to be false", () => {
    expect(isArguments('hi')).toBe(false);
  });
});

describe("[C-21003] Checking if boolean is arguments", () => {
  test("Expect the result to be false", () => {
    expect(isArguments(true)).toBe(false);
  });
});