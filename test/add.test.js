import {describe, expect, test} from '@jest/globals';
import add from '../src/add.js';

describe("[C-001] Call add with 3 parameters", () => {
  test("Expect the third parameter to be ignored", () => {
    expect(add(2, -2, 2)).toEqual(0);
  });
});

describe("[C-002] Add positive number to positive number", () => {
  test("Expect 2 + 2 to equal 4", () => {
    expect(add(2, 2)).toEqual(4);
  });
});

describe("[C-003] Add only one number", () => {
  test("Expect 2 to equal 2", () => {
    expect(add(2)).toEqual(2);
  });
});

describe("[C-004] Add negative number to negative number", () => {
  test("Expect -2 + -2 to equal -4", () => {
    expect(add(-2, -2)).toEqual(-4);
  });
});

describe("[C-005] Add negative number to positive number", () => {
  test("Expect -2 + 2 to equal 0", () => {
    expect(add(-2, 2)).toEqual(0);
  });
});

describe("[C-006] Add negative number to third parameter", () => {
  test("Expect -2 + null + 2 to equal -2", () => {
    expect(add(-2, null, 2)).toEqual(-2);
  });
});

describe("[C-007] Add float to positive number", () => {
  test("Expect 2.1 + 1 to equal 3.1", () => {
    expect(add(2.1, 1)).toEqual(3.1);
  });
});

describe("[C-008] Add float to third parameter", () => {
  test("Expect 2.1 + null + 1 to equal 2.1", () => {
    expect(add(2.1, null, 1)).toEqual(2.1);
  });
});

describe("[C-009] Add float to negative number", () => {
  test("Expect 2.1 + -2 to equal 0.1", () => {
    expect(add(2.1, -2)).toEqual(0.1);
  });
});

describe("[C-010] Add string to positive number", () => {
  test("Expect '1' + -2 to equal '1-2'", () => {
    expect(add('1', -2)).toEqual('1-2');
  });
});

describe("[C-011] Add string as only parameter", () => {
  test("Expect '1' to equal '1'", () => {
    expect(add('1')).toEqual('1');
  });
});

describe("[C-012] Add string to two numbers", () => {
  test("Expect '1' + -2 + 2 to equal '1-2'", () => {
    expect(add('1', -2, 2)).toEqual('1-2');
  });
});

describe("[C-013] Add zero to two positive numbers", () => {
  test("Expect 0 + 2 + 2 to equal 2", () => {
    expect(add(0, 2, 2)).toEqual(2);
  });
});

describe("[C-014] Add zero to a positive number", () => {
  test("Expect 0 + 2 to equal 2", () => {
    expect(add(0, 2)).toEqual(2);
  });
});

describe("[C-015] Add zero to third parameter", () => {
  test("Expect 0 + null + 2 to equal 0", () => {
    expect(add(0, null, 2)).toEqual(0);
  });
});

describe("[C-016] Add zero to two negative numbers", () => {
  test("Expect 0 + -5 + -2 to equal -5", () => {
    expect(add(0, -5, -2)).toEqual(-5);
  });
});

describe("[C-017] Add zero to a negative number", () => {
  test("Expect 0 + -3 to equal -3", () => {
    expect(add(0, -3)).toEqual(-3);
  });
});

describe("[C-018] Add third parameter only", () => {
  test("Expect null + null + 1 to equal 0", () => {
    expect(add(null, null, 1)).toEqual(0);
  });
});

describe("[C-019] Add only second parameter positive", () => {
  test("Expect null + 4 + null to equal 4", () => {
    expect(add(null, 4, null)).toEqual(4);
  });
});

describe("[C-020] Add second and third parameters", () => {
  test("Expect null + -3 + 2 to equal -3", () => {
    expect(add(null, -3, 2)).toEqual(-3);
  });
});

describe("[C-021] Add only second parameter negative", () => {
  test("Expect null + -3 + null to equal -3", () => {
    expect(add(null, -3, null)).toEqual(-3);
  });
});

describe("[C-022] Add second and third parameters", () => {
  test("Expect null + 1 + -2 to equal 1", () => {
    expect(add(null, 1, -2)).toEqual(1);
  });
});