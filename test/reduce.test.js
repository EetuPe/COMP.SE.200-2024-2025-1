import { describe, expect, test } from "@jest/globals";
import reduce from "../src/reduce";

describe("[C-20982] Working function with array", () => {
  test("Expect the result to be 6", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toEqual(6);
  });
});

describe("[C-20983] Working function with array, no start value", () => {
  test("Expect the result to be 6", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toEqual(6);
  });
});

describe("[C-20984] Working function with object", () => {
  test("Expect the result to be 5", () => {
    expect(reduce({a: 2, b: 3}, (sum, n) => sum + n, 0)).toEqual(5);
  });
});

describe("[C-20985] Working function with number", () => {
  test("Expect the result to be 5", () => {
    expect(reduce([5], (a, b) => a + b, 0)).toEqual(5);
  });
});

describe("[C-20986] Working function with empty array", () => {
  test("Expect the result to be 2", () => {
    expect(reduce([], (a, b) => a + b, 2)).toEqual(2);
  });
});

describe("[C-20987] Working function with empty object", () => {
  test("Expect the result to be 0", () => {
    expect(reduce({}, (a, b) => a + b, 0)).toEqual(0);
  });
});

describe("[C-20988] Working function with empty array and no start value", () => {
  test("Expect the result to be undefined", () => {
    expect(reduce([], (minus, a) => minus - a)).toEqual(undefined);
  });
});

describe("[C-20989] Working function and string in array", () => {
  test("Expect the result to be 'heyeverybody'", () => {
    expect(reduce(['hey', 'everybody'], (a, b) => a + b, '')).toEqual('heyeverybody');
  });
});

describe("[C-20990] Incorrect function", () => {
  test("Expect the result to throw", () => {
    expect(() => {
        reduce([1, 2], null, 1);
    }).toThrow();
  });
});

describe("[C-20991] More than three values in array", () => {
  test("Expect the result to be 15", () => {
    expect(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)).toEqual(15);
  });
});

describe("[C-20992] Working minus function, no start value", () => {
  test("Expect the result to be -13", () => {
    expect(reduce([1, 2, 3, 4, 5], (a, b) => a - b)).toEqual(-13);
  });
});