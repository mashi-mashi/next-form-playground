// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any

type Primitive = null | undefined | string | number | boolean | symbol | bigint
type TupleKeys<T extends ReadonlyArray<AnyType>> = Exclude<keyof T, keyof AnyType[]>
type ArrayKey = number

export type IsTuple<T extends ReadonlyArray<AnyType>> = number extends T['length'] ? false : true

type PathImpl<K extends string | number, V> = V extends Primitive ? `${K}` : `${K}` | `${K}.${Path<V>}`

export type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKeys<T>]-?: PathImpl<K & string, T[K]>
      }[TupleKeys<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<K & string, T[K]>
    }[keyof T]
