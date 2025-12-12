// add.test.js
import add from "../src/add";

describe('add', () => {
  describe('basic arithmetic', () => {
    test('adds two positive integers', () => {
      // Why: baseline sanity check for typical use
      // Expectation: 6 + 4 = 10
      expect(add(6, 4)).toBe(10);
    });

    test('adds a positive and a negative integer', () => {
      // Why: ensure handling of signed values
      // Expectation: 6 + (-4) = 2
      expect(add(6, -4)).toBe(2);
    });

    test('adds two negative integers', () => {
      // Why: confirm correct behavior with negative inputs
      // Expectation: (-6) + (-4) = -10
      expect(add(-6, -4)).toBe(-10);
    });

    test('identity element: adding zero returns the original number', () => {
      // Why: zero should be the identity in addition
      // Expectation: 9 + 0 = 9 and 0 + 9 = 9
      expect(add(9, 0)).toBe(9);
      expect(add(0, 9)).toBe(9);
    });

    test('commutativity: add(a, b) === add(b, a)', () => {
      // Why: addition should be commutative for numbers
      // Expectation: 3 + 7 equals 7 + 3
      expect(add(3, 7)).toBe(add(7, 3));
    });
  });

  describe('floating point numbers', () => {
    test('adds two floats with typical precision behavior', () => {
      // Why: highlight IEEE-754 precision quirks
      // Expectation: 0.1 + 0.2 !== 0.3 exactly, but close
      const result = add(0.1, 0.2);
      expect(result).not.toBe(0.3);
      expect(result).toBeCloseTo(0.3, 15); // within 1e-15
    });

    test('adds mixed integer and float', () => {
      // Why: mixed numeric types
      // Expectation: 5 + 0.25 = 5.25
      expect(add(5, 0.25)).toBeCloseTo(5.25, 15);
    });
  });

  describe('large numbers', () => {
    test('adds large integers without overflow in JS number range', () => {
      // Why: ensure correct behavior near safe integer bounds
      // Expectation: still produces a numeric sum, but may exceed Number.MAX_SAFE_INTEGER
      const a = Number.MAX_SAFE_INTEGER - 1; // 9007199254740990
      const b = 1;
      // Note: When exceeding MAX_SAFE_INTEGER, exact integer precision can be lost.
      expect(add(a, b)).toBe(Number.MAX_SAFE_INTEGER); // 9007199254740991
    });

    test('adding beyond MAX_SAFE_INTEGER loses integer precision', () => {
      // Why: document floating point limits
      // Expectation: 9007199254740991 + 1 cannot be represented exactly
      const a = Number.MAX_SAFE_INTEGER; // 9007199254740991
      const b = 1;
      const result = add(a, b);
      // result should be a number, but exact integer precision is not guaranteed
      expect(typeof result).toBe('number');
      // We avoid asserting exact equality; instead we note behavior
      // (Optional) Demonstrate it isn’t equal to a safely representable integer
      expect(result).not.toBe(Number.MAX_SAFE_INTEGER + 1); // illustrative
    });
  });

  describe('missing or undefined arguments (default value handling)', () => {
    test('add(x) uses default for missing second arg', () => {
      // Why: behavior with a single argument
      // Expectation: add(5) === 5 (since default addend is 0)
      expect(add(5)).toBe(5);
    });

    test('add(undefined, x) returns x', () => {
      // Why: default augend is 0 when undefined
      // Expectation: add(undefined, 7) === 7
      expect(add(undefined, 7)).toBe(7);
    });

    test('add() returns default (0)', () => {
      // Why: no inputs provided
      // Expectation: add() === 0
      expect(add()).toBe(0);
    });
  });

  describe('type coercion (if supported by createMathOperation)', () => {
    test('coerces numeric strings to numbers', () => {
      // Why: common JS pattern (like Lodash): "3" + "7" -> 10
      // Expectation: add('3', '7') === 10
      expect(add('3', '7')).toBe(10);
      expect(add('3', 7)).toBe(10);
      expect(add(3, '7')).toBe(10);
    });

    test('trims and coerces strings with whitespace', () => {
      // Why: robustness when inputs have whitespace
      // Expectation: add('  2  ', ' 8 ') === 10
      expect(add('  2  ', ' 8 ')).toBe(10);
    });

    test('non-numeric strings result in NaN', () => {
      // Why: document failure mode for invalid inputs
      // Expectation: add('foo', 1) is NaN, add('bar', 'baz') is NaN
      expect(Number.isNaN(add('foo', 1))).toBe(true);
      expect(Number.isNaN(add('bar', 'baz'))).toBe(true);
    });
  });

  describe('special values', () => {
    test('NaN propagates to result', () => {
      // Why: NaN handling should propagate
      // Expectation: adding NaN yields NaN
      expect(Number.isNaN(add(NaN, 1))).toBe(true);
      expect(Number.isNaN(add(1, NaN))).toBe(true);
    });

    test('Infinity behavior', () => {
      // Why: document Infinity semantics
      // Expectation: Infinity + 1 = Infinity; Infinity + (-Infinity) = NaN
      expect(add(Infinity, 1)).toBe(Infinity);
      expect(Number.isNaN(add(Infinity, -Infinity))).toBe(true);
    });

    test('-Infinity behavior', () => {
      // Why: document -Infinity semantics
      // Expectation: -Infinity + 1 = -Infinity; -Infinity + Infinity = NaN
      expect(add(-Infinity, 1)).toBe(-Infinity);
      expect(Number.isNaN(add(-Infinity, Infinity))).toBe(true);
    });
  });

  describe('invalid types', () => {
    test('objects are not coerced to numbers, result is NaN', () => {
      // Why: ensure invalid types fail gracefully
      // Expectation: add({}, 1) is NaN
      expect(Number.isNaN(add({}, 1))).toBe(true);
      expect(Number.isNaN(add(1, {}))).toBe(true);
    });

    test('symbols cause NaN', () => {
      // Why: Symbols are non-coercible to numbers
      // Expectation: add(Symbol('x'), 1) is NaN
      const s = Symbol('x');
      expect(Number.isNaN(add(s, 1))).toBe(true);
      expect(Number.isNaN(add(1, s))).toBe(true);
    });

    test('arrays: numeric single-element arrays may coerce, others are NaN', () => {
      // Why: array coercion nuances (Number([3]) === 3, Number([1,2]) === NaN)
      // Expectation: add([3], 7) === 10; add([1,2], 3) is NaN
      expect(add([3], 7)).toBe(10);
      expect(Number.isNaN(add([1, 2], 3))).toBe(true);
    });
  });
});
