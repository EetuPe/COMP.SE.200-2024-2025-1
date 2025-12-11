import { describe, expect, test } from "@jest/globals";
import get from "../src/get";

const object = { a: [{ b: { c: 2 } }] };

describe("[C-] Path as string", () => {
  test("Should get child c correctly", () => {
    expect(get(object, "a[0].b.c")).toEqual(2);
  });
});

describe("[C-] Path as array", () => {
  test("Should get child c correctly", () => {
    expect(get(object, ["a", "0", "b", "c"])).toEqual(2);
  });
});

describe("[C-] Returns default for undefined", () => {
  test("Should return default correctly", () => {
    expect(get(object, "a.b.c", "foo")).toEqual("foo");
  });
});

describe("[C-] Returns default value for null", () => {
  test("Should return default correctly", () => {
    expect(get(null, "foo")).toEqual("foo");
  });
});
