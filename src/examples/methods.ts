Array.prototype.customMap = function <T, U>(
  this: T[],
  callback: (value: T, index: number, array: T[]) => U
) {
  const result: U[] = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 7, 20];
export const doubled = numbers.customMap((num) => num * 2);

Array.prototype.customReduce = function <T, U>(
  this: T[],
  callback: (
    accumulator: U,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => U,
  initialValue?: U
) {
  let accumulator: U;
  let startIndex: number;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0] as unknown as U;
    startIndex = 1;
  }
  for (let index = startIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }

  return accumulator;
};
