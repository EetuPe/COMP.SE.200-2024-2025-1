import {describe, expect, test} from '@jest/globals';
import toFinite from '../src/toFinite.js';

describe("[C-] Integral to finite", () => {
  test("Expect to return the same integral", () => {
    expect(toFinite(0)).toEqual(0);
  });
});

describe("[C-] Float to finite", () => {
  test("Expect to return the same float", () => {
    expect(toFinite(2.2)).toEqual(2.2);
  });
});

describe("[C-] Negative integral to finite", () => {
  test("Expect to return the same negative integral", () => {
    expect(toFinite(-2)).toEqual(-2);
  });
});

describe("[C-] Float to finite", () => {
  test("Expect to return the same float", () => {
    expect(toFinite(2.2)).toEqual(2.2);
  });
});

describe("[C-] Smallest number to finite", () => {
  test("Expect to return the smallest number", () => {
    expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324);
  });
});

describe("[C-] Smallest number times 0.1 to finite", () => {
  test("Expect to return the smallest number times 0.1", () => {
    expect(toFinite(Number.MIN_VALUE * 0.1)).toEqual(5e-325);
  });
});

describe("[C-] Infinity to finite", () => {
  test("Expect to return the maximum finite number", () => {
    expect(toFinite(1/0)).toEqual(1.7976931348623157e+308);
  });
});

describe("[C-] Negative infinity to finite", () => {
  test("Expect to return the minimum finite number", () => {
    expect(toFinite(-1/0)).toEqual(-1.7976931348623157e+308);
  });
});

describe("[C-] Number string to finite", () => {
  test("Expect to return 2 for '2'", () => {
    expect(toFinite('2')).toEqual(2);
  });
});

describe("[C-] String to finite", () => {
  test("Expect to return 0 for 'a'", () => {
    expect(toFinite('a')).toEqual(0);
  });
});

describe("[C-] Boolean to finite", () => {
  test("Expect to return 1 for true", () => {
    expect(toFinite(true)).toEqual(1);
  });
});

describe("[C-] Null to finite", () => {
  test("Expect to return 0 for null", () => {
    expect(toFinite(null)).toEqual(0);
  });
});

describe("[C-] Number array to finite", () => {
  test("Expect to return 4 for [4]", () => {
    expect(toFinite([4])).toEqual(4);
  });
});

describe("[C-] Function array to finite", () => {
  test("Expect to return 5 for { valueOf: () => 5 }", () => {
    expect(toFinite({ valueOf: () => 5 })).toEqual(5);
  });
});

describe('[C-] Multiple number array to finite', () => {
  test("Expect to return 0 for [4, 3]", () => {
    expect(toFinite([4, 3])).toEqual(0);
  });
});

describe('[C-] Multiple parameters to finite', () => {
  test("Expect to ignore the second parameter", () => {
    expect(toFinite(1, 2)).toEqual(1);
  });
});

describe('[C-] Empty array to finite', () => {
  test("Expect to return 0 for []", () => {
    expect(toFinite([])).toEqual(0);
  });
});
