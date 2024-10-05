declare global {
  interface Array<T> {
    customMap<U>(callback: (value: T, index: number, array: T[]) => U): U[];
    customReduce<T, U>(
      this: T[],
      callback: (
        accumulator: U,
        currentValue: T,
        currentIndex: number,
        array: T[]
      ) => U,
      initialValue?: U
    ): void;
  }
}

// This line is necessary for TypeScript to consider this file as a module.
export {};
