import { describe, expect, test } from "@jest/globals";
import toString from "../src/toString";

describe("[C-] Null to string", () => {
  test("Should return empty string", () => {
    expect(toString(null)).toEqual("");
  });
});

describe("[C-] Undefined to string", () => {
  test("Should return empty string", () => {
    expect(toString(undefined)).toEqual("");
  });
});

describe("[C-] Array to string", () => {
  test("Should return array items separated by commas", () => {
    expect(toString([1, 2, 3])).toEqual("1,2,3");
  });
});

describe("[C-] String to string", () => {
  test("Should return the same string", () => {
    expect(toString("foo")).toEqual("foo");
  });
});

describe("[C-] Symbol to string", () => {
  test("Should return symbol name as string", () => {
    expect(toString(Symbol.iterator)).toEqual("Symbol(Symbol.iterator)");
  });
});

describe("[C-] Array with null to string", () => {
  test("Should return ','", () => {
    expect(toString([null, null])).toEqual(",");
  });
});

describe("[C-] Negative zero to string", () => {
  test("Should return '-0'", () => {
    expect(toString(-0)).toEqual("-0");
  });
});
