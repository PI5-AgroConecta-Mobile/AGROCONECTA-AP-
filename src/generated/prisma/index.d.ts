
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model HARVEST
 * 
 */
export type HARVEST = $Result.DefaultSelection<Prisma.$HARVESTPayload>
/**
 * Model ADDRESS
 * 
 */
export type ADDRESS = $Result.DefaultSelection<Prisma.$ADDRESSPayload>
/**
 * Model PRODUCT
 * 
 */
export type PRODUCT = $Result.DefaultSelection<Prisma.$PRODUCTPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hARVEST`: Exposes CRUD operations for the **HARVEST** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HARVESTS
    * const hARVESTS = await prisma.hARVEST.findMany()
    * ```
    */
  get hARVEST(): Prisma.HARVESTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aDDRESS`: Exposes CRUD operations for the **ADDRESS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ADDRESSES
    * const aDDRESSES = await prisma.aDDRESS.findMany()
    * ```
    */
  get aDDRESS(): Prisma.ADDRESSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pRODUCT`: Exposes CRUD operations for the **PRODUCT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRODUCTS
    * const pRODUCTS = await prisma.pRODUCT.findMany()
    * ```
    */
  get pRODUCT(): Prisma.PRODUCTDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    HARVEST: 'HARVEST',
    ADDRESS: 'ADDRESS',
    PRODUCT: 'PRODUCT'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "hARVEST" | "aDDRESS" | "pRODUCT"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      HARVEST: {
        payload: Prisma.$HARVESTPayload<ExtArgs>
        fields: Prisma.HARVESTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HARVESTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HARVESTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>
          }
          findFirst: {
            args: Prisma.HARVESTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HARVESTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>
          }
          findMany: {
            args: Prisma.HARVESTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>[]
          }
          create: {
            args: Prisma.HARVESTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>
          }
          createMany: {
            args: Prisma.HARVESTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HARVESTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>[]
          }
          delete: {
            args: Prisma.HARVESTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>
          }
          update: {
            args: Prisma.HARVESTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>
          }
          deleteMany: {
            args: Prisma.HARVESTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HARVESTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HARVESTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>[]
          }
          upsert: {
            args: Prisma.HARVESTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HARVESTPayload>
          }
          aggregate: {
            args: Prisma.HARVESTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHARVEST>
          }
          groupBy: {
            args: Prisma.HARVESTGroupByArgs<ExtArgs>
            result: $Utils.Optional<HARVESTGroupByOutputType>[]
          }
          count: {
            args: Prisma.HARVESTCountArgs<ExtArgs>
            result: $Utils.Optional<HARVESTCountAggregateOutputType> | number
          }
        }
      }
      ADDRESS: {
        payload: Prisma.$ADDRESSPayload<ExtArgs>
        fields: Prisma.ADDRESSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ADDRESSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ADDRESSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>
          }
          findFirst: {
            args: Prisma.ADDRESSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ADDRESSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>
          }
          findMany: {
            args: Prisma.ADDRESSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>[]
          }
          create: {
            args: Prisma.ADDRESSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>
          }
          createMany: {
            args: Prisma.ADDRESSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ADDRESSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>[]
          }
          delete: {
            args: Prisma.ADDRESSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>
          }
          update: {
            args: Prisma.ADDRESSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>
          }
          deleteMany: {
            args: Prisma.ADDRESSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ADDRESSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ADDRESSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>[]
          }
          upsert: {
            args: Prisma.ADDRESSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADDRESSPayload>
          }
          aggregate: {
            args: Prisma.ADDRESSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateADDRESS>
          }
          groupBy: {
            args: Prisma.ADDRESSGroupByArgs<ExtArgs>
            result: $Utils.Optional<ADDRESSGroupByOutputType>[]
          }
          count: {
            args: Prisma.ADDRESSCountArgs<ExtArgs>
            result: $Utils.Optional<ADDRESSCountAggregateOutputType> | number
          }
        }
      }
      PRODUCT: {
        payload: Prisma.$PRODUCTPayload<ExtArgs>
        fields: Prisma.PRODUCTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRODUCTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRODUCTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          findFirst: {
            args: Prisma.PRODUCTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRODUCTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          findMany: {
            args: Prisma.PRODUCTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>[]
          }
          create: {
            args: Prisma.PRODUCTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          createMany: {
            args: Prisma.PRODUCTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PRODUCTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>[]
          }
          delete: {
            args: Prisma.PRODUCTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          update: {
            args: Prisma.PRODUCTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          deleteMany: {
            args: Prisma.PRODUCTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PRODUCTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PRODUCTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>[]
          }
          upsert: {
            args: Prisma.PRODUCTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          aggregate: {
            args: Prisma.PRODUCTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePRODUCT>
          }
          groupBy: {
            args: Prisma.PRODUCTGroupByArgs<ExtArgs>
            result: $Utils.Optional<PRODUCTGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRODUCTCountArgs<ExtArgs>
            result: $Utils.Optional<PRODUCTCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    hARVEST?: HARVESTOmit
    aDDRESS?: ADDRESSOmit
    pRODUCT?: PRODUCTOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userType: number | null
    sellings: number | null
    rate: number | null
    contactType: number | null
  }

  export type UserSumAggregateOutputType = {
    userType: number | null
    sellings: number | null
    rate: number | null
    contactType: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpfcpnj: string | null
    email: string | null
    password: string | null
    userType: number | null
    createDate: Date | null
    sellings: number | null
    rate: number | null
    imgUrl: string | null
    contact: string | null
    contactType: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpfcpnj: string | null
    email: string | null
    password: string | null
    userType: number | null
    createDate: Date | null
    sellings: number | null
    rate: number | null
    imgUrl: string | null
    contact: string | null
    contactType: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    cpfcpnj: number
    email: number
    password: number
    userType: number
    createDate: number
    sellings: number
    rate: number
    imgUrl: number
    contact: number
    contactType: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userType?: true
    sellings?: true
    rate?: true
    contactType?: true
  }

  export type UserSumAggregateInputType = {
    userType?: true
    sellings?: true
    rate?: true
    contactType?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    cpfcpnj?: true
    email?: true
    password?: true
    userType?: true
    createDate?: true
    sellings?: true
    rate?: true
    imgUrl?: true
    contact?: true
    contactType?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    cpfcpnj?: true
    email?: true
    password?: true
    userType?: true
    createDate?: true
    sellings?: true
    rate?: true
    imgUrl?: true
    contact?: true
    contactType?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    cpfcpnj?: true
    email?: true
    password?: true
    userType?: true
    createDate?: true
    sellings?: true
    rate?: true
    imgUrl?: true
    contact?: true
    contactType?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    cpfcpnj: string
    email: string
    password: string
    userType: number
    createDate: Date
    sellings: number
    rate: number
    imgUrl: string
    contact: string
    contactType: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpfcpnj?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createDate?: boolean
    sellings?: boolean
    rate?: boolean
    imgUrl?: boolean
    contact?: boolean
    contactType?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpfcpnj?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createDate?: boolean
    sellings?: boolean
    rate?: boolean
    imgUrl?: boolean
    contact?: boolean
    contactType?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpfcpnj?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createDate?: boolean
    sellings?: boolean
    rate?: boolean
    imgUrl?: boolean
    contact?: boolean
    contactType?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    cpfcpnj?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createDate?: boolean
    sellings?: boolean
    rate?: boolean
    imgUrl?: boolean
    contact?: boolean
    contactType?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpfcpnj" | "email" | "password" | "userType" | "createDate" | "sellings" | "rate" | "imgUrl" | "contact" | "contactType", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpfcpnj: string
      email: string
      password: string
      userType: number
      createDate: Date
      sellings: number
      rate: number
      imgUrl: string
      contact: string
      contactType: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly cpfcpnj: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly userType: FieldRef<"user", 'Int'>
    readonly createDate: FieldRef<"user", 'DateTime'>
    readonly sellings: FieldRef<"user", 'Int'>
    readonly rate: FieldRef<"user", 'Float'>
    readonly imgUrl: FieldRef<"user", 'String'>
    readonly contact: FieldRef<"user", 'String'>
    readonly contactType: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model HARVEST
   */

  export type AggregateHARVEST = {
    _count: HARVESTCountAggregateOutputType | null
    _min: HARVESTMinAggregateOutputType | null
    _max: HARVESTMaxAggregateOutputType | null
  }

  export type HARVESTMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    harvestDate: Date | null
  }

  export type HARVESTMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    harvestDate: Date | null
  }

  export type HARVESTCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    description: number
    harvestDate: number
    _all: number
  }


  export type HARVESTMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    harvestDate?: true
  }

  export type HARVESTMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    harvestDate?: true
  }

  export type HARVESTCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    harvestDate?: true
    _all?: true
  }

  export type HARVESTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HARVEST to aggregate.
     */
    where?: HARVESTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HARVESTS to fetch.
     */
    orderBy?: HARVESTOrderByWithRelationInput | HARVESTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HARVESTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HARVESTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HARVESTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HARVESTS
    **/
    _count?: true | HARVESTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HARVESTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HARVESTMaxAggregateInputType
  }

  export type GetHARVESTAggregateType<T extends HARVESTAggregateArgs> = {
        [P in keyof T & keyof AggregateHARVEST]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHARVEST[P]>
      : GetScalarType<T[P], AggregateHARVEST[P]>
  }




  export type HARVESTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HARVESTWhereInput
    orderBy?: HARVESTOrderByWithAggregationInput | HARVESTOrderByWithAggregationInput[]
    by: HARVESTScalarFieldEnum[] | HARVESTScalarFieldEnum
    having?: HARVESTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HARVESTCountAggregateInputType | true
    _min?: HARVESTMinAggregateInputType
    _max?: HARVESTMaxAggregateInputType
  }

  export type HARVESTGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    description: string
    harvestDate: Date
    _count: HARVESTCountAggregateOutputType | null
    _min: HARVESTMinAggregateOutputType | null
    _max: HARVESTMaxAggregateOutputType | null
  }

  type GetHARVESTGroupByPayload<T extends HARVESTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HARVESTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HARVESTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HARVESTGroupByOutputType[P]>
            : GetScalarType<T[P], HARVESTGroupByOutputType[P]>
        }
      >
    >


  export type HARVESTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    harvestDate?: boolean
  }, ExtArgs["result"]["hARVEST"]>

  export type HARVESTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    harvestDate?: boolean
  }, ExtArgs["result"]["hARVEST"]>

  export type HARVESTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    harvestDate?: boolean
  }, ExtArgs["result"]["hARVEST"]>

  export type HARVESTSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    harvestDate?: boolean
  }

  export type HARVESTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "description" | "harvestDate", ExtArgs["result"]["hARVEST"]>

  export type $HARVESTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HARVEST"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      description: string
      harvestDate: Date
    }, ExtArgs["result"]["hARVEST"]>
    composites: {}
  }

  type HARVESTGetPayload<S extends boolean | null | undefined | HARVESTDefaultArgs> = $Result.GetResult<Prisma.$HARVESTPayload, S>

  type HARVESTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HARVESTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HARVESTCountAggregateInputType | true
    }

  export interface HARVESTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HARVEST'], meta: { name: 'HARVEST' } }
    /**
     * Find zero or one HARVEST that matches the filter.
     * @param {HARVESTFindUniqueArgs} args - Arguments to find a HARVEST
     * @example
     * // Get one HARVEST
     * const hARVEST = await prisma.hARVEST.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HARVESTFindUniqueArgs>(args: SelectSubset<T, HARVESTFindUniqueArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HARVEST that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HARVESTFindUniqueOrThrowArgs} args - Arguments to find a HARVEST
     * @example
     * // Get one HARVEST
     * const hARVEST = await prisma.hARVEST.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HARVESTFindUniqueOrThrowArgs>(args: SelectSubset<T, HARVESTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HARVEST that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTFindFirstArgs} args - Arguments to find a HARVEST
     * @example
     * // Get one HARVEST
     * const hARVEST = await prisma.hARVEST.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HARVESTFindFirstArgs>(args?: SelectSubset<T, HARVESTFindFirstArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HARVEST that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTFindFirstOrThrowArgs} args - Arguments to find a HARVEST
     * @example
     * // Get one HARVEST
     * const hARVEST = await prisma.hARVEST.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HARVESTFindFirstOrThrowArgs>(args?: SelectSubset<T, HARVESTFindFirstOrThrowArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HARVESTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HARVESTS
     * const hARVESTS = await prisma.hARVEST.findMany()
     * 
     * // Get first 10 HARVESTS
     * const hARVESTS = await prisma.hARVEST.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hARVESTWithIdOnly = await prisma.hARVEST.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HARVESTFindManyArgs>(args?: SelectSubset<T, HARVESTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HARVEST.
     * @param {HARVESTCreateArgs} args - Arguments to create a HARVEST.
     * @example
     * // Create one HARVEST
     * const HARVEST = await prisma.hARVEST.create({
     *   data: {
     *     // ... data to create a HARVEST
     *   }
     * })
     * 
     */
    create<T extends HARVESTCreateArgs>(args: SelectSubset<T, HARVESTCreateArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HARVESTS.
     * @param {HARVESTCreateManyArgs} args - Arguments to create many HARVESTS.
     * @example
     * // Create many HARVESTS
     * const hARVEST = await prisma.hARVEST.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HARVESTCreateManyArgs>(args?: SelectSubset<T, HARVESTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HARVESTS and returns the data saved in the database.
     * @param {HARVESTCreateManyAndReturnArgs} args - Arguments to create many HARVESTS.
     * @example
     * // Create many HARVESTS
     * const hARVEST = await prisma.hARVEST.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HARVESTS and only return the `id`
     * const hARVESTWithIdOnly = await prisma.hARVEST.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HARVESTCreateManyAndReturnArgs>(args?: SelectSubset<T, HARVESTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HARVEST.
     * @param {HARVESTDeleteArgs} args - Arguments to delete one HARVEST.
     * @example
     * // Delete one HARVEST
     * const HARVEST = await prisma.hARVEST.delete({
     *   where: {
     *     // ... filter to delete one HARVEST
     *   }
     * })
     * 
     */
    delete<T extends HARVESTDeleteArgs>(args: SelectSubset<T, HARVESTDeleteArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HARVEST.
     * @param {HARVESTUpdateArgs} args - Arguments to update one HARVEST.
     * @example
     * // Update one HARVEST
     * const hARVEST = await prisma.hARVEST.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HARVESTUpdateArgs>(args: SelectSubset<T, HARVESTUpdateArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HARVESTS.
     * @param {HARVESTDeleteManyArgs} args - Arguments to filter HARVESTS to delete.
     * @example
     * // Delete a few HARVESTS
     * const { count } = await prisma.hARVEST.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HARVESTDeleteManyArgs>(args?: SelectSubset<T, HARVESTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HARVESTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HARVESTS
     * const hARVEST = await prisma.hARVEST.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HARVESTUpdateManyArgs>(args: SelectSubset<T, HARVESTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HARVESTS and returns the data updated in the database.
     * @param {HARVESTUpdateManyAndReturnArgs} args - Arguments to update many HARVESTS.
     * @example
     * // Update many HARVESTS
     * const hARVEST = await prisma.hARVEST.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HARVESTS and only return the `id`
     * const hARVESTWithIdOnly = await prisma.hARVEST.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HARVESTUpdateManyAndReturnArgs>(args: SelectSubset<T, HARVESTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HARVEST.
     * @param {HARVESTUpsertArgs} args - Arguments to update or create a HARVEST.
     * @example
     * // Update or create a HARVEST
     * const hARVEST = await prisma.hARVEST.upsert({
     *   create: {
     *     // ... data to create a HARVEST
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HARVEST we want to update
     *   }
     * })
     */
    upsert<T extends HARVESTUpsertArgs>(args: SelectSubset<T, HARVESTUpsertArgs<ExtArgs>>): Prisma__HARVESTClient<$Result.GetResult<Prisma.$HARVESTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HARVESTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTCountArgs} args - Arguments to filter HARVESTS to count.
     * @example
     * // Count the number of HARVESTS
     * const count = await prisma.hARVEST.count({
     *   where: {
     *     // ... the filter for the HARVESTS we want to count
     *   }
     * })
    **/
    count<T extends HARVESTCountArgs>(
      args?: Subset<T, HARVESTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HARVESTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HARVEST.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HARVESTAggregateArgs>(args: Subset<T, HARVESTAggregateArgs>): Prisma.PrismaPromise<GetHARVESTAggregateType<T>>

    /**
     * Group by HARVEST.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HARVESTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HARVESTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HARVESTGroupByArgs['orderBy'] }
        : { orderBy?: HARVESTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HARVESTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHARVESTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HARVEST model
   */
  readonly fields: HARVESTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HARVEST.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HARVESTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HARVEST model
   */
  interface HARVESTFieldRefs {
    readonly id: FieldRef<"HARVEST", 'String'>
    readonly ownerId: FieldRef<"HARVEST", 'String'>
    readonly name: FieldRef<"HARVEST", 'String'>
    readonly description: FieldRef<"HARVEST", 'String'>
    readonly harvestDate: FieldRef<"HARVEST", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HARVEST findUnique
   */
  export type HARVESTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * Filter, which HARVEST to fetch.
     */
    where: HARVESTWhereUniqueInput
  }

  /**
   * HARVEST findUniqueOrThrow
   */
  export type HARVESTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * Filter, which HARVEST to fetch.
     */
    where: HARVESTWhereUniqueInput
  }

  /**
   * HARVEST findFirst
   */
  export type HARVESTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * Filter, which HARVEST to fetch.
     */
    where?: HARVESTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HARVESTS to fetch.
     */
    orderBy?: HARVESTOrderByWithRelationInput | HARVESTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HARVESTS.
     */
    cursor?: HARVESTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HARVESTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HARVESTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HARVESTS.
     */
    distinct?: HARVESTScalarFieldEnum | HARVESTScalarFieldEnum[]
  }

  /**
   * HARVEST findFirstOrThrow
   */
  export type HARVESTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * Filter, which HARVEST to fetch.
     */
    where?: HARVESTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HARVESTS to fetch.
     */
    orderBy?: HARVESTOrderByWithRelationInput | HARVESTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HARVESTS.
     */
    cursor?: HARVESTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HARVESTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HARVESTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HARVESTS.
     */
    distinct?: HARVESTScalarFieldEnum | HARVESTScalarFieldEnum[]
  }

  /**
   * HARVEST findMany
   */
  export type HARVESTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * Filter, which HARVESTS to fetch.
     */
    where?: HARVESTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HARVESTS to fetch.
     */
    orderBy?: HARVESTOrderByWithRelationInput | HARVESTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HARVESTS.
     */
    cursor?: HARVESTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HARVESTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HARVESTS.
     */
    skip?: number
    distinct?: HARVESTScalarFieldEnum | HARVESTScalarFieldEnum[]
  }

  /**
   * HARVEST create
   */
  export type HARVESTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * The data needed to create a HARVEST.
     */
    data: XOR<HARVESTCreateInput, HARVESTUncheckedCreateInput>
  }

  /**
   * HARVEST createMany
   */
  export type HARVESTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HARVESTS.
     */
    data: HARVESTCreateManyInput | HARVESTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HARVEST createManyAndReturn
   */
  export type HARVESTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * The data used to create many HARVESTS.
     */
    data: HARVESTCreateManyInput | HARVESTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HARVEST update
   */
  export type HARVESTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * The data needed to update a HARVEST.
     */
    data: XOR<HARVESTUpdateInput, HARVESTUncheckedUpdateInput>
    /**
     * Choose, which HARVEST to update.
     */
    where: HARVESTWhereUniqueInput
  }

  /**
   * HARVEST updateMany
   */
  export type HARVESTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HARVESTS.
     */
    data: XOR<HARVESTUpdateManyMutationInput, HARVESTUncheckedUpdateManyInput>
    /**
     * Filter which HARVESTS to update
     */
    where?: HARVESTWhereInput
    /**
     * Limit how many HARVESTS to update.
     */
    limit?: number
  }

  /**
   * HARVEST updateManyAndReturn
   */
  export type HARVESTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * The data used to update HARVESTS.
     */
    data: XOR<HARVESTUpdateManyMutationInput, HARVESTUncheckedUpdateManyInput>
    /**
     * Filter which HARVESTS to update
     */
    where?: HARVESTWhereInput
    /**
     * Limit how many HARVESTS to update.
     */
    limit?: number
  }

  /**
   * HARVEST upsert
   */
  export type HARVESTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * The filter to search for the HARVEST to update in case it exists.
     */
    where: HARVESTWhereUniqueInput
    /**
     * In case the HARVEST found by the `where` argument doesn't exist, create a new HARVEST with this data.
     */
    create: XOR<HARVESTCreateInput, HARVESTUncheckedCreateInput>
    /**
     * In case the HARVEST was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HARVESTUpdateInput, HARVESTUncheckedUpdateInput>
  }

  /**
   * HARVEST delete
   */
  export type HARVESTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
    /**
     * Filter which HARVEST to delete.
     */
    where: HARVESTWhereUniqueInput
  }

  /**
   * HARVEST deleteMany
   */
  export type HARVESTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HARVESTS to delete
     */
    where?: HARVESTWhereInput
    /**
     * Limit how many HARVESTS to delete.
     */
    limit?: number
  }

  /**
   * HARVEST without action
   */
  export type HARVESTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HARVEST
     */
    select?: HARVESTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HARVEST
     */
    omit?: HARVESTOmit<ExtArgs> | null
  }


  /**
   * Model ADDRESS
   */

  export type AggregateADDRESS = {
    _count: ADDRESSCountAggregateOutputType | null
    _min: ADDRESSMinAggregateOutputType | null
    _max: ADDRESSMaxAggregateOutputType | null
  }

  export type ADDRESSMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cep: string | null
    city: string | null
  }

  export type ADDRESSMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cep: string | null
    city: string | null
  }

  export type ADDRESSCountAggregateOutputType = {
    id: number
    userId: number
    cep: number
    city: number
    _all: number
  }


  export type ADDRESSMinAggregateInputType = {
    id?: true
    userId?: true
    cep?: true
    city?: true
  }

  export type ADDRESSMaxAggregateInputType = {
    id?: true
    userId?: true
    cep?: true
    city?: true
  }

  export type ADDRESSCountAggregateInputType = {
    id?: true
    userId?: true
    cep?: true
    city?: true
    _all?: true
  }

  export type ADDRESSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ADDRESS to aggregate.
     */
    where?: ADDRESSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADDRESSES to fetch.
     */
    orderBy?: ADDRESSOrderByWithRelationInput | ADDRESSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ADDRESSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADDRESSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADDRESSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ADDRESSES
    **/
    _count?: true | ADDRESSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ADDRESSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ADDRESSMaxAggregateInputType
  }

  export type GetADDRESSAggregateType<T extends ADDRESSAggregateArgs> = {
        [P in keyof T & keyof AggregateADDRESS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateADDRESS[P]>
      : GetScalarType<T[P], AggregateADDRESS[P]>
  }




  export type ADDRESSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ADDRESSWhereInput
    orderBy?: ADDRESSOrderByWithAggregationInput | ADDRESSOrderByWithAggregationInput[]
    by: ADDRESSScalarFieldEnum[] | ADDRESSScalarFieldEnum
    having?: ADDRESSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ADDRESSCountAggregateInputType | true
    _min?: ADDRESSMinAggregateInputType
    _max?: ADDRESSMaxAggregateInputType
  }

  export type ADDRESSGroupByOutputType = {
    id: string
    userId: string
    cep: string
    city: string
    _count: ADDRESSCountAggregateOutputType | null
    _min: ADDRESSMinAggregateOutputType | null
    _max: ADDRESSMaxAggregateOutputType | null
  }

  type GetADDRESSGroupByPayload<T extends ADDRESSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ADDRESSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ADDRESSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ADDRESSGroupByOutputType[P]>
            : GetScalarType<T[P], ADDRESSGroupByOutputType[P]>
        }
      >
    >


  export type ADDRESSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cep?: boolean
    city?: boolean
  }, ExtArgs["result"]["aDDRESS"]>

  export type ADDRESSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cep?: boolean
    city?: boolean
  }, ExtArgs["result"]["aDDRESS"]>

  export type ADDRESSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cep?: boolean
    city?: boolean
  }, ExtArgs["result"]["aDDRESS"]>

  export type ADDRESSSelectScalar = {
    id?: boolean
    userId?: boolean
    cep?: boolean
    city?: boolean
  }

  export type ADDRESSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cep" | "city", ExtArgs["result"]["aDDRESS"]>

  export type $ADDRESSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ADDRESS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cep: string
      city: string
    }, ExtArgs["result"]["aDDRESS"]>
    composites: {}
  }

  type ADDRESSGetPayload<S extends boolean | null | undefined | ADDRESSDefaultArgs> = $Result.GetResult<Prisma.$ADDRESSPayload, S>

  type ADDRESSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ADDRESSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ADDRESSCountAggregateInputType | true
    }

  export interface ADDRESSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ADDRESS'], meta: { name: 'ADDRESS' } }
    /**
     * Find zero or one ADDRESS that matches the filter.
     * @param {ADDRESSFindUniqueArgs} args - Arguments to find a ADDRESS
     * @example
     * // Get one ADDRESS
     * const aDDRESS = await prisma.aDDRESS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ADDRESSFindUniqueArgs>(args: SelectSubset<T, ADDRESSFindUniqueArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ADDRESS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ADDRESSFindUniqueOrThrowArgs} args - Arguments to find a ADDRESS
     * @example
     * // Get one ADDRESS
     * const aDDRESS = await prisma.aDDRESS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ADDRESSFindUniqueOrThrowArgs>(args: SelectSubset<T, ADDRESSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ADDRESS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSFindFirstArgs} args - Arguments to find a ADDRESS
     * @example
     * // Get one ADDRESS
     * const aDDRESS = await prisma.aDDRESS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ADDRESSFindFirstArgs>(args?: SelectSubset<T, ADDRESSFindFirstArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ADDRESS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSFindFirstOrThrowArgs} args - Arguments to find a ADDRESS
     * @example
     * // Get one ADDRESS
     * const aDDRESS = await prisma.aDDRESS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ADDRESSFindFirstOrThrowArgs>(args?: SelectSubset<T, ADDRESSFindFirstOrThrowArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ADDRESSES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ADDRESSES
     * const aDDRESSES = await prisma.aDDRESS.findMany()
     * 
     * // Get first 10 ADDRESSES
     * const aDDRESSES = await prisma.aDDRESS.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aDDRESSWithIdOnly = await prisma.aDDRESS.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ADDRESSFindManyArgs>(args?: SelectSubset<T, ADDRESSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ADDRESS.
     * @param {ADDRESSCreateArgs} args - Arguments to create a ADDRESS.
     * @example
     * // Create one ADDRESS
     * const ADDRESS = await prisma.aDDRESS.create({
     *   data: {
     *     // ... data to create a ADDRESS
     *   }
     * })
     * 
     */
    create<T extends ADDRESSCreateArgs>(args: SelectSubset<T, ADDRESSCreateArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ADDRESSES.
     * @param {ADDRESSCreateManyArgs} args - Arguments to create many ADDRESSES.
     * @example
     * // Create many ADDRESSES
     * const aDDRESS = await prisma.aDDRESS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ADDRESSCreateManyArgs>(args?: SelectSubset<T, ADDRESSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ADDRESSES and returns the data saved in the database.
     * @param {ADDRESSCreateManyAndReturnArgs} args - Arguments to create many ADDRESSES.
     * @example
     * // Create many ADDRESSES
     * const aDDRESS = await prisma.aDDRESS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ADDRESSES and only return the `id`
     * const aDDRESSWithIdOnly = await prisma.aDDRESS.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ADDRESSCreateManyAndReturnArgs>(args?: SelectSubset<T, ADDRESSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ADDRESS.
     * @param {ADDRESSDeleteArgs} args - Arguments to delete one ADDRESS.
     * @example
     * // Delete one ADDRESS
     * const ADDRESS = await prisma.aDDRESS.delete({
     *   where: {
     *     // ... filter to delete one ADDRESS
     *   }
     * })
     * 
     */
    delete<T extends ADDRESSDeleteArgs>(args: SelectSubset<T, ADDRESSDeleteArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ADDRESS.
     * @param {ADDRESSUpdateArgs} args - Arguments to update one ADDRESS.
     * @example
     * // Update one ADDRESS
     * const aDDRESS = await prisma.aDDRESS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ADDRESSUpdateArgs>(args: SelectSubset<T, ADDRESSUpdateArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ADDRESSES.
     * @param {ADDRESSDeleteManyArgs} args - Arguments to filter ADDRESSES to delete.
     * @example
     * // Delete a few ADDRESSES
     * const { count } = await prisma.aDDRESS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ADDRESSDeleteManyArgs>(args?: SelectSubset<T, ADDRESSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ADDRESSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ADDRESSES
     * const aDDRESS = await prisma.aDDRESS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ADDRESSUpdateManyArgs>(args: SelectSubset<T, ADDRESSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ADDRESSES and returns the data updated in the database.
     * @param {ADDRESSUpdateManyAndReturnArgs} args - Arguments to update many ADDRESSES.
     * @example
     * // Update many ADDRESSES
     * const aDDRESS = await prisma.aDDRESS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ADDRESSES and only return the `id`
     * const aDDRESSWithIdOnly = await prisma.aDDRESS.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ADDRESSUpdateManyAndReturnArgs>(args: SelectSubset<T, ADDRESSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ADDRESS.
     * @param {ADDRESSUpsertArgs} args - Arguments to update or create a ADDRESS.
     * @example
     * // Update or create a ADDRESS
     * const aDDRESS = await prisma.aDDRESS.upsert({
     *   create: {
     *     // ... data to create a ADDRESS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ADDRESS we want to update
     *   }
     * })
     */
    upsert<T extends ADDRESSUpsertArgs>(args: SelectSubset<T, ADDRESSUpsertArgs<ExtArgs>>): Prisma__ADDRESSClient<$Result.GetResult<Prisma.$ADDRESSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ADDRESSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSCountArgs} args - Arguments to filter ADDRESSES to count.
     * @example
     * // Count the number of ADDRESSES
     * const count = await prisma.aDDRESS.count({
     *   where: {
     *     // ... the filter for the ADDRESSES we want to count
     *   }
     * })
    **/
    count<T extends ADDRESSCountArgs>(
      args?: Subset<T, ADDRESSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ADDRESSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ADDRESS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ADDRESSAggregateArgs>(args: Subset<T, ADDRESSAggregateArgs>): Prisma.PrismaPromise<GetADDRESSAggregateType<T>>

    /**
     * Group by ADDRESS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADDRESSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ADDRESSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ADDRESSGroupByArgs['orderBy'] }
        : { orderBy?: ADDRESSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ADDRESSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetADDRESSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ADDRESS model
   */
  readonly fields: ADDRESSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ADDRESS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ADDRESSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ADDRESS model
   */
  interface ADDRESSFieldRefs {
    readonly id: FieldRef<"ADDRESS", 'String'>
    readonly userId: FieldRef<"ADDRESS", 'String'>
    readonly cep: FieldRef<"ADDRESS", 'String'>
    readonly city: FieldRef<"ADDRESS", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ADDRESS findUnique
   */
  export type ADDRESSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * Filter, which ADDRESS to fetch.
     */
    where: ADDRESSWhereUniqueInput
  }

  /**
   * ADDRESS findUniqueOrThrow
   */
  export type ADDRESSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * Filter, which ADDRESS to fetch.
     */
    where: ADDRESSWhereUniqueInput
  }

  /**
   * ADDRESS findFirst
   */
  export type ADDRESSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * Filter, which ADDRESS to fetch.
     */
    where?: ADDRESSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADDRESSES to fetch.
     */
    orderBy?: ADDRESSOrderByWithRelationInput | ADDRESSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ADDRESSES.
     */
    cursor?: ADDRESSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADDRESSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADDRESSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ADDRESSES.
     */
    distinct?: ADDRESSScalarFieldEnum | ADDRESSScalarFieldEnum[]
  }

  /**
   * ADDRESS findFirstOrThrow
   */
  export type ADDRESSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * Filter, which ADDRESS to fetch.
     */
    where?: ADDRESSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADDRESSES to fetch.
     */
    orderBy?: ADDRESSOrderByWithRelationInput | ADDRESSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ADDRESSES.
     */
    cursor?: ADDRESSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADDRESSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADDRESSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ADDRESSES.
     */
    distinct?: ADDRESSScalarFieldEnum | ADDRESSScalarFieldEnum[]
  }

  /**
   * ADDRESS findMany
   */
  export type ADDRESSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * Filter, which ADDRESSES to fetch.
     */
    where?: ADDRESSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADDRESSES to fetch.
     */
    orderBy?: ADDRESSOrderByWithRelationInput | ADDRESSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ADDRESSES.
     */
    cursor?: ADDRESSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADDRESSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADDRESSES.
     */
    skip?: number
    distinct?: ADDRESSScalarFieldEnum | ADDRESSScalarFieldEnum[]
  }

  /**
   * ADDRESS create
   */
  export type ADDRESSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * The data needed to create a ADDRESS.
     */
    data: XOR<ADDRESSCreateInput, ADDRESSUncheckedCreateInput>
  }

  /**
   * ADDRESS createMany
   */
  export type ADDRESSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ADDRESSES.
     */
    data: ADDRESSCreateManyInput | ADDRESSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ADDRESS createManyAndReturn
   */
  export type ADDRESSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * The data used to create many ADDRESSES.
     */
    data: ADDRESSCreateManyInput | ADDRESSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ADDRESS update
   */
  export type ADDRESSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * The data needed to update a ADDRESS.
     */
    data: XOR<ADDRESSUpdateInput, ADDRESSUncheckedUpdateInput>
    /**
     * Choose, which ADDRESS to update.
     */
    where: ADDRESSWhereUniqueInput
  }

  /**
   * ADDRESS updateMany
   */
  export type ADDRESSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ADDRESSES.
     */
    data: XOR<ADDRESSUpdateManyMutationInput, ADDRESSUncheckedUpdateManyInput>
    /**
     * Filter which ADDRESSES to update
     */
    where?: ADDRESSWhereInput
    /**
     * Limit how many ADDRESSES to update.
     */
    limit?: number
  }

  /**
   * ADDRESS updateManyAndReturn
   */
  export type ADDRESSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * The data used to update ADDRESSES.
     */
    data: XOR<ADDRESSUpdateManyMutationInput, ADDRESSUncheckedUpdateManyInput>
    /**
     * Filter which ADDRESSES to update
     */
    where?: ADDRESSWhereInput
    /**
     * Limit how many ADDRESSES to update.
     */
    limit?: number
  }

  /**
   * ADDRESS upsert
   */
  export type ADDRESSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * The filter to search for the ADDRESS to update in case it exists.
     */
    where: ADDRESSWhereUniqueInput
    /**
     * In case the ADDRESS found by the `where` argument doesn't exist, create a new ADDRESS with this data.
     */
    create: XOR<ADDRESSCreateInput, ADDRESSUncheckedCreateInput>
    /**
     * In case the ADDRESS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ADDRESSUpdateInput, ADDRESSUncheckedUpdateInput>
  }

  /**
   * ADDRESS delete
   */
  export type ADDRESSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
    /**
     * Filter which ADDRESS to delete.
     */
    where: ADDRESSWhereUniqueInput
  }

  /**
   * ADDRESS deleteMany
   */
  export type ADDRESSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ADDRESSES to delete
     */
    where?: ADDRESSWhereInput
    /**
     * Limit how many ADDRESSES to delete.
     */
    limit?: number
  }

  /**
   * ADDRESS without action
   */
  export type ADDRESSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADDRESS
     */
    select?: ADDRESSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADDRESS
     */
    omit?: ADDRESSOmit<ExtArgs> | null
  }


  /**
   * Model PRODUCT
   */

  export type AggregatePRODUCT = {
    _count: PRODUCTCountAggregateOutputType | null
    _avg: PRODUCTAvgAggregateOutputType | null
    _sum: PRODUCTSumAggregateOutputType | null
    _min: PRODUCTMinAggregateOutputType | null
    _max: PRODUCTMaxAggregateOutputType | null
  }

  export type PRODUCTAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    type: number | null
    harvestType: number | null
    unityType: number | null
  }

  export type PRODUCTSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    type: number | null
    harvestType: number | null
    unityType: number | null
  }

  export type PRODUCTMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    imgUrl: string | null
    quantity: number | null
    ownerId: string | null
    type: number | null
    harvestDate: Date | null
    harvestType: number | null
    productState: boolean | null
    harvest: string | null
    unityType: number | null
  }

  export type PRODUCTMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    imgUrl: string | null
    quantity: number | null
    ownerId: string | null
    type: number | null
    harvestDate: Date | null
    harvestType: number | null
    productState: boolean | null
    harvest: string | null
    unityType: number | null
  }

  export type PRODUCTCountAggregateOutputType = {
    id: number
    name: number
    price: number
    imgUrl: number
    quantity: number
    ownerId: number
    type: number
    harvestDate: number
    harvestType: number
    productState: number
    harvest: number
    unityType: number
    _all: number
  }


  export type PRODUCTAvgAggregateInputType = {
    price?: true
    quantity?: true
    type?: true
    harvestType?: true
    unityType?: true
  }

  export type PRODUCTSumAggregateInputType = {
    price?: true
    quantity?: true
    type?: true
    harvestType?: true
    unityType?: true
  }

  export type PRODUCTMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imgUrl?: true
    quantity?: true
    ownerId?: true
    type?: true
    harvestDate?: true
    harvestType?: true
    productState?: true
    harvest?: true
    unityType?: true
  }

  export type PRODUCTMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imgUrl?: true
    quantity?: true
    ownerId?: true
    type?: true
    harvestDate?: true
    harvestType?: true
    productState?: true
    harvest?: true
    unityType?: true
  }

  export type PRODUCTCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imgUrl?: true
    quantity?: true
    ownerId?: true
    type?: true
    harvestDate?: true
    harvestType?: true
    productState?: true
    harvest?: true
    unityType?: true
    _all?: true
  }

  export type PRODUCTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT to aggregate.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationInput | PRODUCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRODUCTS
    **/
    _count?: true | PRODUCTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRODUCTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRODUCTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRODUCTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRODUCTMaxAggregateInputType
  }

  export type GetPRODUCTAggregateType<T extends PRODUCTAggregateArgs> = {
        [P in keyof T & keyof AggregatePRODUCT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRODUCT[P]>
      : GetScalarType<T[P], AggregatePRODUCT[P]>
  }




  export type PRODUCTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCTWhereInput
    orderBy?: PRODUCTOrderByWithAggregationInput | PRODUCTOrderByWithAggregationInput[]
    by: PRODUCTScalarFieldEnum[] | PRODUCTScalarFieldEnum
    having?: PRODUCTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRODUCTCountAggregateInputType | true
    _avg?: PRODUCTAvgAggregateInputType
    _sum?: PRODUCTSumAggregateInputType
    _min?: PRODUCTMinAggregateInputType
    _max?: PRODUCTMaxAggregateInputType
  }

  export type PRODUCTGroupByOutputType = {
    id: string
    name: string
    price: number
    imgUrl: string
    quantity: number
    ownerId: string
    type: number
    harvestDate: Date
    harvestType: number
    productState: boolean
    harvest: string
    unityType: number
    _count: PRODUCTCountAggregateOutputType | null
    _avg: PRODUCTAvgAggregateOutputType | null
    _sum: PRODUCTSumAggregateOutputType | null
    _min: PRODUCTMinAggregateOutputType | null
    _max: PRODUCTMaxAggregateOutputType | null
  }

  type GetPRODUCTGroupByPayload<T extends PRODUCTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRODUCTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRODUCTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRODUCTGroupByOutputType[P]>
            : GetScalarType<T[P], PRODUCTGroupByOutputType[P]>
        }
      >
    >


  export type PRODUCTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imgUrl?: boolean
    quantity?: boolean
    ownerId?: boolean
    type?: boolean
    harvestDate?: boolean
    harvestType?: boolean
    productState?: boolean
    harvest?: boolean
    unityType?: boolean
  }, ExtArgs["result"]["pRODUCT"]>

  export type PRODUCTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imgUrl?: boolean
    quantity?: boolean
    ownerId?: boolean
    type?: boolean
    harvestDate?: boolean
    harvestType?: boolean
    productState?: boolean
    harvest?: boolean
    unityType?: boolean
  }, ExtArgs["result"]["pRODUCT"]>

  export type PRODUCTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imgUrl?: boolean
    quantity?: boolean
    ownerId?: boolean
    type?: boolean
    harvestDate?: boolean
    harvestType?: boolean
    productState?: boolean
    harvest?: boolean
    unityType?: boolean
  }, ExtArgs["result"]["pRODUCT"]>

  export type PRODUCTSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    imgUrl?: boolean
    quantity?: boolean
    ownerId?: boolean
    type?: boolean
    harvestDate?: boolean
    harvestType?: boolean
    productState?: boolean
    harvest?: boolean
    unityType?: boolean
  }

  export type PRODUCTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "imgUrl" | "quantity" | "ownerId" | "type" | "harvestDate" | "harvestType" | "productState" | "harvest" | "unityType", ExtArgs["result"]["pRODUCT"]>

  export type $PRODUCTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRODUCT"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      imgUrl: string
      quantity: number
      ownerId: string
      type: number
      harvestDate: Date
      harvestType: number
      productState: boolean
      harvest: string
      unityType: number
    }, ExtArgs["result"]["pRODUCT"]>
    composites: {}
  }

  type PRODUCTGetPayload<S extends boolean | null | undefined | PRODUCTDefaultArgs> = $Result.GetResult<Prisma.$PRODUCTPayload, S>

  type PRODUCTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PRODUCTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PRODUCTCountAggregateInputType | true
    }

  export interface PRODUCTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRODUCT'], meta: { name: 'PRODUCT' } }
    /**
     * Find zero or one PRODUCT that matches the filter.
     * @param {PRODUCTFindUniqueArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PRODUCTFindUniqueArgs>(args: SelectSubset<T, PRODUCTFindUniqueArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PRODUCT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PRODUCTFindUniqueOrThrowArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PRODUCTFindUniqueOrThrowArgs>(args: SelectSubset<T, PRODUCTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRODUCT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTFindFirstArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PRODUCTFindFirstArgs>(args?: SelectSubset<T, PRODUCTFindFirstArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRODUCT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTFindFirstOrThrowArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PRODUCTFindFirstOrThrowArgs>(args?: SelectSubset<T, PRODUCTFindFirstOrThrowArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PRODUCTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRODUCTS
     * const pRODUCTS = await prisma.pRODUCT.findMany()
     * 
     * // Get first 10 PRODUCTS
     * const pRODUCTS = await prisma.pRODUCT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRODUCTWithIdOnly = await prisma.pRODUCT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PRODUCTFindManyArgs>(args?: SelectSubset<T, PRODUCTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PRODUCT.
     * @param {PRODUCTCreateArgs} args - Arguments to create a PRODUCT.
     * @example
     * // Create one PRODUCT
     * const PRODUCT = await prisma.pRODUCT.create({
     *   data: {
     *     // ... data to create a PRODUCT
     *   }
     * })
     * 
     */
    create<T extends PRODUCTCreateArgs>(args: SelectSubset<T, PRODUCTCreateArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PRODUCTS.
     * @param {PRODUCTCreateManyArgs} args - Arguments to create many PRODUCTS.
     * @example
     * // Create many PRODUCTS
     * const pRODUCT = await prisma.pRODUCT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PRODUCTCreateManyArgs>(args?: SelectSubset<T, PRODUCTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PRODUCTS and returns the data saved in the database.
     * @param {PRODUCTCreateManyAndReturnArgs} args - Arguments to create many PRODUCTS.
     * @example
     * // Create many PRODUCTS
     * const pRODUCT = await prisma.pRODUCT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PRODUCTS and only return the `id`
     * const pRODUCTWithIdOnly = await prisma.pRODUCT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PRODUCTCreateManyAndReturnArgs>(args?: SelectSubset<T, PRODUCTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PRODUCT.
     * @param {PRODUCTDeleteArgs} args - Arguments to delete one PRODUCT.
     * @example
     * // Delete one PRODUCT
     * const PRODUCT = await prisma.pRODUCT.delete({
     *   where: {
     *     // ... filter to delete one PRODUCT
     *   }
     * })
     * 
     */
    delete<T extends PRODUCTDeleteArgs>(args: SelectSubset<T, PRODUCTDeleteArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PRODUCT.
     * @param {PRODUCTUpdateArgs} args - Arguments to update one PRODUCT.
     * @example
     * // Update one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PRODUCTUpdateArgs>(args: SelectSubset<T, PRODUCTUpdateArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PRODUCTS.
     * @param {PRODUCTDeleteManyArgs} args - Arguments to filter PRODUCTS to delete.
     * @example
     * // Delete a few PRODUCTS
     * const { count } = await prisma.pRODUCT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PRODUCTDeleteManyArgs>(args?: SelectSubset<T, PRODUCTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRODUCTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRODUCTS
     * const pRODUCT = await prisma.pRODUCT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PRODUCTUpdateManyArgs>(args: SelectSubset<T, PRODUCTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRODUCTS and returns the data updated in the database.
     * @param {PRODUCTUpdateManyAndReturnArgs} args - Arguments to update many PRODUCTS.
     * @example
     * // Update many PRODUCTS
     * const pRODUCT = await prisma.pRODUCT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PRODUCTS and only return the `id`
     * const pRODUCTWithIdOnly = await prisma.pRODUCT.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PRODUCTUpdateManyAndReturnArgs>(args: SelectSubset<T, PRODUCTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PRODUCT.
     * @param {PRODUCTUpsertArgs} args - Arguments to update or create a PRODUCT.
     * @example
     * // Update or create a PRODUCT
     * const pRODUCT = await prisma.pRODUCT.upsert({
     *   create: {
     *     // ... data to create a PRODUCT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRODUCT we want to update
     *   }
     * })
     */
    upsert<T extends PRODUCTUpsertArgs>(args: SelectSubset<T, PRODUCTUpsertArgs<ExtArgs>>): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PRODUCTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTCountArgs} args - Arguments to filter PRODUCTS to count.
     * @example
     * // Count the number of PRODUCTS
     * const count = await prisma.pRODUCT.count({
     *   where: {
     *     // ... the filter for the PRODUCTS we want to count
     *   }
     * })
    **/
    count<T extends PRODUCTCountArgs>(
      args?: Subset<T, PRODUCTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRODUCTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRODUCT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRODUCTAggregateArgs>(args: Subset<T, PRODUCTAggregateArgs>): Prisma.PrismaPromise<GetPRODUCTAggregateType<T>>

    /**
     * Group by PRODUCT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRODUCTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRODUCTGroupByArgs['orderBy'] }
        : { orderBy?: PRODUCTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRODUCTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRODUCTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRODUCT model
   */
  readonly fields: PRODUCTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRODUCT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRODUCTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PRODUCT model
   */
  interface PRODUCTFieldRefs {
    readonly id: FieldRef<"PRODUCT", 'String'>
    readonly name: FieldRef<"PRODUCT", 'String'>
    readonly price: FieldRef<"PRODUCT", 'Float'>
    readonly imgUrl: FieldRef<"PRODUCT", 'String'>
    readonly quantity: FieldRef<"PRODUCT", 'Int'>
    readonly ownerId: FieldRef<"PRODUCT", 'String'>
    readonly type: FieldRef<"PRODUCT", 'Int'>
    readonly harvestDate: FieldRef<"PRODUCT", 'DateTime'>
    readonly harvestType: FieldRef<"PRODUCT", 'Int'>
    readonly productState: FieldRef<"PRODUCT", 'Boolean'>
    readonly harvest: FieldRef<"PRODUCT", 'String'>
    readonly unityType: FieldRef<"PRODUCT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PRODUCT findUnique
   */
  export type PRODUCTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where: PRODUCTWhereUniqueInput
  }

  /**
   * PRODUCT findUniqueOrThrow
   */
  export type PRODUCTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where: PRODUCTWhereUniqueInput
  }

  /**
   * PRODUCT findFirst
   */
  export type PRODUCTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationInput | PRODUCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCTS.
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCTS.
     */
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
  }

  /**
   * PRODUCT findFirstOrThrow
   */
  export type PRODUCTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationInput | PRODUCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCTS.
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCTS.
     */
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
  }

  /**
   * PRODUCT findMany
   */
  export type PRODUCTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * Filter, which PRODUCTS to fetch.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationInput | PRODUCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRODUCTS.
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
  }

  /**
   * PRODUCT create
   */
  export type PRODUCTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * The data needed to create a PRODUCT.
     */
    data: XOR<PRODUCTCreateInput, PRODUCTUncheckedCreateInput>
  }

  /**
   * PRODUCT createMany
   */
  export type PRODUCTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRODUCTS.
     */
    data: PRODUCTCreateManyInput | PRODUCTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PRODUCT createManyAndReturn
   */
  export type PRODUCTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * The data used to create many PRODUCTS.
     */
    data: PRODUCTCreateManyInput | PRODUCTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PRODUCT update
   */
  export type PRODUCTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * The data needed to update a PRODUCT.
     */
    data: XOR<PRODUCTUpdateInput, PRODUCTUncheckedUpdateInput>
    /**
     * Choose, which PRODUCT to update.
     */
    where: PRODUCTWhereUniqueInput
  }

  /**
   * PRODUCT updateMany
   */
  export type PRODUCTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRODUCTS.
     */
    data: XOR<PRODUCTUpdateManyMutationInput, PRODUCTUncheckedUpdateManyInput>
    /**
     * Filter which PRODUCTS to update
     */
    where?: PRODUCTWhereInput
    /**
     * Limit how many PRODUCTS to update.
     */
    limit?: number
  }

  /**
   * PRODUCT updateManyAndReturn
   */
  export type PRODUCTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * The data used to update PRODUCTS.
     */
    data: XOR<PRODUCTUpdateManyMutationInput, PRODUCTUncheckedUpdateManyInput>
    /**
     * Filter which PRODUCTS to update
     */
    where?: PRODUCTWhereInput
    /**
     * Limit how many PRODUCTS to update.
     */
    limit?: number
  }

  /**
   * PRODUCT upsert
   */
  export type PRODUCTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * The filter to search for the PRODUCT to update in case it exists.
     */
    where: PRODUCTWhereUniqueInput
    /**
     * In case the PRODUCT found by the `where` argument doesn't exist, create a new PRODUCT with this data.
     */
    create: XOR<PRODUCTCreateInput, PRODUCTUncheckedCreateInput>
    /**
     * In case the PRODUCT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRODUCTUpdateInput, PRODUCTUncheckedUpdateInput>
  }

  /**
   * PRODUCT delete
   */
  export type PRODUCTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
    /**
     * Filter which PRODUCT to delete.
     */
    where: PRODUCTWhereUniqueInput
  }

  /**
   * PRODUCT deleteMany
   */
  export type PRODUCTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCTS to delete
     */
    where?: PRODUCTWhereInput
    /**
     * Limit how many PRODUCTS to delete.
     */
    limit?: number
  }

  /**
   * PRODUCT without action
   */
  export type PRODUCTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRODUCT
     */
    omit?: PRODUCTOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpfcpnj: 'cpfcpnj',
    email: 'email',
    password: 'password',
    userType: 'userType',
    createDate: 'createDate',
    sellings: 'sellings',
    rate: 'rate',
    imgUrl: 'imgUrl',
    contact: 'contact',
    contactType: 'contactType'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HARVESTScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    description: 'description',
    harvestDate: 'harvestDate'
  };

  export type HARVESTScalarFieldEnum = (typeof HARVESTScalarFieldEnum)[keyof typeof HARVESTScalarFieldEnum]


  export const ADDRESSScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cep: 'cep',
    city: 'city'
  };

  export type ADDRESSScalarFieldEnum = (typeof ADDRESSScalarFieldEnum)[keyof typeof ADDRESSScalarFieldEnum]


  export const PRODUCTScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    imgUrl: 'imgUrl',
    quantity: 'quantity',
    ownerId: 'ownerId',
    type: 'type',
    harvestDate: 'harvestDate',
    harvestType: 'harvestType',
    productState: 'productState',
    harvest: 'harvest',
    unityType: 'unityType'
  };

  export type PRODUCTScalarFieldEnum = (typeof PRODUCTScalarFieldEnum)[keyof typeof PRODUCTScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    cpfcpnj?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    userType?: IntFilter<"user"> | number
    createDate?: DateTimeFilter<"user"> | Date | string
    sellings?: IntFilter<"user"> | number
    rate?: FloatFilter<"user"> | number
    imgUrl?: StringFilter<"user"> | string
    contact?: StringFilter<"user"> | string
    contactType?: IntFilter<"user"> | number
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpfcpnj?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createDate?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    imgUrl?: SortOrder
    contact?: SortOrder
    contactType?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    cpfcpnj?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    userType?: IntFilter<"user"> | number
    createDate?: DateTimeFilter<"user"> | Date | string
    sellings?: IntFilter<"user"> | number
    rate?: FloatFilter<"user"> | number
    imgUrl?: StringFilter<"user"> | string
    contact?: StringFilter<"user"> | string
    contactType?: IntFilter<"user"> | number
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpfcpnj?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createDate?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    imgUrl?: SortOrder
    contact?: SortOrder
    contactType?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    cpfcpnj?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    userType?: IntWithAggregatesFilter<"user"> | number
    createDate?: DateTimeWithAggregatesFilter<"user"> | Date | string
    sellings?: IntWithAggregatesFilter<"user"> | number
    rate?: FloatWithAggregatesFilter<"user"> | number
    imgUrl?: StringWithAggregatesFilter<"user"> | string
    contact?: StringWithAggregatesFilter<"user"> | string
    contactType?: IntWithAggregatesFilter<"user"> | number
  }

  export type HARVESTWhereInput = {
    AND?: HARVESTWhereInput | HARVESTWhereInput[]
    OR?: HARVESTWhereInput[]
    NOT?: HARVESTWhereInput | HARVESTWhereInput[]
    id?: StringFilter<"HARVEST"> | string
    ownerId?: StringFilter<"HARVEST"> | string
    name?: StringFilter<"HARVEST"> | string
    description?: StringFilter<"HARVEST"> | string
    harvestDate?: DateTimeFilter<"HARVEST"> | Date | string
  }

  export type HARVESTOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    harvestDate?: SortOrder
  }

  export type HARVESTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HARVESTWhereInput | HARVESTWhereInput[]
    OR?: HARVESTWhereInput[]
    NOT?: HARVESTWhereInput | HARVESTWhereInput[]
    ownerId?: StringFilter<"HARVEST"> | string
    name?: StringFilter<"HARVEST"> | string
    description?: StringFilter<"HARVEST"> | string
    harvestDate?: DateTimeFilter<"HARVEST"> | Date | string
  }, "id">

  export type HARVESTOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    harvestDate?: SortOrder
    _count?: HARVESTCountOrderByAggregateInput
    _max?: HARVESTMaxOrderByAggregateInput
    _min?: HARVESTMinOrderByAggregateInput
  }

  export type HARVESTScalarWhereWithAggregatesInput = {
    AND?: HARVESTScalarWhereWithAggregatesInput | HARVESTScalarWhereWithAggregatesInput[]
    OR?: HARVESTScalarWhereWithAggregatesInput[]
    NOT?: HARVESTScalarWhereWithAggregatesInput | HARVESTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HARVEST"> | string
    ownerId?: StringWithAggregatesFilter<"HARVEST"> | string
    name?: StringWithAggregatesFilter<"HARVEST"> | string
    description?: StringWithAggregatesFilter<"HARVEST"> | string
    harvestDate?: DateTimeWithAggregatesFilter<"HARVEST"> | Date | string
  }

  export type ADDRESSWhereInput = {
    AND?: ADDRESSWhereInput | ADDRESSWhereInput[]
    OR?: ADDRESSWhereInput[]
    NOT?: ADDRESSWhereInput | ADDRESSWhereInput[]
    id?: StringFilter<"ADDRESS"> | string
    userId?: StringFilter<"ADDRESS"> | string
    cep?: StringFilter<"ADDRESS"> | string
    city?: StringFilter<"ADDRESS"> | string
  }

  export type ADDRESSOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cep?: SortOrder
    city?: SortOrder
  }

  export type ADDRESSWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ADDRESSWhereInput | ADDRESSWhereInput[]
    OR?: ADDRESSWhereInput[]
    NOT?: ADDRESSWhereInput | ADDRESSWhereInput[]
    userId?: StringFilter<"ADDRESS"> | string
    cep?: StringFilter<"ADDRESS"> | string
    city?: StringFilter<"ADDRESS"> | string
  }, "id">

  export type ADDRESSOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cep?: SortOrder
    city?: SortOrder
    _count?: ADDRESSCountOrderByAggregateInput
    _max?: ADDRESSMaxOrderByAggregateInput
    _min?: ADDRESSMinOrderByAggregateInput
  }

  export type ADDRESSScalarWhereWithAggregatesInput = {
    AND?: ADDRESSScalarWhereWithAggregatesInput | ADDRESSScalarWhereWithAggregatesInput[]
    OR?: ADDRESSScalarWhereWithAggregatesInput[]
    NOT?: ADDRESSScalarWhereWithAggregatesInput | ADDRESSScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ADDRESS"> | string
    userId?: StringWithAggregatesFilter<"ADDRESS"> | string
    cep?: StringWithAggregatesFilter<"ADDRESS"> | string
    city?: StringWithAggregatesFilter<"ADDRESS"> | string
  }

  export type PRODUCTWhereInput = {
    AND?: PRODUCTWhereInput | PRODUCTWhereInput[]
    OR?: PRODUCTWhereInput[]
    NOT?: PRODUCTWhereInput | PRODUCTWhereInput[]
    id?: StringFilter<"PRODUCT"> | string
    name?: StringFilter<"PRODUCT"> | string
    price?: FloatFilter<"PRODUCT"> | number
    imgUrl?: StringFilter<"PRODUCT"> | string
    quantity?: IntFilter<"PRODUCT"> | number
    ownerId?: StringFilter<"PRODUCT"> | string
    type?: IntFilter<"PRODUCT"> | number
    harvestDate?: DateTimeFilter<"PRODUCT"> | Date | string
    harvestType?: IntFilter<"PRODUCT"> | number
    productState?: BoolFilter<"PRODUCT"> | boolean
    harvest?: StringFilter<"PRODUCT"> | string
    unityType?: IntFilter<"PRODUCT"> | number
  }

  export type PRODUCTOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    quantity?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    harvestDate?: SortOrder
    harvestType?: SortOrder
    productState?: SortOrder
    harvest?: SortOrder
    unityType?: SortOrder
  }

  export type PRODUCTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PRODUCTWhereInput | PRODUCTWhereInput[]
    OR?: PRODUCTWhereInput[]
    NOT?: PRODUCTWhereInput | PRODUCTWhereInput[]
    name?: StringFilter<"PRODUCT"> | string
    price?: FloatFilter<"PRODUCT"> | number
    imgUrl?: StringFilter<"PRODUCT"> | string
    quantity?: IntFilter<"PRODUCT"> | number
    ownerId?: StringFilter<"PRODUCT"> | string
    type?: IntFilter<"PRODUCT"> | number
    harvestDate?: DateTimeFilter<"PRODUCT"> | Date | string
    harvestType?: IntFilter<"PRODUCT"> | number
    productState?: BoolFilter<"PRODUCT"> | boolean
    harvest?: StringFilter<"PRODUCT"> | string
    unityType?: IntFilter<"PRODUCT"> | number
  }, "id">

  export type PRODUCTOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    quantity?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    harvestDate?: SortOrder
    harvestType?: SortOrder
    productState?: SortOrder
    harvest?: SortOrder
    unityType?: SortOrder
    _count?: PRODUCTCountOrderByAggregateInput
    _avg?: PRODUCTAvgOrderByAggregateInput
    _max?: PRODUCTMaxOrderByAggregateInput
    _min?: PRODUCTMinOrderByAggregateInput
    _sum?: PRODUCTSumOrderByAggregateInput
  }

  export type PRODUCTScalarWhereWithAggregatesInput = {
    AND?: PRODUCTScalarWhereWithAggregatesInput | PRODUCTScalarWhereWithAggregatesInput[]
    OR?: PRODUCTScalarWhereWithAggregatesInput[]
    NOT?: PRODUCTScalarWhereWithAggregatesInput | PRODUCTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PRODUCT"> | string
    name?: StringWithAggregatesFilter<"PRODUCT"> | string
    price?: FloatWithAggregatesFilter<"PRODUCT"> | number
    imgUrl?: StringWithAggregatesFilter<"PRODUCT"> | string
    quantity?: IntWithAggregatesFilter<"PRODUCT"> | number
    ownerId?: StringWithAggregatesFilter<"PRODUCT"> | string
    type?: IntWithAggregatesFilter<"PRODUCT"> | number
    harvestDate?: DateTimeWithAggregatesFilter<"PRODUCT"> | Date | string
    harvestType?: IntWithAggregatesFilter<"PRODUCT"> | number
    productState?: BoolWithAggregatesFilter<"PRODUCT"> | boolean
    harvest?: StringWithAggregatesFilter<"PRODUCT"> | string
    unityType?: IntWithAggregatesFilter<"PRODUCT"> | number
  }

  export type userCreateInput = {
    id?: string
    name: string
    cpfcpnj: string
    email: string
    password: string
    userType: number
    createDate: Date | string
    sellings: number
    rate: number
    imgUrl: string
    contact: string
    contactType: number
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    cpfcpnj: string
    email: string
    password: string
    userType: number
    createDate: Date | string
    sellings: number
    rate: number
    imgUrl: string
    contact: string
    contactType: number
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfcpnj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellings?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactType?: IntFieldUpdateOperationsInput | number
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfcpnj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellings?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactType?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    cpfcpnj: string
    email: string
    password: string
    userType: number
    createDate: Date | string
    sellings: number
    rate: number
    imgUrl: string
    contact: string
    contactType: number
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfcpnj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellings?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactType?: IntFieldUpdateOperationsInput | number
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfcpnj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellings?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactType?: IntFieldUpdateOperationsInput | number
  }

  export type HARVESTCreateInput = {
    id?: string
    ownerId: string
    name: string
    description: string
    harvestDate: Date | string
  }

  export type HARVESTUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    description: string
    harvestDate: Date | string
  }

  export type HARVESTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HARVESTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HARVESTCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    description: string
    harvestDate: Date | string
  }

  export type HARVESTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HARVESTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ADDRESSCreateInput = {
    id?: string
    userId: string
    cep: string
    city: string
  }

  export type ADDRESSUncheckedCreateInput = {
    id?: string
    userId: string
    cep: string
    city: string
  }

  export type ADDRESSUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ADDRESSUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ADDRESSCreateManyInput = {
    id?: string
    userId: string
    cep: string
    city: string
  }

  export type ADDRESSUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ADDRESSUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type PRODUCTCreateInput = {
    id?: string
    name: string
    price: number
    imgUrl: string
    quantity: number
    ownerId: string
    type: number
    harvestDate: Date | string
    harvestType: number
    productState: boolean
    harvest: string
    unityType: number
  }

  export type PRODUCTUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    imgUrl: string
    quantity: number
    ownerId: string
    type: number
    harvestDate: Date | string
    harvestType: number
    productState: boolean
    harvest: string
    unityType: number
  }

  export type PRODUCTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestType?: IntFieldUpdateOperationsInput | number
    productState?: BoolFieldUpdateOperationsInput | boolean
    harvest?: StringFieldUpdateOperationsInput | string
    unityType?: IntFieldUpdateOperationsInput | number
  }

  export type PRODUCTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestType?: IntFieldUpdateOperationsInput | number
    productState?: BoolFieldUpdateOperationsInput | boolean
    harvest?: StringFieldUpdateOperationsInput | string
    unityType?: IntFieldUpdateOperationsInput | number
  }

  export type PRODUCTCreateManyInput = {
    id?: string
    name: string
    price: number
    imgUrl: string
    quantity: number
    ownerId: string
    type: number
    harvestDate: Date | string
    harvestType: number
    productState: boolean
    harvest: string
    unityType: number
  }

  export type PRODUCTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestType?: IntFieldUpdateOperationsInput | number
    productState?: BoolFieldUpdateOperationsInput | boolean
    harvest?: StringFieldUpdateOperationsInput | string
    unityType?: IntFieldUpdateOperationsInput | number
  }

  export type PRODUCTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    harvestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harvestType?: IntFieldUpdateOperationsInput | number
    productState?: BoolFieldUpdateOperationsInput | boolean
    harvest?: StringFieldUpdateOperationsInput | string
    unityType?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpfcpnj?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createDate?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    imgUrl?: SortOrder
    contact?: SortOrder
    contactType?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    userType?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    contactType?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpfcpnj?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createDate?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    imgUrl?: SortOrder
    contact?: SortOrder
    contactType?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpfcpnj?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createDate?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    imgUrl?: SortOrder
    contact?: SortOrder
    contactType?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    userType?: SortOrder
    sellings?: SortOrder
    rate?: SortOrder
    contactType?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type HARVESTCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    harvestDate?: SortOrder
  }

  export type HARVESTMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    harvestDate?: SortOrder
  }

  export type HARVESTMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    harvestDate?: SortOrder
  }

  export type ADDRESSCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cep?: SortOrder
    city?: SortOrder
  }

  export type ADDRESSMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cep?: SortOrder
    city?: SortOrder
  }

  export type ADDRESSMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cep?: SortOrder
    city?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PRODUCTCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    quantity?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    harvestDate?: SortOrder
    harvestType?: SortOrder
    productState?: SortOrder
    harvest?: SortOrder
    unityType?: SortOrder
  }

  export type PRODUCTAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    harvestType?: SortOrder
    unityType?: SortOrder
  }

  export type PRODUCTMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    quantity?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    harvestDate?: SortOrder
    harvestType?: SortOrder
    productState?: SortOrder
    harvest?: SortOrder
    unityType?: SortOrder
  }

  export type PRODUCTMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    quantity?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    harvestDate?: SortOrder
    harvestType?: SortOrder
    productState?: SortOrder
    harvest?: SortOrder
    unityType?: SortOrder
  }

  export type PRODUCTSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    harvestType?: SortOrder
    unityType?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}