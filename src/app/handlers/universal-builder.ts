export type Builder<T> = {
  [K in keyof T as K extends string
    ? `set${Capitalize<K>}`
    : never
  ]: (value: T[K]) => Builder<T>;
} & {
  build(): T;
};

export function builder<T>(): Builder<T> {
  let buildData: Partial<T> = {};

  return new Proxy({}, {
    get: (_, property: string, receiver: Builder<T>) => {
      if (property === "build") {
        return () => buildData;
      }

      return <K extends Extract<keyof T, string>>(value: T[K]) => {
        let key: K = property.replace('set', '') as K;
        key = key[0].toLowerCase() + key.slice(1) as K;

        buildData[key] = value;

        return receiver;
      };
    }
  }) as Builder<T>;
}
