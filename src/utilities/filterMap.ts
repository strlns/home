/**
 * Simple utility to combine map and filter in a single pass,
 * without pulling in a larger library to chain transformations lazily.
 *
 * Takes two callback parameters: mapper and predicate.
 * Both callbacks are optional.
 * The filter predicate optionally can use the mapped result as its second input parameter.
 *
 * TypeScript inference for generic types, works best with arrays/iterables containing values of uniform
 * type.
 *
 * Your mapping function should return uniform values as well, otherwise U will become a union type
 * or unknown.
 *
 * The whole function always returns a new array (like native map and filter).
 *
 * @param {Iterable<T>} array - The array or iterable to transform.
 * @param {(value: T, index: number) => U} [mapper=undefined] - The mapping function or undefined.
 *                      If undefined is passed, original values are returned untouched
 * @param {(value: T, mapperResult: U) => boolean} [predicate=undefined] - The predicate or undefined.
 *                      If undefined is passed, this function acts the same as Array.prototype.map,
 *                      or returns the original array (if the mapping callback is undefined as well).
 *                      The callback takes two parameters: the value from the original array and the mapped result.
 *                      If you only need the mapped result, simply ignore the first parameter.
 * @returns {(T|U)[]}
 */
export function filterMap<T, U>(
  array: T[],
  mapper: (value: T, index: number) => U,
  predicate: (value: T, mapperResult?: U) => boolean
): U[];
export function filterMap<T, U>(
  array: T[],
  mapper: undefined,
  predicate: (value: T, mapperResult?: U | T) => boolean
): T[];
export function filterMap<T, U>(
  array: T[],
  mapper: (value: T, index: number) => U,
  predicate: undefined
): U[];
export function filterMap<T, U>(
  array: Iterable<T>,
  mapper?: (value: T, index: number) => U,
  predicate?: (value: T, mapperResult?: U | T) => boolean
) {
  const result: (T | U)[] = [];
  const [hasPredicate, hasMapper] = [Boolean(predicate), Boolean(mapper)];
  let index = 0;
  for (const value of array) {
    const mapperResult = hasMapper ? mapper!(value, index) : value;
    if (!hasPredicate || predicate!(value, mapperResult)) {
      result.push(mapperResult);
    }
    index++;
  }
  return result;
}
