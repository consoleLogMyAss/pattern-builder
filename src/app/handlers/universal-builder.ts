export type Builder<T> = {
  [K in keyof T as K extends string
    ? `set${Capitalize<K>}`
    : never
  ]: (value: T[K]) => Builder<T>;
} & {
  build(): T;
};

export function builder<T>(): T {
  let buildData: any = {};

  return new Proxy({}, {
    get: (_, property: string, receiver: T) => {
      if (property === "build") {
        return () => buildData;
      }

      return (value: any) => {
        const key: string = property.toLowerCase().replace('set', '');
        buildData[key] = value;

        return receiver;
      };
    }
  }) as T;
}
