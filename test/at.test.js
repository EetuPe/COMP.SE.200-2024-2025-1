import {describe, expect, test} from '@jest/globals';
import at from '../src/at.js';

describe("[C-034] Finds object value, when only one path is given", () => {
  test("Expect at({a : 4}, 'a') to equal [4]", () => {
    expect(at({a : 4}, 'a')).toEqual([4]);
  });
});

describe("[C-035] Finds object value with nested array", () => {
  test("Expect at({a : [{ b : 1 },  {b : 2 }] },  'a[0].b', 'a[1].b') to equal [1, 2]", () => {
    expect(at({a : [{ b : 1 },  {b : 2 }] },  'a[0].b', 'a[1].b')).toEqual([1, 2]);
  });
});

describe("[C-036] Finds object value with multiple layer object", () => {
  test("Expect at({a : [{b : {c : 2}}, {d : 3}]},  'a[0].b.c', 'a[1].d') to equal [2, 3]", () => {
    expect(at({a : [{b : {c : 2}}, {d : 3}]},  'a[0].b.c', 'a[1].d')).toEqual([2, 3]);
  });
});

describe("[C-037] Tries to find object, which does not exist", () => {
  test("Expect at({a : 1 },  'b') to equal [undefined]", () => {
    expect(at({a : 1 },  'b')).toEqual([undefined]);
  });
});

describe("[C-038] tries to find object, path does not exist", () => {
  test("Expect at({a : 1 },  'a[2]') to equal [undefined]", () => {
    expect(at({a : 1 },  'a[2]')).toEqual([undefined]);
  });
});

describe("[C-039] tries to find object, path out of range", () => {
  test("Expect at({a : [{ b : 1 }] },  'a.b.c') to equal [undefined]", () => {
    expect(at({a : [{ b : 1 }] },  'a.b.c')).toEqual([undefined]);
  });
});

describe("[C-040] Non object as parameter", () => {
  test("Expect at(null,  'a') to equal [undefined]", () => {
    expect(at(null,  'a')).toEqual([undefined]);
  });
});

describe("[C-041] Negative path index", () => {
  test("Expect at({a : 4},  'a[-2]') to equal [undefined]", () => {
    expect(at({a : 4},  'a[-2]')).toEqual([undefined]);
  });
});

describe("[C-042] No path given", () => {
  test("Expect at({a : 1}) to equal [undefined]", () => {
    expect(at({a : 1})).toEqual([undefined]);
  });
});

describe("[C-043] Non string second parameter", () => {
  test("Expect at({a : 1}, null) to equal [undefined]", () => {
    expect(at({a : 1}, null)).toEqual([undefined]);
  });
});

describe("[C-044] Number as second parameter", () => {
  test("Expect at({a : 1}, 1) to equal [undefined]", () => {
    expect(at({a : 1}, 1)).toEqual([undefined]);
  });
});

describe("[C-045] Object has truth values", () => {
  test("Expect at({true : 'yes' }, true) to equal ['yes']", () => {
    expect(at({true : 'yes' }, true)).toEqual(['yes']);
  });
});
