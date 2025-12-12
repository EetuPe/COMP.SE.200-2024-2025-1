import {describe, expect, test} from '@jest/globals';
import toFinite from '../src/toFinite.js';

describe("[C-20928] Integral to finite", () => {
  test("Expect to return the same integral", () => {
    expect(toFinite(0)).toEqual(0);
  });
});

describe("[C-20929] Float to finite", () => {
  test("Expect to return the same float", () => {
    expect(toFinite(2.2)).toEqual(2.2);
  });
});

describe("[C-20930] Negative integral to finite", () => {
  test("Expect to return the same negative integral", () => {
    expect(toFinite(-2)).toEqual(-2);
  });
});

describe("[C-20931] Smallest number to finite", () => {
  test("Expect to return the smallest number", () => {
    expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324);
  });
});

describe("[C-20932] Smallest number times 0.1 to finite", () => {
  test("Expect to return the smallest number times 0.1", () => {
    expect(toFinite(Number.MIN_VALUE * 0.1)).toEqual(5e-325);
  });
});

describe("[C-20933] Infinity to finite", () => {
  test("Expect to return the maximum finite number", () => {
    expect(toFinite(1/0)).toEqual(1.7976931348623157e+308);
  });
});

describe("[C-20934] Negative infinity to finite", () => {
  test("Expect to return the minimum finite number", () => {
    expect(toFinite(-1/0)).toEqual(-1.7976931348623157e+308);
  });
});

describe("[C-20935] Number string to finite", () => {
  test("Expect to return 2 for '2'", () => {
    expect(toFinite('2')).toEqual(2);
  });
});

describe("[C-20936] String to finite", () => {
  test("Expect to return 0 for 'a'", () => {
    expect(toFinite('a')).toEqual(0);
  });
});

describe("[C-20937] Boolean to finite", () => {
  test("Expect to return 1 for true", () => {
    expect(toFinite(true)).toEqual(1);
  });
});

describe("[C-20938] Null to finite", () => {
  test("Expect to return 0 for null", () => {
    expect(toFinite(null)).toEqual(0);
  });
});

describe("[C-20939] Number array to finite", () => {
  test("Expect to return 4 for [4]", () => {
    expect(toFinite([4])).toEqual(4);
  });
});

describe("[C-20940] Function array to finite", () => {
  test("Expect to return 5 for { valueOf: () => 5 }", () => {
    expect(toFinite({ valueOf: () => 5 })).toEqual(5);
  });
});

describe('[C-20941] Multiple number array to finite', () => {
  test("Expect to return 0 for [4, 3]", () => {
    expect(toFinite([4, 3])).toEqual(0);
  });
});

describe('[C-20942] Multiple parameters to finite', () => {
  test("Expect to ignore the second parameter", () => {
    expect(toFinite(1, 2)).toEqual(1);
  });
});

describe('[C-20943] Empty array to finite', () => {
  test("Expect to return 0 for []", () => {
    expect(toFinite([])).toEqual(0);
  });
});
