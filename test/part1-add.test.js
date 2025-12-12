import {describe, expect, test} from '@jest/globals';
import add from '../src/add.js';

describe("[C-20948] Call add with 3 parameters", () => {
  test("Expect the third parameter to be ignored", () => {
    expect(add(2, -2, 2)).toEqual(0);
  });
});

describe("[C-20949] Add positive number to positive number", () => {
  test("Expect 2 + 2 to equal 4", () => {
    expect(add(2, 2)).toEqual(4);
  });
});

describe("[C-20950] Add only one number", () => {
  test("Expect 2 to equal 2", () => {
    expect(add(2)).toEqual(2);
  });
});

describe("[C-20951] Add negative number to negative number", () => {
  test("Expect -2 + -2 to equal -4", () => {
    expect(add(-2, -2)).toEqual(-4);
  });
});

describe("[C-20952] Add negative number to positive number", () => {
  test("Expect -2 + 2 to equal 0", () => {
    expect(add(-2, 2)).toEqual(0);
  });
});

describe("[C-20953] Add negative number to third parameter", () => {
  test("Expect -2 + null + 2 to equal -2", () => {
    expect(add(-2, null, 2)).toEqual(-2);
  });
});

describe("[C-20954] Add float to positive number", () => {
  test("Expect 2.1 + 1 to equal 3.1", () => {
    expect(add(2.1, 1)).toEqual(3.1);
  });
});

describe("[C-20955] Add float to third parameter", () => {
  test("Expect 2.1 + null + 1 to equal 2.1", () => {
    expect(add(2.1, null, 1)).toEqual(2.1);
  });
});

describe("[C-20956] Add float to negative number", () => {
  test("Expect 2.1 + -2 to equal 0.1", () => {
    expect(add(2.1, -2)).toEqual(0.1);
  });
});

describe("[C-20957] Add string to positive number", () => {
  test("Expect '1' + -2 to equal '1-2'", () => {
    expect(add('1', -2)).toEqual('1-2');
  });
});

describe("[C-20959] Add string as only parameter", () => {
  test("Expect '1' to equal '1'", () => {
    expect(add('1')).toEqual('1');
  });
});

describe("[C-20960] Add string to two numbers", () => {
  test("Expect '1' + -2 + 2 to equal '1-2'", () => {
    expect(add('1', -2, 2)).toEqual('1-2');
  });
});

describe("[C-20961] Add zero to two positive numbers", () => {
  test("Expect 0 + 2 + 2 to equal 2", () => {
    expect(add(0, 2, 2)).toEqual(2);
  });
});

describe("[C-20962] Add zero to a positive number", () => {
  test("Expect 0 + 2 to equal 2", () => {
    expect(add(0, 2)).toEqual(2);
  });
});

describe("[C-20963] Add zero to third parameter", () => {
  test("Expect 0 + null + 2 to equal 0", () => {
    expect(add(0, null, 2)).toEqual(0);
  });
});

describe("[C-20964] Add zero to two negative numbers", () => {
  test("Expect 0 + -5 + -2 to equal -5", () => {
    expect(add(0, -5, -2)).toEqual(-5);
  });
});

describe("[C-20965] Add zero to a negative number", () => {
  test("Expect 0 + -3 to equal -3", () => {
    expect(add(0, -3)).toEqual(-3);
  });
});

describe("[C-20966] Add third parameter only", () => {
  test("Expect null + null + 1 to equal 0", () => {
    expect(add(null, null, 1)).toEqual(0);
  });
});

describe("[C-20967] Add only second parameter positive", () => {
  test("Expect null + 4 + null to equal 4", () => {
    expect(add(null, 4, null)).toEqual(4);
  });
});

describe("[C-20968] Add second and third parameters", () => {
  test("Expect null + -3 + 2 to equal -3", () => {
    expect(add(null, -3, 2)).toEqual(-3);
  });
});

describe("[C-20969] Add only second parameter negative", () => {
  test("Expect null + -3 + null to equal -3", () => {
    expect(add(null, -3, null)).toEqual(-3);
  });
});

describe("[C-20970] Add second and third parameters", () => {
  test("Expect null + 1 + -2 to equal 1", () => {
    expect(add(null, 1, -2)).toEqual(1);
  });
});