export type Mutable<T extends object> = {
  -readonly [K in keyof T]: T[K];
};

export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
