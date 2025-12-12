
// tests/castArray.test.js
import castArray from '../src/castArray.js'

describe('castArray', () => {
  describe('when called with no arguments', () => {
    it('returns an empty array', () => {
      const result = castArray()
      expect(Array.isArray(result)).toBe(true)
      expect(result).toEqual([])
    })
  })

  describe('when given an array', () => {
    it('returns the same array instance (pass-through)', () => {
      const array = [1, 2, 3]
      const result = castArray(array)
      expect(result).toBe(array) // reference equality check
      expect(result).toEqual([1, 2, 3])
    })
  })

  describe('when given primitives', () => {
    it('wraps a number in an array', () => {
      expect(castArray(1)).toEqual([1])
    })

    it('wraps a string in an array', () => {
      expect(castArray('abc')).toEqual(['abc'])
    })

    it('wraps a boolean in an array', () => {
      expect(castArray(true)).toEqual([true])
      expect(castArray(false)).toEqual([false])
    })

    it('wraps a bigint in an array', () => {
      expect(castArray(10n)).toEqual([10n])
    })

    it('wraps a symbol in an array', () => {
      const sym = Symbol('x')
      expect(castArray(sym)).toEqual([sym])
    })
  })

  describe('when given objects and functions', () => {
    it('wraps a plain object in an array', () => {
      const obj = { a: 1 }
      expect(castArray(obj)).toEqual([obj])
    })

    it('wraps a Date object in an array', () => {
      const date = new Date('2020-01-01T00:00:00Z')
      expect(castArray(date)).toEqual([date])
    })

    it('wraps a RegExp in an array', () => {
      const re = /test/i
      expect(castArray(re)).toEqual([re])
    })

    it('wraps a function in an array', () => {
      const fn = () => 42
      expect(castArray(fn)).toEqual([fn])
    })
  })

  describe('when given null or undefined explicitly', () => {
    it('wraps null in an array', () => {
      expect(castArray(null)).toEqual([null])
    })

    it('wraps undefined in an array', () => {
      expect(castArray(undefined)).toEqual([undefined])
    })
  })

  describe('with extra arguments', () => {
    it('only inspects the first argument and ignores the rest', () => {
      expect(castArray(1, 2, 3)).toEqual([1])
      const arr = [4]
      // Even with additional args, an array should pass through
      expect(castArray(arr, 'ignored', { x: 1 })).toBe(arr)
    })
  })

  describe('non-array iterables', () => {
    it('wraps a Set (non-array iterable) in an array, not spread', () => {
      const set = new Set([1, 2])
      const result = castArray(set)
      expect(result).toEqual([set]) // not [1, 2]
    })

    it('wraps a Map (non-array iterable) in an array, not spread', () => {
      const map = new Map([['a', 1]])
      const result = castArray(map)
      expect(result).toEqual([map])
    })
  })

  describe('strings as iterables', () => {
    it('wraps a string without splitting it', () => {
      const str = 'hello'
      const result = castArray(str)
      expect(result).toEqual(['hello']) // not ['h','e','l','l','o']
    })
  })
})
