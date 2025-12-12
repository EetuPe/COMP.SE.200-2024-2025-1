import { describe, expect, test } from "@jest/globals";
import castArray from "../src/castArray";

describe("[C-023] Cast number to array", () => {
  test("Expect cast 1 to equal [1]", () => {
    expect(castArray(1)).toEqual([1]);
  });
});

describe("[C-024] Cast object to array", () => {
  test("Expect cast {} to equal [{}]", () => {
    expect(castArray({})).toEqual([{}]);
  });
});

describe("[C-025] Cast string to array", () => {
  test("Expect cast '' to equal ['']", () => {
    expect(castArray("")).toEqual([""]);
  });
});

describe("[C-026] Cast undefined to array", () => {
  test("Expect cast undefined to equal [undefined]", () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });
});

describe("[C-027] Cast empty array to array", () => {
  test("Expect cast [] to equal [[]]", () => {
    expect(castArray([])).toEqual([[]]);
  });
});

describe("[C-028] Cast null to array", () => {
  test("Expect cast null to equal [null]", () => {
    expect(castArray(null)).toEqual([null]);
  });
});

describe("[C-029] Cast without args", () => {
  test("Expect cast without args to equal []", () => {
    expect(castArray()).toEqual([]);
  });
});

describe("[20861] Cast boolean to array", () => {
  test("Expect cast boolean to equal [true]", () => {
    expect(castArray(true)).toEqual([true]);
  });
});

describe("[20862] Cast function to array", () => {
  test("Expect cast function to equal []", () => {
    const fn = function () {};
    expect(castArray(fn)).toEqual([fn]);
  });
});

describe("[20863] Give the function too many parameters", () => {
  test("Expect the second argument to be ignored", () => {
    expect(castArray(1, 2)).toEqual([1]);
  });
});
