import { describe, expect, test } from "@jest/globals";
import drop from "../src/drop";

describe("[C-20864] Drop first argument not an array", () => {
  test("Expect drop with a non array first argument to return empty array", () => {
    expect(drop(1, 1)).toEqual([]);
  });
});

describe("[C-20865] Drop with no number", () => {
  test("Expect drop with no number to drop one element", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
});

describe("[C-20866] Drop two elements from array length 3", () => {
  test("Expect drop with number 2 to drop two element", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
});

describe("[C-20911] Drop five elements from array length 3", () => {
  test("Expect drop with number 5 to return empty array", () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });
});

describe("[C-20912] Drop zero elements", () => {
  test("Expect drop with number 0 to return the same array", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});

describe("[C-20913] Drop negative number of elements", () => {
  test("Expect drop with number -1 to return the same array", () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });
});

describe("[C-20914] String in place of number in drop", () => {
  test("Expect drop with string to return the same array", () => {
    expect(drop([1, 2, 3], "foo")).toEqual([1, 2, 3]);
  });
});

// NOTE: This was enough to reach 100% coverage
describe("[C-20915] Array in place of number in drop", () => {
  test("Expect drop with array to return the same array", () => {
    expect(drop([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe("[C-20916] Drop from null array", () => {
  test("Expect drop from null array return empty array", () => {
    expect(drop(null, 1)).toEqual([]);
  });
});

describe("[C-20917] Drop infinity from array", () => {
  test("Expect drop infinity from array to return empty array", () => {
    expect(drop([1, 2, 3], Infinity)).toEqual([]);
  });
});

describe("[C-20918] Call drop with 3 parameters", () => {
  test("Expect the third parameter to be ignored", () => {
    expect(drop([1, 2, 3], 1, 1)).toEqual([2, 3]);
  });
});
