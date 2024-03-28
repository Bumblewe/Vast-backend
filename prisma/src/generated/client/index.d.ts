
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    cart: CartPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    email: string
    name: string
    password: string
    role: Role
    mobile: string
    address: string
    cartId: string | null
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type CartPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    user: UserPayload<ExtArgs>[]
    cartItem: CartItemPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    updatedAt: Date
    cartItemId: string[]
  }, ExtArgs["result"]["cart"]>
  composites: {}
}

/**
 * Model Cart
 * 
 */
export type Cart = runtime.Types.DefaultSelection<CartPayload>
export type CartItemPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    product: ProductPayload<ExtArgs>
    color: ColorPayload<ExtArgs>
    size: SizePayload<ExtArgs>
    Cart: CartPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    sizeId: string
    colorId: string
    quantity: string
    productId: string
    cartId: string[]
  }, ExtArgs["result"]["cartItem"]>
  composites: {}
}

/**
 * Model CartItem
 * 
 */
export type CartItem = runtime.Types.DefaultSelection<CartItemPayload>
export type StorePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    billboards: BillboardPayload<ExtArgs>[]
    types: TypePayload<ExtArgs>[]
    banners: BannerPayload<ExtArgs>[]
    categories: CategoryPayload<ExtArgs>[]
    products: ProductPayload<ExtArgs>[]
    parents: ParentPayload<ExtArgs>[]
    sizes: SizePayload<ExtArgs>[]
    colors: ColorPayload<ExtArgs>[]
    orders: OrderPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["store"]>
  composites: {}
}

/**
 * Model Store
 * 
 */
export type Store = runtime.Types.DefaultSelection<StorePayload>
export type BillboardPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    categories: CategoryPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["billboard"]>
  composites: {}
}

/**
 * Model Billboard
 * 
 */
export type Billboard = runtime.Types.DefaultSelection<BillboardPayload>
export type BannerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["banner"]>
  composites: {}
}

/**
 * Model Banner
 * 
 */
export type Banner = runtime.Types.DefaultSelection<BannerPayload>
export type CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    billboard: BillboardPayload<ExtArgs>
    products: ProductPayload<ExtArgs>[]
    parent: ParentPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    billboardId: string
    name: string
    parentId: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["category"]>
  composites: {}
}

/**
 * Model Category
 * 
 */
export type Category = runtime.Types.DefaultSelection<CategoryPayload>
export type ParentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    categories: CategoryPayload<ExtArgs>[]
    type: TypePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    name: string
    typeId: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["parent"]>
  composites: {}
}

/**
 * Model Parent
 * 
 */
export type Parent = runtime.Types.DefaultSelection<ParentPayload>
export type TypePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    parents: ParentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["type"]>
  composites: {}
}

/**
 * Model Type
 * 
 */
export type Type = runtime.Types.DefaultSelection<TypePayload>
export type ProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    category: CategoryPayload<ExtArgs>
    size: SizePayload<ExtArgs>
    color: ColorPayload<ExtArgs>
    images: ImagePayload<ExtArgs>[]
    cartItem: CartItemPayload<ExtArgs>[]
    orderItems: OrderItemPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured: boolean
    isArchived: boolean
    sizeId: string
    colorId: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["product"]>
  composites: {}
}

/**
 * Model Product
 * 
 */
export type Product = runtime.Types.DefaultSelection<ProductPayload>
export type OrderPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    orderItems: OrderItemPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    isPaid: boolean
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["order"]>
  composites: {}
}

/**
 * Model Order
 * 
 */
export type Order = runtime.Types.DefaultSelection<OrderPayload>
export type OrderItemPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    order: OrderPayload<ExtArgs>
    product: ProductPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    orderId: string
    productId: string
  }, ExtArgs["result"]["orderItem"]>
  composites: {}
}

/**
 * Model OrderItem
 * 
 */
export type OrderItem = runtime.Types.DefaultSelection<OrderItemPayload>
export type SizePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    products: ProductPayload<ExtArgs>[]
    cartItem: CartItemPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    name: string
    value: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["size"]>
  composites: {}
}

/**
 * Model Size
 * 
 */
export type Size = runtime.Types.DefaultSelection<SizePayload>
export type OtpPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    mobile: string
    otp: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["otp"]>
  composites: {}
}

/**
 * Model Otp
 * 
 */
export type Otp = runtime.Types.DefaultSelection<OtpPayload>
export type ColorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    store: StorePayload<ExtArgs>
    cartItem: CartItemPayload<ExtArgs>[]
    products: ProductPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    storeId: string
    name: string
    value: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["color"]>
  composites: {}
}

/**
 * Model Color
 * 
 */
export type Color = runtime.Types.DefaultSelection<ColorPayload>
export type ImagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    product: ProductPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    productId: string
    url: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["image"]>
  composites: {}
}

/**
 * Model Image
 * 
 */
export type Image = runtime.Types.DefaultSelection<ImagePayload>

/**
 * Enums
 */

export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.billboard`: Exposes CRUD operations for the **Billboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billboards
    * const billboards = await prisma.billboard.findMany()
    * ```
    */
  get billboard(): Prisma.BillboardDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.color`: Exposes CRUD operations for the **Color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.ColorDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.1
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Store: 'Store',
    Billboard: 'Billboard',
    Banner: 'Banner',
    Category: 'Category',
    Parent: 'Parent',
    Type: 'Type',
    Product: 'Product',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Size: 'Size',
    Otp: 'Otp',
    Color: 'Color',
    Image: 'Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'cart' | 'cartItem' | 'store' | 'billboard' | 'banner' | 'category' | 'parent' | 'type' | 'product' | 'order' | 'orderItem' | 'size' | 'otp' | 'color' | 'image'
      txIsolationLevel: never
    },
    model: {
      User: {
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
            payload: UserPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
            payload: UserPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
            payload: UserPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
            payload: UserPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
            payload: UserPayload<ExtArgs>
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
            payload: UserPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: UserPayload<ExtArgs>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
            payload: UserPayload<ExtArgs>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
            payload: UserPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: UserPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: UserPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
            payload: UserPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
            payload: UserPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
            payload: UserPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: UserPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: UserPayload<ExtArgs>
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
            payload: UserPayload<ExtArgs>
          }
        }
      }
      Cart: {
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload> | null
            payload: CartPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>
            payload: CartPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload> | null
            payload: CartPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>
            payload: CartPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>[]
            payload: CartPayload<ExtArgs>
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>
            payload: CartPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CartPayload<ExtArgs>
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>
            payload: CartPayload<ExtArgs>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>
            payload: CartPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CartPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CartPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartPayload>
            payload: CartPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCart>
            payload: CartPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartGroupByOutputType>[]
            payload: CartPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.CartFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: CartPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.CartAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: CartPayload<ExtArgs>
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>,
            result: $Utils.Optional<CartCountAggregateOutputType> | number
            payload: CartPayload<ExtArgs>
          }
        }
      }
      CartItem: {
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload> | null
            payload: CartItemPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>
            payload: CartItemPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload> | null
            payload: CartItemPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>
            payload: CartItemPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>[]
            payload: CartItemPayload<ExtArgs>
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>
            payload: CartItemPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CartItemPayload<ExtArgs>
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>
            payload: CartItemPayload<ExtArgs>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>
            payload: CartItemPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CartItemPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CartItemPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CartItemPayload>
            payload: CartItemPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCartItem>
            payload: CartItemPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartItemGroupByOutputType>[]
            payload: CartItemPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.CartItemFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: CartItemPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.CartItemAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: CartItemPayload<ExtArgs>
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>,
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
            payload: CartItemPayload<ExtArgs>
          }
        }
      }
      Store: {
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload> | null
            payload: StorePayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>
            payload: StorePayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload> | null
            payload: StorePayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>
            payload: StorePayload<ExtArgs>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>[]
            payload: StorePayload<ExtArgs>
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>
            payload: StorePayload<ExtArgs>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: StorePayload<ExtArgs>
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>
            payload: StorePayload<ExtArgs>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>
            payload: StorePayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: StorePayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: StorePayload<ExtArgs>
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorePayload>
            payload: StorePayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStore>
            payload: StorePayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoreGroupByOutputType>[]
            payload: StorePayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.StoreFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: StorePayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.StoreAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: StorePayload<ExtArgs>
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>,
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
            payload: StorePayload<ExtArgs>
          }
        }
      }
      Billboard: {
        operations: {
          findUnique: {
            args: Prisma.BillboardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload> | null
            payload: BillboardPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.BillboardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>
            payload: BillboardPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.BillboardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload> | null
            payload: BillboardPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.BillboardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>
            payload: BillboardPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.BillboardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>[]
            payload: BillboardPayload<ExtArgs>
          }
          create: {
            args: Prisma.BillboardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>
            payload: BillboardPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.BillboardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: BillboardPayload<ExtArgs>
          }
          delete: {
            args: Prisma.BillboardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>
            payload: BillboardPayload<ExtArgs>
          }
          update: {
            args: Prisma.BillboardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>
            payload: BillboardPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.BillboardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: BillboardPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.BillboardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: BillboardPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.BillboardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BillboardPayload>
            payload: BillboardPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.BillboardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBillboard>
            payload: BillboardPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.BillboardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BillboardGroupByOutputType>[]
            payload: BillboardPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.BillboardFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: BillboardPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.BillboardAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: BillboardPayload<ExtArgs>
          }
          count: {
            args: Prisma.BillboardCountArgs<ExtArgs>,
            result: $Utils.Optional<BillboardCountAggregateOutputType> | number
            payload: BillboardPayload<ExtArgs>
          }
        }
      }
      Banner: {
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload> | null
            payload: BannerPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>
            payload: BannerPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload> | null
            payload: BannerPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>
            payload: BannerPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>[]
            payload: BannerPayload<ExtArgs>
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>
            payload: BannerPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: BannerPayload<ExtArgs>
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>
            payload: BannerPayload<ExtArgs>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>
            payload: BannerPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: BannerPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: BannerPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BannerPayload>
            payload: BannerPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBanner>
            payload: BannerPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BannerGroupByOutputType>[]
            payload: BannerPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.BannerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: BannerPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.BannerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: BannerPayload<ExtArgs>
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>,
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
            payload: BannerPayload<ExtArgs>
          }
        }
      }
      Category: {
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
            payload: CategoryPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
            payload: CategoryPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
            payload: CategoryPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
            payload: CategoryPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>[]
            payload: CategoryPayload<ExtArgs>
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
            payload: CategoryPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CategoryPayload<ExtArgs>
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
            payload: CategoryPayload<ExtArgs>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
            payload: CategoryPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CategoryPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CategoryPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
            payload: CategoryPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
            payload: CategoryPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
            payload: CategoryPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: CategoryPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: CategoryPayload<ExtArgs>
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
            payload: CategoryPayload<ExtArgs>
          }
        }
      }
      Parent: {
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload> | null
            payload: ParentPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>
            payload: ParentPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload> | null
            payload: ParentPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>
            payload: ParentPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>[]
            payload: ParentPayload<ExtArgs>
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>
            payload: ParentPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ParentPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>
            payload: ParentPayload<ExtArgs>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>
            payload: ParentPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ParentPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ParentPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ParentPayload>
            payload: ParentPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParent>
            payload: ParentPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParentGroupByOutputType>[]
            payload: ParentPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.ParentFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ParentPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.ParentAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ParentPayload<ExtArgs>
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>,
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
            payload: ParentPayload<ExtArgs>
          }
        }
      }
      Type: {
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload> | null
            payload: TypePayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>
            payload: TypePayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload> | null
            payload: TypePayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>
            payload: TypePayload<ExtArgs>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>[]
            payload: TypePayload<ExtArgs>
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>
            payload: TypePayload<ExtArgs>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: TypePayload<ExtArgs>
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>
            payload: TypePayload<ExtArgs>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>
            payload: TypePayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: TypePayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: TypePayload<ExtArgs>
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TypePayload>
            payload: TypePayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateType>
            payload: TypePayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypeGroupByOutputType>[]
            payload: TypePayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.TypeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: TypePayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.TypeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: TypePayload<ExtArgs>
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>,
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
            payload: TypePayload<ExtArgs>
          }
        }
      }
      Product: {
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload> | null
            payload: ProductPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
            payload: ProductPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload> | null
            payload: ProductPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
            payload: ProductPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>[]
            payload: ProductPayload<ExtArgs>
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
            payload: ProductPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ProductPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
            payload: ProductPayload<ExtArgs>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
            payload: ProductPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ProductPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ProductPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
            payload: ProductPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
            payload: ProductPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
            payload: ProductPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ProductPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ProductPayload<ExtArgs>
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
            payload: ProductPayload<ExtArgs>
          }
        }
      }
      Order: {
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload> | null
            payload: OrderPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>
            payload: OrderPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload> | null
            payload: OrderPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>
            payload: OrderPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>[]
            payload: OrderPayload<ExtArgs>
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>
            payload: OrderPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OrderPayload<ExtArgs>
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>
            payload: OrderPayload<ExtArgs>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>
            payload: OrderPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OrderPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OrderPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderPayload>
            payload: OrderPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
            payload: OrderPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
            payload: OrderPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.OrderFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: OrderPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.OrderAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: OrderPayload<ExtArgs>
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
            payload: OrderPayload<ExtArgs>
          }
        }
      }
      OrderItem: {
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload> | null
            payload: OrderItemPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>
            payload: OrderItemPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload> | null
            payload: OrderItemPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>
            payload: OrderItemPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>[]
            payload: OrderItemPayload<ExtArgs>
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>
            payload: OrderItemPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OrderItemPayload<ExtArgs>
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>
            payload: OrderItemPayload<ExtArgs>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>
            payload: OrderItemPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OrderItemPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OrderItemPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemPayload>
            payload: OrderItemPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItem>
            payload: OrderItemPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
            payload: OrderItemPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.OrderItemFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: OrderItemPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.OrderItemAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: OrderItemPayload<ExtArgs>
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
            payload: OrderItemPayload<ExtArgs>
          }
        }
      }
      Size: {
        operations: {
          findUnique: {
            args: Prisma.SizeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload> | null
            payload: SizePayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.SizeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>
            payload: SizePayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.SizeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload> | null
            payload: SizePayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.SizeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>
            payload: SizePayload<ExtArgs>
          }
          findMany: {
            args: Prisma.SizeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>[]
            payload: SizePayload<ExtArgs>
          }
          create: {
            args: Prisma.SizeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>
            payload: SizePayload<ExtArgs>
          }
          createMany: {
            args: Prisma.SizeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: SizePayload<ExtArgs>
          }
          delete: {
            args: Prisma.SizeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>
            payload: SizePayload<ExtArgs>
          }
          update: {
            args: Prisma.SizeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>
            payload: SizePayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.SizeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: SizePayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.SizeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: SizePayload<ExtArgs>
          }
          upsert: {
            args: Prisma.SizeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SizePayload>
            payload: SizePayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSize>
            payload: SizePayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.SizeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SizeGroupByOutputType>[]
            payload: SizePayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.SizeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: SizePayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.SizeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: SizePayload<ExtArgs>
          }
          count: {
            args: Prisma.SizeCountArgs<ExtArgs>,
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
            payload: SizePayload<ExtArgs>
          }
        }
      }
      Otp: {
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload> | null
            payload: OtpPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>
            payload: OtpPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload> | null
            payload: OtpPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>
            payload: OtpPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>[]
            payload: OtpPayload<ExtArgs>
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>
            payload: OtpPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OtpPayload<ExtArgs>
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>
            payload: OtpPayload<ExtArgs>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>
            payload: OtpPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OtpPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: OtpPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OtpPayload>
            payload: OtpPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOtp>
            payload: OtpPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OtpGroupByOutputType>[]
            payload: OtpPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.OtpFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: OtpPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.OtpAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: OtpPayload<ExtArgs>
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>,
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
            payload: OtpPayload<ExtArgs>
          }
        }
      }
      Color: {
        operations: {
          findUnique: {
            args: Prisma.ColorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload> | null
            payload: ColorPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ColorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>
            payload: ColorPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ColorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload> | null
            payload: ColorPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ColorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>
            payload: ColorPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ColorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>[]
            payload: ColorPayload<ExtArgs>
          }
          create: {
            args: Prisma.ColorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>
            payload: ColorPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ColorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ColorPayload<ExtArgs>
          }
          delete: {
            args: Prisma.ColorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>
            payload: ColorPayload<ExtArgs>
          }
          update: {
            args: Prisma.ColorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>
            payload: ColorPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ColorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ColorPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ColorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ColorPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ColorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColorPayload>
            payload: ColorPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateColor>
            payload: ColorPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ColorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ColorGroupByOutputType>[]
            payload: ColorPayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.ColorFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ColorPayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.ColorAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ColorPayload<ExtArgs>
          }
          count: {
            args: Prisma.ColorCountArgs<ExtArgs>,
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
            payload: ColorPayload<ExtArgs>
          }
        }
      }
      Image: {
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload> | null
            payload: ImagePayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
            payload: ImagePayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload> | null
            payload: ImagePayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
            payload: ImagePayload<ExtArgs>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>[]
            payload: ImagePayload<ExtArgs>
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
            payload: ImagePayload<ExtArgs>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ImagePayload<ExtArgs>
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
            payload: ImagePayload<ExtArgs>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
            payload: ImagePayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ImagePayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: ImagePayload<ExtArgs>
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
            payload: ImagePayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
            payload: ImagePayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
            payload: ImagePayload<ExtArgs>
          }
          findRaw: {
            args: Prisma.ImageFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ImagePayload<ExtArgs>
          }
          aggregateRaw: {
            args: Prisma.ImageAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
            payload: ImagePayload<ExtArgs>
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
            payload: ImagePayload<ExtArgs>
          }
        }
      }
    }
  } & {
    other: {
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
          payload: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type CartCountOutputType
   */


  export type CartCountOutputType = {
    user: number
    cartItem: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | CartCountOutputTypeCountUserArgs
    cartItem?: boolean | CartCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }



  /**
   * Count Type CartItemCountOutputType
   */


  export type CartItemCountOutputType = {
    Cart: number
  }

  export type CartItemCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Cart?: boolean | CartItemCountOutputTypeCountCartArgs
  }

  // Custom InputTypes

  /**
   * CartItemCountOutputType without action
   */
  export type CartItemCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItemCountOutputType
     */
    select?: CartItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CartItemCountOutputType without action
   */
  export type CartItemCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }



  /**
   * Count Type StoreCountOutputType
   */


  export type StoreCountOutputType = {
    billboards: number
    types: number
    banners: number
    categories: number
    products: number
    parents: number
    sizes: number
    colors: number
    orders: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    billboards?: boolean | StoreCountOutputTypeCountBillboardsArgs
    types?: boolean | StoreCountOutputTypeCountTypesArgs
    banners?: boolean | StoreCountOutputTypeCountBannersArgs
    categories?: boolean | StoreCountOutputTypeCountCategoriesArgs
    products?: boolean | StoreCountOutputTypeCountProductsArgs
    parents?: boolean | StoreCountOutputTypeCountParentsArgs
    sizes?: boolean | StoreCountOutputTypeCountSizesArgs
    colors?: boolean | StoreCountOutputTypeCountColorsArgs
    orders?: boolean | StoreCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountBillboardsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountBannersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type BillboardCountOutputType
   */


  export type BillboardCountOutputType = {
    categories: number
  }

  export type BillboardCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | BillboardCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * BillboardCountOutputType without action
   */
  export type BillboardCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardCountOutputType
     */
    select?: BillboardCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BillboardCountOutputType without action
   */
  export type BillboardCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ParentCountOutputType
   */


  export type ParentCountOutputType = {
    categories: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | ParentCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }



  /**
   * Count Type TypeCountOutputType
   */


  export type TypeCountOutputType = {
    parents: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    parents?: boolean | TypeCountOutputTypeCountParentsArgs
  }

  // Custom InputTypes

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    images: number
    cartItem: number
    orderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    cartItem?: boolean | ProductCountOutputTypeCountCartItemArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Count Type SizeCountOutputType
   */


  export type SizeCountOutputType = {
    products: number
    cartItem: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | SizeCountOutputTypeCountProductsArgs
    cartItem?: boolean | SizeCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }



  /**
   * Count Type ColorCountOutputType
   */


  export type ColorCountOutputType = {
    cartItem: number
    products: number
  }

  export type ColorCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cartItem?: boolean | ColorCountOutputTypeCountCartItemArgs
    products?: boolean | ColorCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorCountOutputType
     */
    select?: ColorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    role: Role | null
    mobile: string | null
    address: string | null
    cartId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    role: Role | null
    mobile: string | null
    address: string | null
    cartId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    password: number
    role: number
    mobile: number
    address: number
    cartId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    role?: true
    mobile?: true
    address?: true
    cartId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    role?: true
    mobile?: true
    address?: true
    cartId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    role?: true
    mobile?: true
    address?: true
    cartId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    name: string
    password: string
    role: Role
    mobile: string
    address: string
    cartId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    mobile?: boolean
    address?: boolean
    cartId?: boolean
    cart?: boolean | CartArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    mobile?: boolean
    address?: boolean
    cartId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cart?: boolean | CartArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cart<T extends CartArgs<ExtArgs> = {}>(args?: Subset<T, CartArgs<ExtArgs>>): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Cart
   */


  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    updatedAt: number
    cartItemId: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    updatedAt?: true
    cartItemId?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: Enumerable<CartOrderByWithAggregationInput>
    by: CartScalarFieldEnum[]
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }


  export type CartGroupByOutputType = {
    id: string
    updatedAt: Date
    cartItemId: string[]
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    cartItemId?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
    cartItem?: boolean | Cart$cartItemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    updatedAt?: boolean
    cartItemId?: boolean
  }

  export type CartInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
    cartItem?: boolean | Cart$cartItemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeArgs<ExtArgs>
  }


  type CartGetPayload<S extends boolean | null | undefined | CartArgs> = $Types.GetResult<CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CartFindManyArgs, 'select' | 'include'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cart'> extends True ? Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cart'> extends True ? Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CartPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
    **/
    create<T extends CartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartCreateArgs<ExtArgs>>
    ): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Carts.
     *     @param {CartCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const cart = await prisma.cart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
    **/
    delete<T extends CartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartDeleteArgs<ExtArgs>>
    ): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpdateArgs<ExtArgs>>
    ): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
    **/
    upsert<T extends CartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpsertArgs<ExtArgs>>
    ): Prisma__CartClient<$Types.GetResult<CartPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * @param {CartFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cart = await prisma.cart.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CartFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cart.
     * @param {CartAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cart = await prisma.cart.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CartAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Cart$userArgs<ExtArgs> = {}>(args?: Subset<T, Cart$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    cartItem<T extends Cart$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cart base type for findUnique actions
   */
  export type CartFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUnique
   */
  export interface CartFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CartFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }


  /**
   * Cart base type for findFirst actions
   */
  export type CartFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: Enumerable<CartScalarFieldEnum>
  }

  /**
   * Cart findFirst
   */
  export interface CartFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CartFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }


  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: Enumerable<CartCreateManyInput>
  }


  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }


  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
  }


  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }


  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }


  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
  }


  /**
   * Cart findRaw
   */
  export type CartFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Cart aggregateRaw
   */
  export type CartAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Cart.user
   */
  export type Cart$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Cart.cartItem
   */
  export type Cart$cartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * Cart without action
   */
  export type CartArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
  }



  /**
   * Model CartItem
   */


  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    sizeId: string | null
    colorId: string | null
    quantity: string | null
    productId: string | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    sizeId: string | null
    colorId: string | null
    quantity: string | null
    productId: string | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    sizeId: number
    colorId: number
    quantity: number
    productId: number
    cartId: number
    _all: number
  }


  export type CartItemMinAggregateInputType = {
    id?: true
    sizeId?: true
    colorId?: true
    quantity?: true
    productId?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    sizeId?: true
    colorId?: true
    quantity?: true
    productId?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    sizeId?: true
    colorId?: true
    quantity?: true
    productId?: true
    cartId?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithAggregationInput>
    by: CartItemScalarFieldEnum[]
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }


  export type CartItemGroupByOutputType = {
    id: string
    sizeId: string
    colorId: string
    quantity: string
    productId: string
    cartId: string[]
    _count: CartItemCountAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sizeId?: boolean
    colorId?: boolean
    quantity?: boolean
    productId?: boolean
    cartId?: boolean
    product?: boolean | ProductArgs<ExtArgs>
    color?: boolean | ColorArgs<ExtArgs>
    size?: boolean | SizeArgs<ExtArgs>
    Cart?: boolean | CartItem$CartArgs<ExtArgs>
    _count?: boolean | CartItemCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    sizeId?: boolean
    colorId?: boolean
    quantity?: boolean
    productId?: boolean
    cartId?: boolean
  }

  export type CartItemInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | ProductArgs<ExtArgs>
    color?: boolean | ColorArgs<ExtArgs>
    size?: boolean | SizeArgs<ExtArgs>
    Cart?: boolean | CartItem$CartArgs<ExtArgs>
    _count?: boolean | CartItemCountOutputTypeArgs<ExtArgs>
  }


  type CartItemGetPayload<S extends boolean | null | undefined | CartItemArgs> = $Types.GetResult<CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CartItemFindManyArgs, 'select' | 'include'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartItemFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CartItem'> extends True ? Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one CartItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartItemFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CartItem'> extends True ? Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first CartItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
    **/
    create<T extends CartItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many CartItems.
     *     @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     *     @example
     *     // Create many CartItems
     *     const cartItem = await prisma.cartItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
    **/
    delete<T extends CartItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
    **/
    upsert<T extends CartItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more CartItems that matches the filter.
     * @param {CartItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cartItem = await prisma.cartItem.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CartItemFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CartItem.
     * @param {CartItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cartItem = await prisma.cartItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CartItemAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductArgs<ExtArgs>>): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    color<T extends ColorArgs<ExtArgs> = {}>(args?: Subset<T, ColorArgs<ExtArgs>>): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    size<T extends SizeArgs<ExtArgs> = {}>(args?: Subset<T, SizeArgs<ExtArgs>>): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    Cart<T extends CartItem$CartArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$CartArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CartPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CartItem base type for findUnique actions
   */
  export type CartItemFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUnique
   */
  export interface CartItemFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CartItemFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem base type for findFirst actions
   */
  export type CartItemFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }

  /**
   * CartItem findFirst
   */
  export interface CartItemFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CartItemFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }


  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: Enumerable<CartItemCreateManyInput>
  }


  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }


  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem findRaw
   */
  export type CartItemFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CartItem aggregateRaw
   */
  export type CartItemAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CartItem.Cart
   */
  export type CartItem$CartArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * CartItem without action
   */
  export type CartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
  }



  /**
   * Model Store
   */


  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: Enumerable<StoreOrderByWithAggregationInput>
    by: StoreScalarFieldEnum[]
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }


  export type StoreGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    types?: boolean | Store$typesArgs<ExtArgs>
    banners?: boolean | Store$bannersArgs<ExtArgs>
    categories?: boolean | Store$categoriesArgs<ExtArgs>
    products?: boolean | Store$productsArgs<ExtArgs>
    parents?: boolean | Store$parentsArgs<ExtArgs>
    sizes?: boolean | Store$sizesArgs<ExtArgs>
    colors?: boolean | Store$colorsArgs<ExtArgs>
    orders?: boolean | Store$ordersArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    types?: boolean | Store$typesArgs<ExtArgs>
    banners?: boolean | Store$bannersArgs<ExtArgs>
    categories?: boolean | Store$categoriesArgs<ExtArgs>
    products?: boolean | Store$productsArgs<ExtArgs>
    parents?: boolean | Store$parentsArgs<ExtArgs>
    sizes?: boolean | Store$sizesArgs<ExtArgs>
    colors?: boolean | Store$colorsArgs<ExtArgs>
    orders?: boolean | Store$ordersArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeArgs<ExtArgs>
  }


  type StoreGetPayload<S extends boolean | null | undefined | StoreArgs> = $Types.GetResult<StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Store'> extends True ? Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Store'> extends True ? Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<StorePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends StoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreCreateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Stores.
     *     @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends StoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>
    ): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends StoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>
    ): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * @param {StoreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const store = await prisma.store.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: StoreFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Store.
     * @param {StoreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const store = await prisma.store.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: StoreAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    billboards<T extends Store$billboardsArgs<ExtArgs> = {}>(args?: Subset<T, Store$billboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findMany', never>| Null>;

    types<T extends Store$typesArgs<ExtArgs> = {}>(args?: Subset<T, Store$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TypePayload<ExtArgs>, T, 'findMany', never>| Null>;

    banners<T extends Store$bannersArgs<ExtArgs> = {}>(args?: Subset<T, Store$bannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findMany', never>| Null>;

    categories<T extends Store$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Store$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany', never>| Null>;

    products<T extends Store$productsArgs<ExtArgs> = {}>(args?: Subset<T, Store$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>| Null>;

    parents<T extends Store$parentsArgs<ExtArgs> = {}>(args?: Subset<T, Store$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    sizes<T extends Store$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Store$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SizePayload<ExtArgs>, T, 'findMany', never>| Null>;

    colors<T extends Store$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Store$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findMany', never>| Null>;

    orders<T extends Store$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Store$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Store base type for findUnique actions
   */
  export type StoreFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUnique
   */
  export interface StoreFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StoreFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store base type for findFirst actions
   */
  export type StoreFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: Enumerable<StoreScalarFieldEnum>
  }

  /**
   * Store findFirst
   */
  export interface StoreFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StoreFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }


  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: Enumerable<StoreCreateManyInput>
  }


  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }


  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }


  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }


  /**
   * Store findRaw
   */
  export type StoreFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Store aggregateRaw
   */
  export type StoreAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Store.billboards
   */
  export type Store$billboardsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    where?: BillboardWhereInput
    orderBy?: Enumerable<BillboardOrderByWithRelationInput>
    cursor?: BillboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BillboardScalarFieldEnum>
  }


  /**
   * Store.types
   */
  export type Store$typesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    where?: TypeWhereInput
    orderBy?: Enumerable<TypeOrderByWithRelationInput>
    cursor?: TypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TypeScalarFieldEnum>
  }


  /**
   * Store.banners
   */
  export type Store$bannersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    cursor?: BannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BannerScalarFieldEnum>
  }


  /**
   * Store.categories
   */
  export type Store$categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Store.products
   */
  export type Store$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Store.parents
   */
  export type Store$parentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    cursor?: ParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * Store.sizes
   */
  export type Store$sizesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    where?: SizeWhereInput
    orderBy?: Enumerable<SizeOrderByWithRelationInput>
    cursor?: SizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SizeScalarFieldEnum>
  }


  /**
   * Store.colors
   */
  export type Store$colorsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    where?: ColorWhereInput
    orderBy?: Enumerable<ColorOrderByWithRelationInput>
    cursor?: ColorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ColorScalarFieldEnum>
  }


  /**
   * Store.orders
   */
  export type Store$ordersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Store without action
   */
  export type StoreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
  }



  /**
   * Model Billboard
   */


  export type AggregateBillboard = {
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  export type BillboardMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardCountAggregateOutputType = {
    id: number
    storeId: number
    label: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillboardMinAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardMaxAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardCountAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillboardAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboard to aggregate.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: Enumerable<BillboardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billboards
    **/
    _count?: true | BillboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillboardMaxAggregateInputType
  }

  export type GetBillboardAggregateType<T extends BillboardAggregateArgs> = {
        [P in keyof T & keyof AggregateBillboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillboard[P]>
      : GetScalarType<T[P], AggregateBillboard[P]>
  }




  export type BillboardGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
    orderBy?: Enumerable<BillboardOrderByWithAggregationInput>
    by: BillboardScalarFieldEnum[]
    having?: BillboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillboardCountAggregateInputType | true
    _min?: BillboardMinAggregateInputType
    _max?: BillboardMaxAggregateInputType
  }


  export type BillboardGroupByOutputType = {
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  type GetBillboardGroupByPayload<T extends BillboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BillboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillboardGroupByOutputType[P]>
            : GetScalarType<T[P], BillboardGroupByOutputType[P]>
        }
      >
    >


  export type BillboardSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    categories?: boolean | Billboard$categoriesArgs<ExtArgs>
    _count?: boolean | BillboardCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["billboard"]>

  export type BillboardSelectScalar = {
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillboardInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    categories?: boolean | Billboard$categoriesArgs<ExtArgs>
    _count?: boolean | BillboardCountOutputTypeArgs<ExtArgs>
  }


  type BillboardGetPayload<S extends boolean | null | undefined | BillboardArgs> = $Types.GetResult<BillboardPayload, S>

  type BillboardCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BillboardFindManyArgs, 'select' | 'include'> & {
      select?: BillboardCountAggregateInputType | true
    }

  export interface BillboardDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Billboard'], meta: { name: 'Billboard' } }
    /**
     * Find zero or one Billboard that matches the filter.
     * @param {BillboardFindUniqueArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillboardFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BillboardFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Billboard'> extends True ? Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Billboard that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BillboardFindUniqueOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillboardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Billboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillboardFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BillboardFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Billboard'> extends True ? Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Billboard that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillboardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Billboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billboards
     * const billboards = await prisma.billboard.findMany()
     * 
     * // Get first 10 Billboards
     * const billboards = await prisma.billboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billboardWithIdOnly = await prisma.billboard.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillboardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Billboard.
     * @param {BillboardCreateArgs} args - Arguments to create a Billboard.
     * @example
     * // Create one Billboard
     * const Billboard = await prisma.billboard.create({
     *   data: {
     *     // ... data to create a Billboard
     *   }
     * })
     * 
    **/
    create<T extends BillboardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardCreateArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Billboards.
     *     @param {BillboardCreateManyArgs} args - Arguments to create many Billboards.
     *     @example
     *     // Create many Billboards
     *     const billboard = await prisma.billboard.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BillboardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Billboard.
     * @param {BillboardDeleteArgs} args - Arguments to delete one Billboard.
     * @example
     * // Delete one Billboard
     * const Billboard = await prisma.billboard.delete({
     *   where: {
     *     // ... filter to delete one Billboard
     *   }
     * })
     * 
    **/
    delete<T extends BillboardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardDeleteArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Billboard.
     * @param {BillboardUpdateArgs} args - Arguments to update one Billboard.
     * @example
     * // Update one Billboard
     * const billboard = await prisma.billboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillboardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpdateArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Billboards.
     * @param {BillboardDeleteManyArgs} args - Arguments to filter Billboards to delete.
     * @example
     * // Delete a few Billboards
     * const { count } = await prisma.billboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillboardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billboards
     * const billboard = await prisma.billboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillboardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Billboard.
     * @param {BillboardUpsertArgs} args - Arguments to update or create a Billboard.
     * @example
     * // Update or create a Billboard
     * const billboard = await prisma.billboard.upsert({
     *   create: {
     *     // ... data to create a Billboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billboard we want to update
     *   }
     * })
    **/
    upsert<T extends BillboardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpsertArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Billboards that matches the filter.
     * @param {BillboardFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const billboard = await prisma.billboard.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BillboardFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Billboard.
     * @param {BillboardAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const billboard = await prisma.billboard.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BillboardAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardCountArgs} args - Arguments to filter Billboards to count.
     * @example
     * // Count the number of Billboards
     * const count = await prisma.billboard.count({
     *   where: {
     *     // ... the filter for the Billboards we want to count
     *   }
     * })
    **/
    count<T extends BillboardCountArgs>(
      args?: Subset<T, BillboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillboardAggregateArgs>(args: Subset<T, BillboardAggregateArgs>): Prisma.PrismaPromise<GetBillboardAggregateType<T>>

    /**
     * Group by Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardGroupByArgs} args - Group by arguments.
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
      T extends BillboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillboardGroupByArgs['orderBy'] }
        : { orderBy?: BillboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BillboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Billboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BillboardClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    categories<T extends Billboard$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Billboard$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Billboard base type for findUnique actions
   */
  export type BillboardFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }

  /**
   * Billboard findUnique
   */
  export interface BillboardFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BillboardFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Billboard findUniqueOrThrow
   */
  export type BillboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard base type for findFirst actions
   */
  export type BillboardFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: Enumerable<BillboardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: Enumerable<BillboardScalarFieldEnum>
  }

  /**
   * Billboard findFirst
   */
  export interface BillboardFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BillboardFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Billboard findFirstOrThrow
   */
  export type BillboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: Enumerable<BillboardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: Enumerable<BillboardScalarFieldEnum>
  }


  /**
   * Billboard findMany
   */
  export type BillboardFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboards to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: Enumerable<BillboardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    distinct?: Enumerable<BillboardScalarFieldEnum>
  }


  /**
   * Billboard create
   */
  export type BillboardCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Billboard.
     */
    data: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
  }


  /**
   * Billboard createMany
   */
  export type BillboardCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Billboards.
     */
    data: Enumerable<BillboardCreateManyInput>
  }


  /**
   * Billboard update
   */
  export type BillboardUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Billboard.
     */
    data: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
    /**
     * Choose, which Billboard to update.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard updateMany
   */
  export type BillboardUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Billboards.
     */
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyInput>
    /**
     * Filter which Billboards to update
     */
    where?: BillboardWhereInput
  }


  /**
   * Billboard upsert
   */
  export type BillboardUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Billboard to update in case it exists.
     */
    where: BillboardWhereUniqueInput
    /**
     * In case the Billboard found by the `where` argument doesn't exist, create a new Billboard with this data.
     */
    create: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
    /**
     * In case the Billboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
  }


  /**
   * Billboard delete
   */
  export type BillboardDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter which Billboard to delete.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard deleteMany
   */
  export type BillboardDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboards to delete
     */
    where?: BillboardWhereInput
  }


  /**
   * Billboard findRaw
   */
  export type BillboardFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Billboard aggregateRaw
   */
  export type BillboardAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Billboard.categories
   */
  export type Billboard$categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Billboard without action
   */
  export type BillboardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
  }



  /**
   * Model Banner
   */


  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    storeId: number
    label: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: Enumerable<BannerOrderByWithAggregationInput>
    by: BannerScalarFieldEnum[]
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }


  export type BannerGroupByOutputType = {
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
  }


  type BannerGetPayload<S extends boolean | null | undefined | BannerArgs> = $Types.GetResult<BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BannerFindManyArgs, 'select' | 'include'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BannerFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Banner'> extends True ? Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Banner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BannerFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Banner'> extends True ? Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Banner that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BannerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BannerPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
    **/
    create<T extends BannerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BannerCreateArgs<ExtArgs>>
    ): Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Banners.
     *     @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     *     @example
     *     // Create many Banners
     *     const banner = await prisma.banner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BannerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
    **/
    delete<T extends BannerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>
    ): Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BannerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>
    ): Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BannerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BannerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
    **/
    upsert<T extends BannerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>
    ): Prisma__BannerClient<$Types.GetResult<BannerPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * @param {BannerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const banner = await prisma.banner.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BannerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Banner.
     * @param {BannerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const banner = await prisma.banner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BannerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Banner base type for findUnique actions
   */
  export type BannerFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUnique
   */
  export interface BannerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BannerFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner base type for findFirst actions
   */
  export type BannerFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: Enumerable<BannerScalarFieldEnum>
  }

  /**
   * Banner findFirst
   */
  export interface BannerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BannerFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: Enumerable<BannerScalarFieldEnum>
  }


  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: Enumerable<BannerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: Enumerable<BannerScalarFieldEnum>
  }


  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }


  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: Enumerable<BannerCreateManyInput>
  }


  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
  }


  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }


  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }


  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
  }


  /**
   * Banner findRaw
   */
  export type BannerFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Banner aggregateRaw
   */
  export type BannerAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Banner without action
   */
  export type BannerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BannerInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    billboardId: string | null
    name: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    billboardId: string | null
    name: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    storeId: number
    billboardId: number
    name: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    storeId?: true
    billboardId?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    storeId?: true
    billboardId?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    storeId?: true
    billboardId?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    storeId: string
    billboardId: string
    name: string
    parentId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    billboardId?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    billboard?: boolean | BillboardArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    parent?: boolean | ParentArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    storeId?: boolean
    billboardId?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    billboard?: boolean | BillboardArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    parent?: boolean | ParentArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> = $Types.GetResult<CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CategoryFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CategoryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    billboard<T extends BillboardArgs<ExtArgs> = {}>(args?: Subset<T, BillboardArgs<ExtArgs>>): Prisma__BillboardClient<$Types.GetResult<BillboardPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>| Null>;

    parent<T extends ParentArgs<ExtArgs> = {}>(args?: Subset<T, ParentArgs<ExtArgs>>): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CategoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CategoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Parent
   */


  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    typeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    typeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    storeId: number
    name: number
    typeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: Enumerable<ParentOrderByWithAggregationInput>
    by: ParentScalarFieldEnum[]
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }


  export type ParentGroupByOutputType = {
    id: string
    storeId: string
    name: string
    typeId: string
    createdAt: Date
    updatedAt: Date
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    name?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    categories?: boolean | Parent$categoriesArgs<ExtArgs>
    type?: boolean | TypeArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    storeId?: boolean
    name?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    categories?: boolean | Parent$categoriesArgs<ExtArgs>
    type?: boolean | TypeArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeArgs<ExtArgs>
  }


  type ParentGetPayload<S extends boolean | null | undefined | ParentArgs> = $Types.GetResult<ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ParentFindManyArgs, 'select' | 'include'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Parent'> extends True ? Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Parent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Parent'> extends True ? Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Parent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
    **/
    create<T extends ParentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParentCreateArgs<ExtArgs>>
    ): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Parents.
     *     @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     *     @example
     *     // Create many Parents
     *     const parent = await prisma.parent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
    **/
    delete<T extends ParentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>
    ): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>
    ): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
    **/
    upsert<T extends ParentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>
    ): Prisma__ParentClient<$Types.GetResult<ParentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Parents that matches the filter.
     * @param {ParentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const parent = await prisma.parent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ParentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Parent.
     * @param {ParentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const parent = await prisma.parent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ParentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    categories<T extends Parent$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Parent$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany', never>| Null>;

    type<T extends TypeArgs<ExtArgs> = {}>(args?: Subset<T, TypeArgs<ExtArgs>>): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Parent base type for findUnique actions
   */
  export type ParentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUnique
   */
  export interface ParentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ParentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }


  /**
   * Parent base type for findFirst actions
   */
  export type ParentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: Enumerable<ParentScalarFieldEnum>
  }

  /**
   * Parent findFirst
   */
  export interface ParentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ParentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }


  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: Enumerable<ParentCreateManyInput>
  }


  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }


  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
  }


  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }


  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }


  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
  }


  /**
   * Parent findRaw
   */
  export type ParentFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Parent aggregateRaw
   */
  export type ParentAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Parent.categories
   */
  export type Parent$categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Parent without action
   */
  export type ParentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
  }



  /**
   * Model Type
   */


  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypeMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    storeId: number
    label: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TypeMinAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: Enumerable<TypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: Enumerable<TypeOrderByWithAggregationInput>
    by: TypeScalarFieldEnum[]
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }


  export type TypeGroupByOutputType = {
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    parents?: boolean | Type$parentsArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TypeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    parents?: boolean | Type$parentsArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeArgs<ExtArgs>
  }


  type TypeGetPayload<S extends boolean | null | undefined | TypeArgs> = $Types.GetResult<TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TypeFindManyArgs, 'select' | 'include'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TypeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Type'> extends True ? Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TypeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Type'> extends True ? Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Type that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TypePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
    **/
    create<T extends TypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeCreateArgs<ExtArgs>>
    ): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Types.
     *     @param {TypeCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const type = await prisma.type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
    **/
    delete<T extends TypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>
    ): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>
    ): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
    **/
    upsert<T extends TypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>
    ): Prisma__TypeClient<$Types.GetResult<TypePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * @param {TypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const type = await prisma.type.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TypeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Type.
     * @param {TypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const type = await prisma.type.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TypeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
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
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    parents<T extends Type$parentsArgs<ExtArgs> = {}>(args?: Subset<T, Type$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ParentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Type base type for findUnique actions
   */
  export type TypeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUnique
   */
  export interface TypeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TypeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type base type for findFirst actions
   */
  export type TypeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: Enumerable<TypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: Enumerable<TypeScalarFieldEnum>
  }

  /**
   * Type findFirst
   */
  export interface TypeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TypeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: Enumerable<TypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: Enumerable<TypeScalarFieldEnum>
  }


  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: Enumerable<TypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: Enumerable<TypeScalarFieldEnum>
  }


  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }


  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: Enumerable<TypeCreateManyInput>
  }


  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
  }


  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }


  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
  }


  /**
   * Type findRaw
   */
  export type TypeFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Type aggregateRaw
   */
  export type TypeAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Type.parents
   */
  export type Type$parentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    cursor?: ParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * Type without action
   */
  export type TypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    categoryId: string | null
    name: string | null
    price: string | null
    isFeatured: boolean | null
    isArchived: boolean | null
    sizeId: string | null
    colorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    categoryId: string | null
    name: string | null
    price: string | null
    isFeatured: boolean | null
    isArchived: boolean | null
    sizeId: string | null
    colorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    storeId: number
    categoryId: number
    name: number
    price: number
    isFeatured: number
    isArchived: number
    sizeId: number
    colorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    storeId?: true
    categoryId?: true
    name?: true
    price?: true
    isFeatured?: true
    isArchived?: true
    sizeId?: true
    colorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    storeId?: true
    categoryId?: true
    name?: true
    price?: true
    isFeatured?: true
    isArchived?: true
    sizeId?: true
    colorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    storeId?: true
    categoryId?: true
    name?: true
    price?: true
    isFeatured?: true
    isArchived?: true
    sizeId?: true
    colorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured: boolean
    isArchived: boolean
    sizeId: string
    colorId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    categoryId?: boolean
    name?: boolean
    price?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    sizeId?: boolean
    colorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    category?: boolean | CategoryArgs<ExtArgs>
    size?: boolean | SizeArgs<ExtArgs>
    color?: boolean | ColorArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    cartItem?: boolean | Product$cartItemArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    storeId?: boolean
    categoryId?: boolean
    name?: boolean
    price?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    sizeId?: boolean
    colorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    category?: boolean | CategoryArgs<ExtArgs>
    size?: boolean | SizeArgs<ExtArgs>
    color?: boolean | ColorArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    cartItem?: boolean | Product$cartItemArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeArgs<ExtArgs>
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> = $Types.GetResult<ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    category<T extends CategoryArgs<ExtArgs> = {}>(args?: Subset<T, CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    size<T extends SizeArgs<ExtArgs> = {}>(args?: Subset<T, SizeArgs<ExtArgs>>): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    color<T extends ColorArgs<ExtArgs> = {}>(args?: Subset<T, ColorArgs<ExtArgs>>): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    cartItem<T extends Product$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findMany', never>| Null>;

    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProductFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProductFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductCreateManyInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Product.cartItem
   */
  export type Product$cartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Product without action
   */
  export type ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    isPaid: boolean | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    isPaid: boolean | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    storeId: number
    isPaid: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    storeId?: true
    isPaid?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    storeId?: true
    isPaid?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    storeId?: true
    isPaid?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: OrderScalarFieldEnum[]
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: string
    storeId: string
    isPaid: boolean
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    isPaid?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    storeId?: boolean
    isPaid?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeArgs<ExtArgs>
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderArgs> = $Types.GetResult<OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * @param {OrderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const order = await prisma.order.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OrderFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Order.
     * @param {OrderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const order = await prisma.order.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OrderAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUnique
   */
  export interface OrderFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrderFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order findFirst
   */
  export interface OrderFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrderFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: Enumerable<OrderCreateManyInput>
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order findRaw
   */
  export type OrderFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Order aggregateRaw
   */
  export type OrderAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Order without action
   */
  export type OrderArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model OrderItem
   */


  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    _all: number
  }


  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithAggregationInput>
    by: OrderItemScalarFieldEnum[]
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }


  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrderArgs<ExtArgs>
    product?: boolean | ProductArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    order?: boolean | OrderArgs<ExtArgs>
    product?: boolean | ProductArgs<ExtArgs>
  }


  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemArgs> = $Types.GetResult<OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderItem'> extends True ? Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderItem'> extends True ? Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Types.GetResult<OrderItemPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * @param {OrderItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const orderItem = await prisma.orderItem.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OrderItemFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OrderItem.
     * @param {OrderItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const orderItem = await prisma.orderItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OrderItemAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    order<T extends OrderArgs<ExtArgs> = {}>(args?: Subset<T, OrderArgs<ExtArgs>>): Prisma__OrderClient<$Types.GetResult<OrderPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    product<T extends ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductArgs<ExtArgs>>): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OrderItem base type for findUnique actions
   */
  export type OrderItemFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUnique
   */
  export interface OrderItemFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrderItemFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem base type for findFirst actions
   */
  export type OrderItemFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }

  /**
   * OrderItem findFirst
   */
  export interface OrderItemFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrderItemFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: Enumerable<OrderItemCreateManyInput>
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem findRaw
   */
  export type OrderItemFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * OrderItem aggregateRaw
   */
  export type OrderItemAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * OrderItem without action
   */
  export type OrderItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
  }



  /**
   * Model Size
   */


  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SizeMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    storeId: number
    name: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SizeMinAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size to aggregate.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: Enumerable<SizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type SizeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
    orderBy?: Enumerable<SizeOrderByWithAggregationInput>
    by: SizeScalarFieldEnum[]
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }


  export type SizeGroupByOutputType = {
    id: string
    storeId: string
    name: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type SizeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    products?: boolean | Size$productsArgs<ExtArgs>
    cartItem?: boolean | Size$cartItemArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectScalar = {
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SizeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    products?: boolean | Size$productsArgs<ExtArgs>
    cartItem?: boolean | Size$cartItemArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeArgs<ExtArgs>
  }


  type SizeGetPayload<S extends boolean | null | undefined | SizeArgs> = $Types.GetResult<SizePayload, S>

  type SizeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SizeFindManyArgs, 'select' | 'include'> & {
      select?: SizeCountAggregateInputType | true
    }

  export interface SizeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size'], meta: { name: 'Size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SizeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SizeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Size'> extends True ? Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Size that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SizeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SizeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SizeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Size'> extends True ? Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Size that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SizeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SizeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SizePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
    **/
    create<T extends SizeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SizeCreateArgs<ExtArgs>>
    ): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Sizes.
     *     @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     *     @example
     *     // Create many Sizes
     *     const size = await prisma.size.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SizeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
    **/
    delete<T extends SizeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SizeDeleteArgs<ExtArgs>>
    ): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SizeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpdateArgs<ExtArgs>>
    ): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SizeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SizeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
    **/
    upsert<T extends SizeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpsertArgs<ExtArgs>>
    ): Prisma__SizeClient<$Types.GetResult<SizePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Sizes that matches the filter.
     * @param {SizeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const size = await prisma.size.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SizeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Size.
     * @param {SizeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const size = await prisma.size.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SizeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
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
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SizeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    products<T extends Size$productsArgs<ExtArgs> = {}>(args?: Subset<T, Size$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>| Null>;

    cartItem<T extends Size$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Size$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Size base type for findUnique actions
   */
  export type SizeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findUnique
   */
  export interface SizeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SizeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Size findUniqueOrThrow
   */
  export type SizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size base type for findFirst actions
   */
  export type SizeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: Enumerable<SizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: Enumerable<SizeScalarFieldEnum>
  }

  /**
   * Size findFirst
   */
  export interface SizeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SizeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Size findFirstOrThrow
   */
  export type SizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: Enumerable<SizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: Enumerable<SizeScalarFieldEnum>
  }


  /**
   * Size findMany
   */
  export type SizeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: Enumerable<SizeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: Enumerable<SizeScalarFieldEnum>
  }


  /**
   * Size create
   */
  export type SizeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Size.
     */
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }


  /**
   * Size createMany
   */
  export type SizeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: Enumerable<SizeCreateManyInput>
  }


  /**
   * Size update
   */
  export type SizeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Size.
     */
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
  }


  /**
   * Size upsert
   */
  export type SizeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Size to update in case it exists.
     */
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     */
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }


  /**
   * Size delete
   */
  export type SizeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter which Size to delete.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizeWhereInput
  }


  /**
   * Size findRaw
   */
  export type SizeFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Size aggregateRaw
   */
  export type SizeAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Size.products
   */
  export type Size$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Size.cartItem
   */
  export type Size$cartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * Size without action
   */
  export type SizeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
  }



  /**
   * Model Otp
   */


  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    mobile: string | null
    otp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    mobile: string | null
    otp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    mobile: number
    otp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    mobile?: true
    otp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    mobile?: true
    otp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    mobile?: true
    otp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: Enumerable<OtpOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: Enumerable<OtpOrderByWithAggregationInput>
    by: OtpScalarFieldEnum[]
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }


  export type OtpGroupByOutputType = {
    id: string
    mobile: string
    otp: string
    createdAt: Date
    updatedAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    mobile?: boolean
    otp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  type OtpGetPayload<S extends boolean | null | undefined | OtpArgs> = $Types.GetResult<OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OtpFindManyArgs, 'select' | 'include'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OtpFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Otp'> extends True ? Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Otp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OtpFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Otp'> extends True ? Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Otp that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OtpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OtpPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
    **/
    create<T extends OtpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpCreateArgs<ExtArgs>>
    ): Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Otps.
     *     @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     *     @example
     *     // Create many Otps
     *     const otp = await prisma.otp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OtpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
    **/
    delete<T extends OtpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>
    ): Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OtpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>
    ): Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OtpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OtpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
    **/
    upsert<T extends OtpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>
    ): Prisma__OtpClient<$Types.GetResult<OtpPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Otps that matches the filter.
     * @param {OtpFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const otp = await prisma.otp.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OtpFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Otp.
     * @param {OtpAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const otp = await prisma.otp.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OtpAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Otp base type for findUnique actions
   */
  export type OtpFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUnique
   */
  export interface OtpFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OtpFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp base type for findFirst actions
   */
  export type OtpFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: Enumerable<OtpOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: Enumerable<OtpScalarFieldEnum>
  }

  /**
   * Otp findFirst
   */
  export interface OtpFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OtpFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: Enumerable<OtpOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: Enumerable<OtpScalarFieldEnum>
  }


  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: Enumerable<OtpOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: Enumerable<OtpScalarFieldEnum>
  }


  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }


  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: Enumerable<OtpCreateManyInput>
  }


  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
  }


  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }


  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
  }


  /**
   * Otp findRaw
   */
  export type OtpFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Otp aggregateRaw
   */
  export type OtpAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Otp without action
   */
  export type OtpArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
  }



  /**
   * Model Color
   */


  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    storeId: number
    name: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColorMinAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Color to aggregate.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: Enumerable<ColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type ColorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
    orderBy?: Enumerable<ColorOrderByWithAggregationInput>
    by: ColorScalarFieldEnum[]
    having?: ColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }


  export type ColorGroupByOutputType = {
    id: string
    storeId: string
    name: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: ColorCountAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends ColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type ColorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreArgs<ExtArgs>
    cartItem?: boolean | Color$cartItemArgs<ExtArgs>
    products?: boolean | Color$productsArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectScalar = {
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    store?: boolean | StoreArgs<ExtArgs>
    cartItem?: boolean | Color$cartItemArgs<ExtArgs>
    products?: boolean | Color$productsArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeArgs<ExtArgs>
  }


  type ColorGetPayload<S extends boolean | null | undefined | ColorArgs> = $Types.GetResult<ColorPayload, S>

  type ColorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ColorFindManyArgs, 'select' | 'include'> & {
      select?: ColorCountAggregateInputType | true
    }

  export interface ColorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Color'], meta: { name: 'Color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {ColorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ColorFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ColorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Color'> extends True ? Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Color that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ColorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ColorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ColorFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ColorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Color'> extends True ? Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Color that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ColorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ColorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ColorPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Color.
     * @param {ColorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
    **/
    create<T extends ColorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ColorCreateArgs<ExtArgs>>
    ): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Colors.
     *     @param {ColorCreateManyArgs} args - Arguments to create many Colors.
     *     @example
     *     // Create many Colors
     *     const color = await prisma.color.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ColorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Color.
     * @param {ColorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
    **/
    delete<T extends ColorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ColorDeleteArgs<ExtArgs>>
    ): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Color.
     * @param {ColorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ColorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpdateArgs<ExtArgs>>
    ): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Colors.
     * @param {ColorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ColorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ColorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Color.
     * @param {ColorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
    **/
    upsert<T extends ColorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpsertArgs<ExtArgs>>
    ): Prisma__ColorClient<$Types.GetResult<ColorPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Colors that matches the filter.
     * @param {ColorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const color = await prisma.color.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ColorFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Color.
     * @param {ColorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const color = await prisma.color.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ColorAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends ColorCountArgs>(
      args?: Subset<T, ColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorGroupByArgs} args - Group by arguments.
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
      T extends ColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorGroupByArgs['orderBy'] }
        : { orderBy?: ColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ColorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    store<T extends StoreArgs<ExtArgs> = {}>(args?: Subset<T, StoreArgs<ExtArgs>>): Prisma__StoreClient<$Types.GetResult<StorePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    cartItem<T extends Color$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Color$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CartItemPayload<ExtArgs>, T, 'findMany', never>| Null>;

    products<T extends Color$productsArgs<ExtArgs> = {}>(args?: Subset<T, Color$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Color base type for findUnique actions
   */
  export type ColorFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findUnique
   */
  export interface ColorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ColorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Color findUniqueOrThrow
   */
  export type ColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color base type for findFirst actions
   */
  export type ColorFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: Enumerable<ColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: Enumerable<ColorScalarFieldEnum>
  }

  /**
   * Color findFirst
   */
  export interface ColorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ColorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Color findFirstOrThrow
   */
  export type ColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: Enumerable<ColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: Enumerable<ColorScalarFieldEnum>
  }


  /**
   * Color findMany
   */
  export type ColorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Colors to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: Enumerable<ColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    distinct?: Enumerable<ColorScalarFieldEnum>
  }


  /**
   * Color create
   */
  export type ColorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to create a Color.
     */
    data: XOR<ColorCreateInput, ColorUncheckedCreateInput>
  }


  /**
   * Color createMany
   */
  export type ColorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colors.
     */
    data: Enumerable<ColorCreateManyInput>
  }


  /**
   * Color update
   */
  export type ColorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to update a Color.
     */
    data: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
    /**
     * Choose, which Color to update.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color updateMany
   */
  export type ColorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
  }


  /**
   * Color upsert
   */
  export type ColorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The filter to search for the Color to update in case it exists.
     */
    where: ColorWhereUniqueInput
    /**
     * In case the Color found by the `where` argument doesn't exist, create a new Color with this data.
     */
    create: XOR<ColorCreateInput, ColorUncheckedCreateInput>
    /**
     * In case the Color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
  }


  /**
   * Color delete
   */
  export type ColorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter which Color to delete.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color deleteMany
   */
  export type ColorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colors to delete
     */
    where?: ColorWhereInput
  }


  /**
   * Color findRaw
   */
  export type ColorFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Color aggregateRaw
   */
  export type ColorAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Color.cartItem
   */
  export type Color$cartItemArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: Enumerable<CartItemOrderByWithRelationInput>
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartItemScalarFieldEnum>
  }


  /**
   * Color.products
   */
  export type Color$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Color without action
   */
  export type ColorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: ImageScalarFieldEnum[]
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: string
    productId: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | ProductArgs<ExtArgs>
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageArgs> = $Types.GetResult<ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * @param {ImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const image = await prisma.image.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ImageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Image.
     * @param {ImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const image = await prisma.image.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ImageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductArgs<ExtArgs>>): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Image base type for findUnique actions
   */
  export type ImageFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUnique
   */
  export interface ImageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ImageFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image base type for findFirst actions
   */
  export type ImageFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: Enumerable<ImageScalarFieldEnum>
  }

  /**
   * Image findFirst
   */
  export interface ImageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ImageFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: Enumerable<ImageCreateManyInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image findRaw
   */
  export type ImageFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Image aggregateRaw
   */
  export type ImageAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Image without action
   */
  export type ImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    mobile: 'mobile',
    address: 'address',
    cartId: 'cartId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    cartItemId: 'cartItemId'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    sizeId: 'sizeId',
    colorId: 'colorId',
    quantity: 'quantity',
    productId: 'productId',
    cartId: 'cartId'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const BillboardScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    label: 'label',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillboardScalarFieldEnum = (typeof BillboardScalarFieldEnum)[keyof typeof BillboardScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    label: 'label',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    billboardId: 'billboardId',
    name: 'name',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    typeId: 'typeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    label: 'label',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    categoryId: 'categoryId',
    name: 'name',
    price: 'price',
    isFeatured: 'isFeatured',
    isArchived: 'isArchived',
    sizeId: 'sizeId',
    colorId: 'colorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    isPaid: 'isPaid',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    otp: 'otp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const ColorScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    mobile?: StringFilter | string
    address?: StringFilter | string
    cartId?: StringNullableFilter | string | null
    cart?: XOR<CartRelationFilter, CartWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    cartId?: SortOrder
    cart?: CartOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    cartId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    mobile?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    cartId?: StringNullableWithAggregatesFilter | string | null
  }

  export type CartWhereInput = {
    AND?: Enumerable<CartWhereInput>
    OR?: Enumerable<CartWhereInput>
    NOT?: Enumerable<CartWhereInput>
    id?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
    cartItemId?: StringNullableListFilter
    user?: UserListRelationFilter
    cartItem?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    cartItemId?: SortOrder
    user?: UserOrderByRelationAggregateInput
    cartItem?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = {
    id?: string
  }

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    cartItemId?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CartScalarWhereWithAggregatesInput>
    OR?: Enumerable<CartScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CartScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    cartItemId?: StringNullableListFilter
  }

  export type CartItemWhereInput = {
    AND?: Enumerable<CartItemWhereInput>
    OR?: Enumerable<CartItemWhereInput>
    NOT?: Enumerable<CartItemWhereInput>
    id?: StringFilter | string
    sizeId?: StringFilter | string
    colorId?: StringFilter | string
    quantity?: StringFilter | string
    productId?: StringFilter | string
    cartId?: StringNullableListFilter
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    color?: XOR<ColorRelationFilter, ColorWhereInput>
    size?: XOR<SizeRelationFilter, SizeWhereInput>
    Cart?: CartListRelationFilter
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    cartId?: SortOrder
    product?: ProductOrderByWithRelationInput
    color?: ColorOrderByWithRelationInput
    size?: SizeOrderByWithRelationInput
    Cart?: CartOrderByRelationAggregateInput
  }

  export type CartItemWhereUniqueInput = {
    id?: string
  }

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    cartId?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CartItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<CartItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CartItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sizeId?: StringWithAggregatesFilter | string
    colorId?: StringWithAggregatesFilter | string
    quantity?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
    cartId?: StringNullableListFilter
  }

  export type StoreWhereInput = {
    AND?: Enumerable<StoreWhereInput>
    OR?: Enumerable<StoreWhereInput>
    NOT?: Enumerable<StoreWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    billboards?: BillboardListRelationFilter
    types?: TypeListRelationFilter
    banners?: BannerListRelationFilter
    categories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    parents?: ParentListRelationFilter
    sizes?: SizeListRelationFilter
    colors?: ColorListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    billboards?: BillboardOrderByRelationAggregateInput
    types?: TypeOrderByRelationAggregateInput
    banners?: BannerOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    parents?: ParentOrderByRelationAggregateInput
    sizes?: SizeOrderByRelationAggregateInput
    colors?: ColorOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = {
    id?: string
  }

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StoreScalarWhereWithAggregatesInput>
    OR?: Enumerable<StoreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StoreScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BillboardWhereInput = {
    AND?: Enumerable<BillboardWhereInput>
    OR?: Enumerable<BillboardWhereInput>
    NOT?: Enumerable<BillboardWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    label?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
  }

  export type BillboardOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type BillboardWhereUniqueInput = {
    id?: string
  }

  export type BillboardOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillboardCountOrderByAggregateInput
    _max?: BillboardMaxOrderByAggregateInput
    _min?: BillboardMinOrderByAggregateInput
  }

  export type BillboardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BillboardScalarWhereWithAggregatesInput>
    OR?: Enumerable<BillboardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BillboardScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    imageUrl?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BannerWhereInput = {
    AND?: Enumerable<BannerWhereInput>
    OR?: Enumerable<BannerWhereInput>
    NOT?: Enumerable<BannerWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    label?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type BannerWhereUniqueInput = {
    id?: string
  }

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BannerScalarWhereWithAggregatesInput>
    OR?: Enumerable<BannerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BannerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    imageUrl?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    billboardId?: StringFilter | string
    name?: StringFilter | string
    parentId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    billboard?: XOR<BillboardRelationFilter, BillboardWhereInput>
    products?: ProductListRelationFilter
    parent?: XOR<ParentRelationFilter, ParentWhereInput>
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    billboard?: BillboardOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    parent?: ParentOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = {
    id?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    billboardId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    parentId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ParentWhereInput = {
    AND?: Enumerable<ParentWhereInput>
    OR?: Enumerable<ParentWhereInput>
    NOT?: Enumerable<ParentWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    name?: StringFilter | string
    typeId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
    type?: XOR<TypeRelationFilter, TypeWhereInput>
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    type?: TypeOrderByWithRelationInput
  }

  export type ParentWhereUniqueInput = {
    id?: string
  }

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ParentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ParentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ParentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    typeId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TypeWhereInput = {
    AND?: Enumerable<TypeWhereInput>
    OR?: Enumerable<TypeWhereInput>
    NOT?: Enumerable<TypeWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    label?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    parents?: ParentListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    parents?: ParentOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = {
    id?: string
  }

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<TypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    imageUrl?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    categoryId?: StringFilter | string
    name?: StringFilter | string
    price?: StringFilter | string
    isFeatured?: BoolFilter | boolean
    isArchived?: BoolFilter | boolean
    sizeId?: StringFilter | string
    colorId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    size?: XOR<SizeRelationFilter, SizeWhereInput>
    color?: XOR<ColorRelationFilter, ColorWhereInput>
    images?: ImageListRelationFilter
    cartItem?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    size?: SizeOrderByWithRelationInput
    color?: ColorOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    cartItem?: CartItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    categoryId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    price?: StringWithAggregatesFilter | string
    isFeatured?: BoolWithAggregatesFilter | boolean
    isArchived?: BoolWithAggregatesFilter | boolean
    sizeId?: StringWithAggregatesFilter | string
    colorId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    isPaid?: BoolFilter | boolean
    phone?: StringFilter | string
    address?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = {
    id?: string
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    isPaid?: BoolWithAggregatesFilter | boolean
    phone?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: Enumerable<OrderItemWhereInput>
    OR?: Enumerable<OrderItemWhereInput>
    NOT?: Enumerable<OrderItemWhereInput>
    id?: StringFilter | string
    orderId?: StringFilter | string
    productId?: StringFilter | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = {
    id?: string
  }

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    orderId?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
  }

  export type SizeWhereInput = {
    AND?: Enumerable<SizeWhereInput>
    OR?: Enumerable<SizeWhereInput>
    NOT?: Enumerable<SizeWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    name?: StringFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    products?: ProductListRelationFilter
    cartItem?: CartItemListRelationFilter
  }

  export type SizeOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    cartItem?: CartItemOrderByRelationAggregateInput
  }

  export type SizeWhereUniqueInput = {
    id?: string
  }

  export type SizeOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SizeCountOrderByAggregateInput
    _max?: SizeMaxOrderByAggregateInput
    _min?: SizeMinOrderByAggregateInput
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SizeScalarWhereWithAggregatesInput>
    OR?: Enumerable<SizeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SizeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OtpWhereInput = {
    AND?: Enumerable<OtpWhereInput>
    OR?: Enumerable<OtpWhereInput>
    NOT?: Enumerable<OtpWhereInput>
    id?: StringFilter | string
    mobile?: StringFilter | string
    otp?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpWhereUniqueInput = {
    id?: string
  }

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OtpScalarWhereWithAggregatesInput>
    OR?: Enumerable<OtpScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OtpScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    mobile?: StringWithAggregatesFilter | string
    otp?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ColorWhereInput = {
    AND?: Enumerable<ColorWhereInput>
    OR?: Enumerable<ColorWhereInput>
    NOT?: Enumerable<ColorWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    name?: StringFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    cartItem?: CartItemListRelationFilter
    products?: ProductListRelationFilter
  }

  export type ColorOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    cartItem?: CartItemOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type ColorWhereUniqueInput = {
    id?: string
  }

  export type ColorOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColorCountOrderByAggregateInput
    _max?: ColorMaxOrderByAggregateInput
    _min?: ColorMinOrderByAggregateInput
  }

  export type ColorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ColorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ColorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ColorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    storeId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = {
    id?: string
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    role?: Role
    mobile: string
    address: string
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    role?: Role
    mobile: string
    address: string
    cartId?: string | null
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    role?: Role
    mobile: string
    address: string
    cartId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartCreateInput = {
    id?: string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutCartInput
    cartItem?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    updatedAt?: Date | string
    cartItemId?: CartCreatecartItemIdInput | Enumerable<string>
    user?: UserUncheckedCreateNestedManyWithoutCartInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCartNestedInput
    cartItem?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItemId?: CartUpdatecartItemIdInput | Enumerable<string>
    user?: UserUncheckedUpdateManyWithoutCartNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    updatedAt?: Date | string
    cartItemId?: CartCreatecartItemIdInput | Enumerable<string>
  }

  export type CartUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItemId?: CartUpdatecartItemIdInput | Enumerable<string>
  }

  export type CartItemCreateInput = {
    id?: string
    quantity?: string
    product?: ProductCreateNestedOneWithoutCartItemInput
    color?: ColorCreateNestedOneWithoutCartItemInput
    size?: SizeCreateNestedOneWithoutCartItemInput
    Cart?: CartCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    sizeId?: string
    colorId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUpdateInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput
    color?: ColorUpdateOneRequiredWithoutCartItemNestedInput
    size?: SizeUpdateOneRequiredWithoutCartItemNestedInput
    Cart?: CartUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemCreateManyInput = {
    id?: string
    sizeId?: string
    colorId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutBillboardsInput
    categories?: CategoryCreateNestedManyWithoutBillboardInput
  }

  export type BillboardUncheckedCreateInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutBillboardInput
  }

  export type BillboardUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
    categories?: CategoryUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardCreateManyInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutBannersInput
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutBannersNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    parent: ParentCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    parent?: ParentUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutParentsInput
    categories?: CategoryCreateNestedManyWithoutParentInput
    type: TypeCreateNestedOneWithoutParentsInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    storeId: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutParentsNestedInput
    categories?: CategoryUpdateManyWithoutParentNestedInput
    type?: TypeUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: string
    storeId: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCreateInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutTypesInput
    parents?: ParentCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutTypesNestedInput
    parents?: ParentUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    storeId: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    storeId: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
  }

  export type OrderItemUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
  }

  export type OrderItemUpdateManyMutationInput = {

  }

  export type OrderItemUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type SizeCreateInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutSizesInput
    products?: ProductCreateNestedManyWithoutSizeInput
    cartItem?: CartItemCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSizeInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSizesNestedInput
    products?: ProductUpdateManyWithoutSizeNestedInput
    cartItem?: CartItemUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSizeNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type SizeCreateManyInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    id?: string
    mobile: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    mobile: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUpdateInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    mobile: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    mobile?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorCreateInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutColorsInput
    cartItem?: CartItemCreateNestedManyWithoutColorInput
    products?: ProductCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutColorInput
    products?: ProductUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutColorsNestedInput
    cartItem?: CartItemUpdateManyWithoutColorNestedInput
    products?: ProductUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutColorNestedInput
    products?: ProductUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ColorCreateManyInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUncheckedUpdateManyInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    productId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type CartRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    cartId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    cartId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    cartId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    cartItemId?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ColorRelationFilter = {
    is?: ColorWhereInput | null
    isNot?: ColorWhereInput | null
  }

  export type SizeRelationFilter = {
    is?: SizeWhereInput | null
    isNot?: SizeWhereInput | null
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    cartId?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
  }

  export type BillboardListRelationFilter = {
    every?: BillboardWhereInput
    some?: BillboardWhereInput
    none?: BillboardWhereInput
  }

  export type TypeListRelationFilter = {
    every?: TypeWhereInput
    some?: TypeWhereInput
    none?: TypeWhereInput
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ParentListRelationFilter = {
    every?: ParentWhereInput
    some?: ParentWhereInput
    none?: ParentWhereInput
  }

  export type SizeListRelationFilter = {
    every?: SizeWhereInput
    some?: SizeWhereInput
    none?: SizeWhereInput
  }

  export type ColorListRelationFilter = {
    every?: ColorWhereInput
    some?: ColorWhereInput
    none?: ColorWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BillboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type BillboardCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardRelationFilter = {
    is?: BillboardWhereInput | null
    isNot?: BillboardWhereInput | null
  }

  export type ParentRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeRelationFilter = {
    is?: TypeWhereInput | null
    isNot?: TypeWhereInput | null
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type SizeCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizeMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizeMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: CartWhereUniqueInput
    update?: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<UserCreateWithoutCartInput>, Enumerable<UserUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCartInput>
    createMany?: UserCreateManyCartInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type CartCreatecartItemIdInput = {
    set: Enumerable<string>
  }

  export type UserUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<UserCreateWithoutCartInput>, Enumerable<UserUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCartInput>
    createMany?: UserCreateManyCartInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type UserUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCartInput>, Enumerable<UserUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCartInput>
    createMany?: UserCreateManyCartInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutCartInput>
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type CartUpdatecartItemIdInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCartInput>, Enumerable<UserUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCartInput>
    createMany?: UserCreateManyCartInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutCartInput>, Enumerable<CartItemUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutCartInput>
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput
    connect?: ProductWhereUniqueInput
  }

  export type ColorCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ColorCreateWithoutCartItemInput, ColorUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ColorCreateOrConnectWithoutCartItemInput
    connect?: ColorWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutCartItemInput = {
    create?: XOR<SizeCreateWithoutCartItemInput, SizeUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: SizeCreateOrConnectWithoutCartItemInput
    connect?: SizeWhereUniqueInput
  }

  export type CartCreateNestedManyWithoutCartItemInput = {
    create?: XOR<Enumerable<CartCreateWithoutCartItemInput>, Enumerable<CartUncheckedCreateWithoutCartItemInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutCartItemInput>
    connect?: Enumerable<CartWhereUniqueInput>
  }

  export type CartItemCreatecartIdInput = {
    set: Enumerable<string>
  }

  export type CartUncheckedCreateNestedManyWithoutCartItemInput = {
    create?: XOR<Enumerable<CartCreateWithoutCartItemInput>, Enumerable<CartUncheckedCreateWithoutCartItemInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutCartItemInput>
    connect?: Enumerable<CartWhereUniqueInput>
  }

  export type ProductUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput
    upsert?: ProductUpsertWithoutCartItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
  }

  export type ColorUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<ColorCreateWithoutCartItemInput, ColorUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ColorCreateOrConnectWithoutCartItemInput
    upsert?: ColorUpsertWithoutCartItemInput
    connect?: ColorWhereUniqueInput
    update?: XOR<ColorUpdateWithoutCartItemInput, ColorUncheckedUpdateWithoutCartItemInput>
  }

  export type SizeUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<SizeCreateWithoutCartItemInput, SizeUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: SizeCreateOrConnectWithoutCartItemInput
    upsert?: SizeUpsertWithoutCartItemInput
    connect?: SizeWhereUniqueInput
    update?: XOR<SizeUpdateWithoutCartItemInput, SizeUncheckedUpdateWithoutCartItemInput>
  }

  export type CartUpdateManyWithoutCartItemNestedInput = {
    create?: XOR<Enumerable<CartCreateWithoutCartItemInput>, Enumerable<CartUncheckedCreateWithoutCartItemInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutCartItemInput>
    upsert?: Enumerable<CartUpsertWithWhereUniqueWithoutCartItemInput>
    set?: Enumerable<CartWhereUniqueInput>
    disconnect?: Enumerable<CartWhereUniqueInput>
    delete?: Enumerable<CartWhereUniqueInput>
    connect?: Enumerable<CartWhereUniqueInput>
    update?: Enumerable<CartUpdateWithWhereUniqueWithoutCartItemInput>
    updateMany?: Enumerable<CartUpdateManyWithWhereWithoutCartItemInput>
    deleteMany?: Enumerable<CartScalarWhereInput>
  }

  export type CartItemUpdatecartIdInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type CartUncheckedUpdateManyWithoutCartItemNestedInput = {
    create?: XOR<Enumerable<CartCreateWithoutCartItemInput>, Enumerable<CartUncheckedCreateWithoutCartItemInput>>
    connectOrCreate?: Enumerable<CartCreateOrConnectWithoutCartItemInput>
    upsert?: Enumerable<CartUpsertWithWhereUniqueWithoutCartItemInput>
    set?: Enumerable<CartWhereUniqueInput>
    disconnect?: Enumerable<CartWhereUniqueInput>
    delete?: Enumerable<CartWhereUniqueInput>
    connect?: Enumerable<CartWhereUniqueInput>
    update?: Enumerable<CartUpdateWithWhereUniqueWithoutCartItemInput>
    updateMany?: Enumerable<CartUpdateManyWithWhereWithoutCartItemInput>
    deleteMany?: Enumerable<CartScalarWhereInput>
  }

  export type BillboardCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<BillboardCreateWithoutStoreInput>, Enumerable<BillboardUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BillboardCreateOrConnectWithoutStoreInput>
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: Enumerable<BillboardWhereUniqueInput>
  }

  export type TypeCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<TypeCreateWithoutStoreInput>, Enumerable<TypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<TypeCreateOrConnectWithoutStoreInput>
    createMany?: TypeCreateManyStoreInputEnvelope
    connect?: Enumerable<TypeWhereUniqueInput>
  }

  export type BannerCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<BannerCreateWithoutStoreInput>, Enumerable<BannerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutStoreInput>
    createMany?: BannerCreateManyStoreInputEnvelope
    connect?: Enumerable<BannerWhereUniqueInput>
  }

  export type CategoryCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutStoreInput>, Enumerable<CategoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutStoreInput>
    createMany?: CategoryCreateManyStoreInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ProductCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<ProductCreateWithoutStoreInput>, Enumerable<ProductUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutStoreInput>
    createMany?: ProductCreateManyStoreInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ParentCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<ParentCreateWithoutStoreInput>, Enumerable<ParentUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutStoreInput>
    createMany?: ParentCreateManyStoreInputEnvelope
    connect?: Enumerable<ParentWhereUniqueInput>
  }

  export type SizeCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<SizeCreateWithoutStoreInput>, Enumerable<SizeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<SizeCreateOrConnectWithoutStoreInput>
    createMany?: SizeCreateManyStoreInputEnvelope
    connect?: Enumerable<SizeWhereUniqueInput>
  }

  export type ColorCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<ColorCreateWithoutStoreInput>, Enumerable<ColorUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ColorCreateOrConnectWithoutStoreInput>
    createMany?: ColorCreateManyStoreInputEnvelope
    connect?: Enumerable<ColorWhereUniqueInput>
  }

  export type OrderCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<OrderCreateWithoutStoreInput>, Enumerable<OrderUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutStoreInput>
    createMany?: OrderCreateManyStoreInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type BillboardUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<BillboardCreateWithoutStoreInput>, Enumerable<BillboardUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BillboardCreateOrConnectWithoutStoreInput>
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: Enumerable<BillboardWhereUniqueInput>
  }

  export type TypeUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<TypeCreateWithoutStoreInput>, Enumerable<TypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<TypeCreateOrConnectWithoutStoreInput>
    createMany?: TypeCreateManyStoreInputEnvelope
    connect?: Enumerable<TypeWhereUniqueInput>
  }

  export type BannerUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<BannerCreateWithoutStoreInput>, Enumerable<BannerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutStoreInput>
    createMany?: BannerCreateManyStoreInputEnvelope
    connect?: Enumerable<BannerWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutStoreInput>, Enumerable<CategoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutStoreInput>
    createMany?: CategoryCreateManyStoreInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<ProductCreateWithoutStoreInput>, Enumerable<ProductUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutStoreInput>
    createMany?: ProductCreateManyStoreInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ParentUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<ParentCreateWithoutStoreInput>, Enumerable<ParentUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutStoreInput>
    createMany?: ParentCreateManyStoreInputEnvelope
    connect?: Enumerable<ParentWhereUniqueInput>
  }

  export type SizeUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<SizeCreateWithoutStoreInput>, Enumerable<SizeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<SizeCreateOrConnectWithoutStoreInput>
    createMany?: SizeCreateManyStoreInputEnvelope
    connect?: Enumerable<SizeWhereUniqueInput>
  }

  export type ColorUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<ColorCreateWithoutStoreInput>, Enumerable<ColorUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ColorCreateOrConnectWithoutStoreInput>
    createMany?: ColorCreateManyStoreInputEnvelope
    connect?: Enumerable<ColorWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<OrderCreateWithoutStoreInput>, Enumerable<OrderUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutStoreInput>
    createMany?: OrderCreateManyStoreInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type BillboardUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<BillboardCreateWithoutStoreInput>, Enumerable<BillboardUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BillboardCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<BillboardUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: Enumerable<BillboardWhereUniqueInput>
    disconnect?: Enumerable<BillboardWhereUniqueInput>
    delete?: Enumerable<BillboardWhereUniqueInput>
    connect?: Enumerable<BillboardWhereUniqueInput>
    update?: Enumerable<BillboardUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<BillboardUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<BillboardScalarWhereInput>
  }

  export type TypeUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<TypeCreateWithoutStoreInput>, Enumerable<TypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<TypeCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<TypeUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: TypeCreateManyStoreInputEnvelope
    set?: Enumerable<TypeWhereUniqueInput>
    disconnect?: Enumerable<TypeWhereUniqueInput>
    delete?: Enumerable<TypeWhereUniqueInput>
    connect?: Enumerable<TypeWhereUniqueInput>
    update?: Enumerable<TypeUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<TypeUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<TypeScalarWhereInput>
  }

  export type BannerUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<BannerCreateWithoutStoreInput>, Enumerable<BannerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<BannerUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: BannerCreateManyStoreInputEnvelope
    set?: Enumerable<BannerWhereUniqueInput>
    disconnect?: Enumerable<BannerWhereUniqueInput>
    delete?: Enumerable<BannerWhereUniqueInput>
    connect?: Enumerable<BannerWhereUniqueInput>
    update?: Enumerable<BannerUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<BannerUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<BannerScalarWhereInput>
  }

  export type CategoryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutStoreInput>, Enumerable<CategoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: CategoryCreateManyStoreInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutStoreInput>, Enumerable<ProductUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: ProductCreateManyStoreInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ParentUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<ParentCreateWithoutStoreInput>, Enumerable<ParentUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<ParentUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: ParentCreateManyStoreInputEnvelope
    set?: Enumerable<ParentWhereUniqueInput>
    disconnect?: Enumerable<ParentWhereUniqueInput>
    delete?: Enumerable<ParentWhereUniqueInput>
    connect?: Enumerable<ParentWhereUniqueInput>
    update?: Enumerable<ParentUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<ParentUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<ParentScalarWhereInput>
  }

  export type SizeUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<SizeCreateWithoutStoreInput>, Enumerable<SizeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<SizeCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<SizeUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: SizeCreateManyStoreInputEnvelope
    set?: Enumerable<SizeWhereUniqueInput>
    disconnect?: Enumerable<SizeWhereUniqueInput>
    delete?: Enumerable<SizeWhereUniqueInput>
    connect?: Enumerable<SizeWhereUniqueInput>
    update?: Enumerable<SizeUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<SizeUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<SizeScalarWhereInput>
  }

  export type ColorUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<ColorCreateWithoutStoreInput>, Enumerable<ColorUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ColorCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<ColorUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: ColorCreateManyStoreInputEnvelope
    set?: Enumerable<ColorWhereUniqueInput>
    disconnect?: Enumerable<ColorWhereUniqueInput>
    delete?: Enumerable<ColorWhereUniqueInput>
    connect?: Enumerable<ColorWhereUniqueInput>
    update?: Enumerable<ColorUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<ColorUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<ColorScalarWhereInput>
  }

  export type OrderUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutStoreInput>, Enumerable<OrderUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: OrderCreateManyStoreInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type BillboardUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<BillboardCreateWithoutStoreInput>, Enumerable<BillboardUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BillboardCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<BillboardUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: Enumerable<BillboardWhereUniqueInput>
    disconnect?: Enumerable<BillboardWhereUniqueInput>
    delete?: Enumerable<BillboardWhereUniqueInput>
    connect?: Enumerable<BillboardWhereUniqueInput>
    update?: Enumerable<BillboardUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<BillboardUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<BillboardScalarWhereInput>
  }

  export type TypeUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<TypeCreateWithoutStoreInput>, Enumerable<TypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<TypeCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<TypeUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: TypeCreateManyStoreInputEnvelope
    set?: Enumerable<TypeWhereUniqueInput>
    disconnect?: Enumerable<TypeWhereUniqueInput>
    delete?: Enumerable<TypeWhereUniqueInput>
    connect?: Enumerable<TypeWhereUniqueInput>
    update?: Enumerable<TypeUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<TypeUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<TypeScalarWhereInput>
  }

  export type BannerUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<BannerCreateWithoutStoreInput>, Enumerable<BannerUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<BannerCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<BannerUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: BannerCreateManyStoreInputEnvelope
    set?: Enumerable<BannerWhereUniqueInput>
    disconnect?: Enumerable<BannerWhereUniqueInput>
    delete?: Enumerable<BannerWhereUniqueInput>
    connect?: Enumerable<BannerWhereUniqueInput>
    update?: Enumerable<BannerUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<BannerUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<BannerScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutStoreInput>, Enumerable<CategoryUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: CategoryCreateManyStoreInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutStoreInput>, Enumerable<ProductUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: ProductCreateManyStoreInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ParentUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<ParentCreateWithoutStoreInput>, Enumerable<ParentUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<ParentUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: ParentCreateManyStoreInputEnvelope
    set?: Enumerable<ParentWhereUniqueInput>
    disconnect?: Enumerable<ParentWhereUniqueInput>
    delete?: Enumerable<ParentWhereUniqueInput>
    connect?: Enumerable<ParentWhereUniqueInput>
    update?: Enumerable<ParentUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<ParentUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<ParentScalarWhereInput>
  }

  export type SizeUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<SizeCreateWithoutStoreInput>, Enumerable<SizeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<SizeCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<SizeUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: SizeCreateManyStoreInputEnvelope
    set?: Enumerable<SizeWhereUniqueInput>
    disconnect?: Enumerable<SizeWhereUniqueInput>
    delete?: Enumerable<SizeWhereUniqueInput>
    connect?: Enumerable<SizeWhereUniqueInput>
    update?: Enumerable<SizeUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<SizeUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<SizeScalarWhereInput>
  }

  export type ColorUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<ColorCreateWithoutStoreInput>, Enumerable<ColorUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<ColorCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<ColorUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: ColorCreateManyStoreInputEnvelope
    set?: Enumerable<ColorWhereUniqueInput>
    disconnect?: Enumerable<ColorWhereUniqueInput>
    delete?: Enumerable<ColorWhereUniqueInput>
    connect?: Enumerable<ColorWhereUniqueInput>
    update?: Enumerable<ColorUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<ColorUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<ColorScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutStoreInput>, Enumerable<OrderUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: OrderCreateManyStoreInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutBillboardsInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutBillboardInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutBillboardInput>, Enumerable<CategoryUncheckedCreateWithoutBillboardInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutBillboardInput>
    createMany?: CategoryCreateManyBillboardInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutBillboardInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutBillboardInput>, Enumerable<CategoryUncheckedCreateWithoutBillboardInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutBillboardInput>
    createMany?: CategoryCreateManyBillboardInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutBillboardsNestedInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    upsert?: StoreUpsertWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type CategoryUpdateManyWithoutBillboardNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutBillboardInput>, Enumerable<CategoryUncheckedCreateWithoutBillboardInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutBillboardInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutBillboardInput>
    createMany?: CategoryCreateManyBillboardInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutBillboardInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutBillboardInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutBillboardNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutBillboardInput>, Enumerable<CategoryUncheckedCreateWithoutBillboardInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutBillboardInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutBillboardInput>
    createMany?: CategoryCreateManyBillboardInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutBillboardInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutBillboardInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutBannersInput = {
    create?: XOR<StoreCreateWithoutBannersInput, StoreUncheckedCreateWithoutBannersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBannersInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutBannersNestedInput = {
    create?: XOR<StoreCreateWithoutBannersInput, StoreUncheckedCreateWithoutBannersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBannersInput
    upsert?: StoreUpsertWithoutBannersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutBannersInput, StoreUncheckedUpdateWithoutBannersInput>
  }

  export type StoreCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput
    connect?: StoreWhereUniqueInput
  }

  export type BillboardCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BillboardCreateOrConnectWithoutCategoriesInput
    connect?: BillboardWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ParentCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ParentCreateWithoutCategoriesInput, ParentUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ParentCreateOrConnectWithoutCategoriesInput
    connect?: ParentWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput
    upsert?: StoreUpsertWithoutCategoriesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutCategoriesInput, StoreUncheckedUpdateWithoutCategoriesInput>
  }

  export type BillboardUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BillboardCreateOrConnectWithoutCategoriesInput
    upsert?: BillboardUpsertWithoutCategoriesInput
    connect?: BillboardWhereUniqueInput
    update?: XOR<BillboardUpdateWithoutCategoriesInput, BillboardUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ParentUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ParentCreateWithoutCategoriesInput, ParentUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ParentCreateOrConnectWithoutCategoriesInput
    upsert?: ParentUpsertWithoutCategoriesInput
    connect?: ParentWhereUniqueInput
    update?: XOR<ParentUpdateWithoutCategoriesInput, ParentUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutParentsInput = {
    create?: XOR<StoreCreateWithoutParentsInput, StoreUncheckedCreateWithoutParentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutParentsInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type TypeCreateNestedOneWithoutParentsInput = {
    create?: XOR<TypeCreateWithoutParentsInput, TypeUncheckedCreateWithoutParentsInput>
    connectOrCreate?: TypeCreateOrConnectWithoutParentsInput
    connect?: TypeWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<StoreCreateWithoutParentsInput, StoreUncheckedCreateWithoutParentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutParentsInput
    upsert?: StoreUpsertWithoutParentsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutParentsInput, StoreUncheckedUpdateWithoutParentsInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type TypeUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<TypeCreateWithoutParentsInput, TypeUncheckedCreateWithoutParentsInput>
    connectOrCreate?: TypeCreateOrConnectWithoutParentsInput
    upsert?: TypeUpsertWithoutParentsInput
    connect?: TypeWhereUniqueInput
    update?: XOR<TypeUpdateWithoutParentsInput, TypeUncheckedUpdateWithoutParentsInput>
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutTypesInput = {
    create?: XOR<StoreCreateWithoutTypesInput, StoreUncheckedCreateWithoutTypesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutTypesInput
    connect?: StoreWhereUniqueInput
  }

  export type ParentCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<ParentCreateWithoutTypeInput>, Enumerable<ParentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutTypeInput>
    createMany?: ParentCreateManyTypeInputEnvelope
    connect?: Enumerable<ParentWhereUniqueInput>
  }

  export type ParentUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<ParentCreateWithoutTypeInput>, Enumerable<ParentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutTypeInput>
    createMany?: ParentCreateManyTypeInputEnvelope
    connect?: Enumerable<ParentWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutTypesNestedInput = {
    create?: XOR<StoreCreateWithoutTypesInput, StoreUncheckedCreateWithoutTypesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutTypesInput
    upsert?: StoreUpsertWithoutTypesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutTypesInput, StoreUncheckedUpdateWithoutTypesInput>
  }

  export type ParentUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<ParentCreateWithoutTypeInput>, Enumerable<ParentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<ParentUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: ParentCreateManyTypeInputEnvelope
    set?: Enumerable<ParentWhereUniqueInput>
    disconnect?: Enumerable<ParentWhereUniqueInput>
    delete?: Enumerable<ParentWhereUniqueInput>
    connect?: Enumerable<ParentWhereUniqueInput>
    update?: Enumerable<ParentUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<ParentUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<ParentScalarWhereInput>
  }

  export type ParentUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<ParentCreateWithoutTypeInput>, Enumerable<ParentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ParentCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<ParentUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: ParentCreateManyTypeInputEnvelope
    set?: Enumerable<ParentWhereUniqueInput>
    disconnect?: Enumerable<ParentWhereUniqueInput>
    delete?: Enumerable<ParentWhereUniqueInput>
    connect?: Enumerable<ParentWhereUniqueInput>
    update?: Enumerable<ParentUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<ParentUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<ParentScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutProductsInput = {
    create?: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutProductsInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutProductsInput = {
    create?: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput
    connect?: SizeWhereUniqueInput
  }

  export type ColorCreateNestedOneWithoutProductsInput = {
    create?: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput
    connect?: ColorWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ImageCreateWithoutProductInput>, Enumerable<ImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutProductInput>
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ImageCreateWithoutProductInput>, Enumerable<ImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutProductInput>
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StoreUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutProductsInput
    upsert?: StoreUpsertWithoutProductsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutProductsInput, StoreUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SizeUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput
    upsert?: SizeUpsertWithoutProductsInput
    connect?: SizeWhereUniqueInput
    update?: XOR<SizeUpdateWithoutProductsInput, SizeUncheckedUpdateWithoutProductsInput>
  }

  export type ColorUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput
    upsert?: ColorUpsertWithoutProductsInput
    connect?: ColorWhereUniqueInput
    update?: XOR<ColorUpdateWithoutProductsInput, ColorUncheckedUpdateWithoutProductsInput>
  }

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutProductInput>, Enumerable<ImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ImageCreateManyProductInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutProductInput>, Enumerable<ImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ImageCreateManyProductInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutProductInput>, Enumerable<CartItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutOrdersInput = {
    create?: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrdersInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrdersInput
    upsert?: StoreUpsertWithoutOrdersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutOrdersInput, StoreUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type StoreCreateNestedOneWithoutSizesInput = {
    create?: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSizesInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutSizeInput = {
    create?: XOR<Enumerable<ProductCreateWithoutSizeInput>, Enumerable<ProductUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutSizeInput>
    createMany?: ProductCreateManySizeInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type CartItemCreateNestedManyWithoutSizeInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutSizeInput>, Enumerable<CartItemUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutSizeInput>
    createMany?: CartItemCreateManySizeInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<Enumerable<ProductCreateWithoutSizeInput>, Enumerable<ProductUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutSizeInput>
    createMany?: ProductCreateManySizeInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type CartItemUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutSizeInput>, Enumerable<CartItemUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutSizeInput>
    createMany?: CartItemCreateManySizeInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSizesInput
    upsert?: StoreUpsertWithoutSizesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutSizesInput, StoreUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateManyWithoutSizeNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutSizeInput>, Enumerable<ProductUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutSizeInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutSizeInput>
    createMany?: ProductCreateManySizeInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutSizeInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutSizeInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CartItemUpdateManyWithoutSizeNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutSizeInput>, Enumerable<CartItemUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutSizeInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutSizeInput>
    createMany?: CartItemCreateManySizeInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutSizeInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutSizeInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutSizeInput>, Enumerable<ProductUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutSizeInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutSizeInput>
    createMany?: ProductCreateManySizeInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutSizeInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutSizeInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CartItemUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutSizeInput>, Enumerable<CartItemUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutSizeInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutSizeInput>
    createMany?: CartItemCreateManySizeInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutSizeInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutSizeInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type StoreCreateNestedOneWithoutColorsInput = {
    create?: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutColorsInput
    connect?: StoreWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutColorInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutColorInput>, Enumerable<CartItemUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutColorInput>
    createMany?: CartItemCreateManyColorInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type ProductCreateNestedManyWithoutColorInput = {
    create?: XOR<Enumerable<ProductCreateWithoutColorInput>, Enumerable<ProductUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutColorInput>
    createMany?: ProductCreateManyColorInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type CartItemUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutColorInput>, Enumerable<CartItemUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutColorInput>
    createMany?: CartItemCreateManyColorInputEnvelope
    connect?: Enumerable<CartItemWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<Enumerable<ProductCreateWithoutColorInput>, Enumerable<ProductUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutColorInput>
    createMany?: ProductCreateManyColorInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type StoreUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutColorsInput
    upsert?: StoreUpsertWithoutColorsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutColorsInput, StoreUncheckedUpdateWithoutColorsInput>
  }

  export type CartItemUpdateManyWithoutColorNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutColorInput>, Enumerable<CartItemUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutColorInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutColorInput>
    createMany?: CartItemCreateManyColorInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutColorInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutColorInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type ProductUpdateManyWithoutColorNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutColorInput>, Enumerable<ProductUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutColorInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutColorInput>
    createMany?: ProductCreateManyColorInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutColorInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutColorInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CartItemUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<Enumerable<CartItemCreateWithoutColorInput>, Enumerable<CartItemUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<CartItemCreateOrConnectWithoutColorInput>
    upsert?: Enumerable<CartItemUpsertWithWhereUniqueWithoutColorInput>
    createMany?: CartItemCreateManyColorInputEnvelope
    set?: Enumerable<CartItemWhereUniqueInput>
    disconnect?: Enumerable<CartItemWhereUniqueInput>
    delete?: Enumerable<CartItemWhereUniqueInput>
    connect?: Enumerable<CartItemWhereUniqueInput>
    update?: Enumerable<CartItemUpdateWithWhereUniqueWithoutColorInput>
    updateMany?: Enumerable<CartItemUpdateManyWithWhereWithoutColorInput>
    deleteMany?: Enumerable<CartItemScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutColorInput>, Enumerable<ProductUncheckedCreateWithoutColorInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutColorInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutColorInput>
    createMany?: ProductCreateManyColorInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutColorInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutColorInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CartCreateWithoutUserInput = {
    id?: string
    updatedAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string
    updatedAt?: Date | string
    cartItemId?: CartCreatecartItemIdInput | Enumerable<string>
    cartItem?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItemId?: CartUpdatecartItemIdInput | Enumerable<string>
    cartItem?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    role?: Role
    mobile: string
    address: string
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    role?: Role
    mobile: string
    address: string
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type UserCreateManyCartInputEnvelope = {
    data: Enumerable<UserCreateManyCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    id?: string
    quantity?: string
    product?: ProductCreateNestedOneWithoutCartItemInput
    color?: ColorCreateNestedOneWithoutCartItemInput
    size?: SizeCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string
    sizeId?: string
    colorId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCartInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCartInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateManyWithWhereWithoutCartInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    mobile?: StringFilter | string
    address?: StringFilter | string
    cartId?: StringNullableFilter | string | null
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartItemInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: Enumerable<CartItemScalarWhereInput>
    OR?: Enumerable<CartItemScalarWhereInput>
    NOT?: Enumerable<CartItemScalarWhereInput>
    id?: StringFilter | string
    sizeId?: StringFilter | string
    colorId?: StringFilter | string
    quantity?: StringFilter | string
    productId?: StringFilter | string
    cartId?: StringNullableListFilter
  }

  export type ProductCreateWithoutCartItemInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
  }

  export type ColorCreateWithoutCartItemInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutColorsInput
    products?: ProductCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateWithoutCartItemInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorCreateOrConnectWithoutCartItemInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutCartItemInput, ColorUncheckedCreateWithoutCartItemInput>
  }

  export type SizeCreateWithoutCartItemInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutSizesInput
    products?: ProductCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateWithoutCartItemInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeCreateOrConnectWithoutCartItemInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutCartItemInput, SizeUncheckedCreateWithoutCartItemInput>
  }

  export type CartCreateWithoutCartItemInput = {
    id?: string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCartItemInput = {
    id?: string
    updatedAt?: Date | string
    cartItemId?: CartCreatecartItemIdInput | Enumerable<string>
    user?: UserUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCartItemInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemInput, CartUncheckedCreateWithoutCartItemInput>
  }

  export type ProductUpsertWithoutCartItemInput = {
    update: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
  }

  export type ProductUpdateWithoutCartItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ColorUpsertWithoutCartItemInput = {
    update: XOR<ColorUpdateWithoutCartItemInput, ColorUncheckedUpdateWithoutCartItemInput>
    create: XOR<ColorCreateWithoutCartItemInput, ColorUncheckedCreateWithoutCartItemInput>
  }

  export type ColorUpdateWithoutCartItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutColorsNestedInput
    products?: ProductUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateWithoutCartItemInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutColorNestedInput
  }

  export type SizeUpsertWithoutCartItemInput = {
    update: XOR<SizeUpdateWithoutCartItemInput, SizeUncheckedUpdateWithoutCartItemInput>
    create: XOR<SizeCreateWithoutCartItemInput, SizeUncheckedCreateWithoutCartItemInput>
  }

  export type SizeUpdateWithoutCartItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSizesNestedInput
    products?: ProductUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutCartItemInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type CartUpsertWithWhereUniqueWithoutCartItemInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutCartItemInput, CartUncheckedUpdateWithoutCartItemInput>
    create: XOR<CartCreateWithoutCartItemInput, CartUncheckedCreateWithoutCartItemInput>
  }

  export type CartUpdateWithWhereUniqueWithoutCartItemInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutCartItemInput, CartUncheckedUpdateWithoutCartItemInput>
  }

  export type CartUpdateManyWithWhereWithoutCartItemInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutCartInput>
  }

  export type CartScalarWhereInput = {
    AND?: Enumerable<CartScalarWhereInput>
    OR?: Enumerable<CartScalarWhereInput>
    NOT?: Enumerable<CartScalarWhereInput>
    id?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
    cartItemId?: StringNullableListFilter
  }

  export type BillboardCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutBillboardInput
  }

  export type BillboardUncheckedCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutBillboardInput
  }

  export type BillboardCreateOrConnectWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardCreateManyStoreInputEnvelope = {
    data: Enumerable<BillboardCreateManyStoreInput>
  }

  export type TypeCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeCreateOrConnectWithoutStoreInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutStoreInput, TypeUncheckedCreateWithoutStoreInput>
  }

  export type TypeCreateManyStoreInputEnvelope = {
    data: Enumerable<TypeCreateManyStoreInput>
  }

  export type BannerCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerCreateOrConnectWithoutStoreInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutStoreInput, BannerUncheckedCreateWithoutStoreInput>
  }

  export type BannerCreateManyStoreInputEnvelope = {
    data: Enumerable<BannerCreateManyStoreInput>
  }

  export type CategoryCreateWithoutStoreInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    parent: ParentCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutStoreInput = {
    id?: string
    billboardId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutStoreInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput>
  }

  export type CategoryCreateManyStoreInputEnvelope = {
    data: Enumerable<CategoryCreateManyStoreInput>
  }

  export type ProductCreateWithoutStoreInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStoreInput = {
    id?: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStoreInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput>
  }

  export type ProductCreateManyStoreInputEnvelope = {
    data: Enumerable<ProductCreateManyStoreInput>
  }

  export type ParentCreateWithoutStoreInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutParentInput
    type: TypeCreateNestedOneWithoutParentsInput
  }

  export type ParentUncheckedCreateWithoutStoreInput = {
    id?: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutStoreInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutStoreInput, ParentUncheckedCreateWithoutStoreInput>
  }

  export type ParentCreateManyStoreInputEnvelope = {
    data: Enumerable<ParentCreateManyStoreInput>
  }

  export type SizeCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutSizeInput
    cartItem?: CartItemCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSizeInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeCreateOrConnectWithoutStoreInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput>
  }

  export type SizeCreateManyStoreInputEnvelope = {
    data: Enumerable<SizeCreateManyStoreInput>
  }

  export type ColorCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutColorInput
    products?: ProductCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutColorInput
    products?: ProductUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorCreateOrConnectWithoutStoreInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput>
  }

  export type ColorCreateManyStoreInputEnvelope = {
    data: Enumerable<ColorCreateManyStoreInput>
  }

  export type OrderCreateWithoutStoreInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStoreInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStoreInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput>
  }

  export type OrderCreateManyStoreInputEnvelope = {
    data: Enumerable<OrderCreateManyStoreInput>
  }

  export type BillboardUpsertWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    update: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardUpdateWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    data: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
  }

  export type BillboardUpdateManyWithWhereWithoutStoreInput = {
    where: BillboardScalarWhereInput
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyWithoutBillboardsInput>
  }

  export type BillboardScalarWhereInput = {
    AND?: Enumerable<BillboardScalarWhereInput>
    OR?: Enumerable<BillboardScalarWhereInput>
    NOT?: Enumerable<BillboardScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    label?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TypeUpsertWithWhereUniqueWithoutStoreInput = {
    where: TypeWhereUniqueInput
    update: XOR<TypeUpdateWithoutStoreInput, TypeUncheckedUpdateWithoutStoreInput>
    create: XOR<TypeCreateWithoutStoreInput, TypeUncheckedCreateWithoutStoreInput>
  }

  export type TypeUpdateWithWhereUniqueWithoutStoreInput = {
    where: TypeWhereUniqueInput
    data: XOR<TypeUpdateWithoutStoreInput, TypeUncheckedUpdateWithoutStoreInput>
  }

  export type TypeUpdateManyWithWhereWithoutStoreInput = {
    where: TypeScalarWhereInput
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyWithoutTypesInput>
  }

  export type TypeScalarWhereInput = {
    AND?: Enumerable<TypeScalarWhereInput>
    OR?: Enumerable<TypeScalarWhereInput>
    NOT?: Enumerable<TypeScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    label?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BannerUpsertWithWhereUniqueWithoutStoreInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutStoreInput, BannerUncheckedUpdateWithoutStoreInput>
    create: XOR<BannerCreateWithoutStoreInput, BannerUncheckedCreateWithoutStoreInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutStoreInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutStoreInput, BannerUncheckedUpdateWithoutStoreInput>
  }

  export type BannerUpdateManyWithWhereWithoutStoreInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutBannersInput>
  }

  export type BannerScalarWhereInput = {
    AND?: Enumerable<BannerScalarWhereInput>
    OR?: Enumerable<BannerScalarWhereInput>
    NOT?: Enumerable<BannerScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    label?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutStoreInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutStoreInput, CategoryUncheckedUpdateWithoutStoreInput>
    create: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutStoreInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutStoreInput, CategoryUncheckedUpdateWithoutStoreInput>
  }

  export type CategoryUpdateManyWithWhereWithoutStoreInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    billboardId?: StringFilter | string
    name?: StringFilter | string
    parentId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutStoreInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutStoreInput, ProductUncheckedUpdateWithoutStoreInput>
    create: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutStoreInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutStoreInput, ProductUncheckedUpdateWithoutStoreInput>
  }

  export type ProductUpdateManyWithWhereWithoutStoreInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    categoryId?: StringFilter | string
    name?: StringFilter | string
    price?: StringFilter | string
    isFeatured?: BoolFilter | boolean
    isArchived?: BoolFilter | boolean
    sizeId?: StringFilter | string
    colorId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ParentUpsertWithWhereUniqueWithoutStoreInput = {
    where: ParentWhereUniqueInput
    update: XOR<ParentUpdateWithoutStoreInput, ParentUncheckedUpdateWithoutStoreInput>
    create: XOR<ParentCreateWithoutStoreInput, ParentUncheckedCreateWithoutStoreInput>
  }

  export type ParentUpdateWithWhereUniqueWithoutStoreInput = {
    where: ParentWhereUniqueInput
    data: XOR<ParentUpdateWithoutStoreInput, ParentUncheckedUpdateWithoutStoreInput>
  }

  export type ParentUpdateManyWithWhereWithoutStoreInput = {
    where: ParentScalarWhereInput
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyWithoutParentsInput>
  }

  export type ParentScalarWhereInput = {
    AND?: Enumerable<ParentScalarWhereInput>
    OR?: Enumerable<ParentScalarWhereInput>
    NOT?: Enumerable<ParentScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    name?: StringFilter | string
    typeId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SizeUpsertWithWhereUniqueWithoutStoreInput = {
    where: SizeWhereUniqueInput
    update: XOR<SizeUpdateWithoutStoreInput, SizeUncheckedUpdateWithoutStoreInput>
    create: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput>
  }

  export type SizeUpdateWithWhereUniqueWithoutStoreInput = {
    where: SizeWhereUniqueInput
    data: XOR<SizeUpdateWithoutStoreInput, SizeUncheckedUpdateWithoutStoreInput>
  }

  export type SizeUpdateManyWithWhereWithoutStoreInput = {
    where: SizeScalarWhereInput
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyWithoutSizesInput>
  }

  export type SizeScalarWhereInput = {
    AND?: Enumerable<SizeScalarWhereInput>
    OR?: Enumerable<SizeScalarWhereInput>
    NOT?: Enumerable<SizeScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    name?: StringFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ColorUpsertWithWhereUniqueWithoutStoreInput = {
    where: ColorWhereUniqueInput
    update: XOR<ColorUpdateWithoutStoreInput, ColorUncheckedUpdateWithoutStoreInput>
    create: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput>
  }

  export type ColorUpdateWithWhereUniqueWithoutStoreInput = {
    where: ColorWhereUniqueInput
    data: XOR<ColorUpdateWithoutStoreInput, ColorUncheckedUpdateWithoutStoreInput>
  }

  export type ColorUpdateManyWithWhereWithoutStoreInput = {
    where: ColorScalarWhereInput
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyWithoutColorsInput>
  }

  export type ColorScalarWhereInput = {
    AND?: Enumerable<ColorScalarWhereInput>
    OR?: Enumerable<ColorScalarWhereInput>
    NOT?: Enumerable<ColorScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    name?: StringFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutStoreInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutStoreInput, OrderUncheckedUpdateWithoutStoreInput>
    create: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutStoreInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutStoreInput, OrderUncheckedUpdateWithoutStoreInput>
  }

  export type OrderUpdateManyWithWhereWithoutStoreInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    id?: StringFilter | string
    storeId?: StringFilter | string
    isPaid?: BoolFilter | boolean
    phone?: StringFilter | string
    address?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type StoreCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutBillboardsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
  }

  export type CategoryCreateWithoutBillboardInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    parent: ParentCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutBillboardInput = {
    id?: string
    storeId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBillboardInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput>
  }

  export type CategoryCreateManyBillboardInputEnvelope = {
    data: Enumerable<CategoryCreateManyBillboardInput>
  }

  export type StoreUpsertWithoutBillboardsInput = {
    update: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
  }

  export type StoreUpdateWithoutBillboardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutBillboardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutBillboardInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutBillboardInput, CategoryUncheckedUpdateWithoutBillboardInput>
    create: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutBillboardInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutBillboardInput, CategoryUncheckedUpdateWithoutBillboardInput>
  }

  export type CategoryUpdateManyWithWhereWithoutBillboardInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type StoreCreateWithoutBannersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutBannersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutBannersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutBannersInput, StoreUncheckedCreateWithoutBannersInput>
  }

  export type StoreUpsertWithoutBannersInput = {
    update: XOR<StoreUpdateWithoutBannersInput, StoreUncheckedUpdateWithoutBannersInput>
    create: XOR<StoreCreateWithoutBannersInput, StoreUncheckedCreateWithoutBannersInput>
  }

  export type StoreUpdateWithoutBannersInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutBannersInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutCategoriesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutCategoriesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
  }

  export type BillboardCreateWithoutCategoriesInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutBillboardsInput
  }

  export type BillboardUncheckedCreateWithoutCategoriesInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardCreateOrConnectWithoutCategoriesInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    storeId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: Enumerable<ProductCreateManyCategoryInput>
  }

  export type ParentCreateWithoutCategoriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutParentsInput
    type: TypeCreateNestedOneWithoutParentsInput
  }

  export type ParentUncheckedCreateWithoutCategoriesInput = {
    id?: string
    storeId: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentCreateOrConnectWithoutCategoriesInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutCategoriesInput, ParentUncheckedCreateWithoutCategoriesInput>
  }

  export type StoreUpsertWithoutCategoriesInput = {
    update: XOR<StoreUpdateWithoutCategoriesInput, StoreUncheckedUpdateWithoutCategoriesInput>
    create: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
  }

  export type StoreUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type BillboardUpsertWithoutCategoriesInput = {
    update: XOR<BillboardUpdateWithoutCategoriesInput, BillboardUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
  }

  export type BillboardUpdateWithoutCategoriesInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
  }

  export type BillboardUncheckedUpdateWithoutCategoriesInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ParentUpsertWithoutCategoriesInput = {
    update: XOR<ParentUpdateWithoutCategoriesInput, ParentUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ParentCreateWithoutCategoriesInput, ParentUncheckedCreateWithoutCategoriesInput>
  }

  export type ParentUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutParentsNestedInput
    type?: TypeUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentUncheckedUpdateWithoutCategoriesInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateWithoutParentsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutParentsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutParentsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutParentsInput, StoreUncheckedCreateWithoutParentsInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: Enumerable<CategoryCreateManyParentInput>
  }

  export type TypeCreateWithoutParentsInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutTypesInput
  }

  export type TypeUncheckedCreateWithoutParentsInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeCreateOrConnectWithoutParentsInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutParentsInput, TypeUncheckedCreateWithoutParentsInput>
  }

  export type StoreUpsertWithoutParentsInput = {
    update: XOR<StoreUpdateWithoutParentsInput, StoreUncheckedUpdateWithoutParentsInput>
    create: XOR<StoreCreateWithoutParentsInput, StoreUncheckedCreateWithoutParentsInput>
  }

  export type StoreUpdateWithoutParentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutParentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type TypeUpsertWithoutParentsInput = {
    update: XOR<TypeUpdateWithoutParentsInput, TypeUncheckedUpdateWithoutParentsInput>
    create: XOR<TypeCreateWithoutParentsInput, TypeUncheckedCreateWithoutParentsInput>
  }

  export type TypeUpdateWithoutParentsInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutTypesNestedInput
  }

  export type TypeUncheckedUpdateWithoutParentsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateWithoutTypesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutTypesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutTypesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutTypesInput, StoreUncheckedCreateWithoutTypesInput>
  }

  export type ParentCreateWithoutTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutParentsInput
    categories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutTypeInput = {
    id?: string
    storeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutTypeInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutTypeInput, ParentUncheckedCreateWithoutTypeInput>
  }

  export type ParentCreateManyTypeInputEnvelope = {
    data: Enumerable<ParentCreateManyTypeInput>
  }

  export type StoreUpsertWithoutTypesInput = {
    update: XOR<StoreUpdateWithoutTypesInput, StoreUncheckedUpdateWithoutTypesInput>
    create: XOR<StoreCreateWithoutTypesInput, StoreUncheckedCreateWithoutTypesInput>
  }

  export type StoreUpdateWithoutTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ParentUpsertWithWhereUniqueWithoutTypeInput = {
    where: ParentWhereUniqueInput
    update: XOR<ParentUpdateWithoutTypeInput, ParentUncheckedUpdateWithoutTypeInput>
    create: XOR<ParentCreateWithoutTypeInput, ParentUncheckedCreateWithoutTypeInput>
  }

  export type ParentUpdateWithWhereUniqueWithoutTypeInput = {
    where: ParentWhereUniqueInput
    data: XOR<ParentUpdateWithoutTypeInput, ParentUncheckedUpdateWithoutTypeInput>
  }

  export type ParentUpdateManyWithWhereWithoutTypeInput = {
    where: ParentScalarWhereInput
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyWithoutParentsInput>
  }

  export type StoreCreateWithoutProductsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutProductsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
    parent: ParentCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SizeCreateWithoutProductsInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutSizesInput
    cartItem?: CartItemCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateWithoutProductsInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeCreateOrConnectWithoutProductsInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
  }

  export type ColorCreateWithoutProductsInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutColorsInput
    cartItem?: CartItemCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateWithoutProductsInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorCreateOrConnectWithoutProductsInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
  }

  export type ImageCreateWithoutProductInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateManyProductInputEnvelope = {
    data: Enumerable<ImageCreateManyProductInput>
  }

  export type CartItemCreateWithoutProductInput = {
    id?: string
    quantity?: string
    color?: ColorCreateNestedOneWithoutCartItemInput
    size?: SizeCreateNestedOneWithoutCartItemInput
    Cart?: CartCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string
    sizeId?: string
    colorId?: string
    quantity?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: Enumerable<CartItemCreateManyProductInput>
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: Enumerable<OrderItemCreateManyProductInput>
  }

  export type StoreUpsertWithoutProductsInput = {
    update: XOR<StoreUpdateWithoutProductsInput, StoreUncheckedUpdateWithoutProductsInput>
    create: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
  }

  export type StoreUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
    parent?: ParentUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUpsertWithoutProductsInput = {
    update: XOR<SizeUpdateWithoutProductsInput, SizeUncheckedUpdateWithoutProductsInput>
    create: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
  }

  export type SizeUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSizesNestedInput
    cartItem?: CartItemUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutProductsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type ColorUpsertWithoutProductsInput = {
    update: XOR<ColorUpdateWithoutProductsInput, ColorUncheckedUpdateWithoutProductsInput>
    create: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
  }

  export type ColorUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutColorsNestedInput
    cartItem?: CartItemUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateWithoutProductsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type ImageScalarWhereInput = {
    AND?: Enumerable<ImageScalarWhereInput>
    OR?: Enumerable<ImageScalarWhereInput>
    NOT?: Enumerable<ImageScalarWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartItemInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: Enumerable<OrderItemScalarWhereInput>
    OR?: Enumerable<OrderItemScalarWhereInput>
    NOT?: Enumerable<OrderItemScalarWhereInput>
    id?: StringFilter | string
    orderId?: StringFilter | string
    productId?: StringFilter | string
  }

  export type StoreCreateWithoutOrdersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOrdersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<OrderItemCreateManyOrderInput>
  }

  export type StoreUpsertWithoutOrdersInput = {
    update: XOR<StoreUpdateWithoutOrdersInput, StoreUncheckedUpdateWithoutOrdersInput>
    create: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
  }

  export type StoreUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    storeId: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutSizesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutSizesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutSizesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
  }

  export type ProductCreateWithoutSizeInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSizeInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSizeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput>
  }

  export type ProductCreateManySizeInputEnvelope = {
    data: Enumerable<ProductCreateManySizeInput>
  }

  export type CartItemCreateWithoutSizeInput = {
    id?: string
    quantity?: string
    product?: ProductCreateNestedOneWithoutCartItemInput
    color?: ColorCreateNestedOneWithoutCartItemInput
    Cart?: CartCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutSizeInput = {
    id?: string
    colorId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemCreateOrConnectWithoutSizeInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput>
  }

  export type CartItemCreateManySizeInputEnvelope = {
    data: Enumerable<CartItemCreateManySizeInput>
  }

  export type StoreUpsertWithoutSizesInput = {
    update: XOR<StoreUpdateWithoutSizesInput, StoreUncheckedUpdateWithoutSizesInput>
    create: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
  }

  export type StoreUpdateWithoutSizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutSizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutSizeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSizeInput, ProductUncheckedUpdateWithoutSizeInput>
    create: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSizeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSizeInput, ProductUncheckedUpdateWithoutSizeInput>
  }

  export type ProductUpdateManyWithWhereWithoutSizeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutSizeInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutSizeInput, CartItemUncheckedUpdateWithoutSizeInput>
    create: XOR<CartItemCreateWithoutSizeInput, CartItemUncheckedCreateWithoutSizeInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutSizeInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutSizeInput, CartItemUncheckedUpdateWithoutSizeInput>
  }

  export type CartItemUpdateManyWithWhereWithoutSizeInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartItemInput>
  }

  export type StoreCreateWithoutColorsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    types?: TypeCreateNestedManyWithoutStoreInput
    banners?: BannerCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    parents?: ParentCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutColorsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    types?: TypeUncheckedCreateNestedManyWithoutStoreInput
    banners?: BannerUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    parents?: ParentUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutColorsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
  }

  export type CartItemCreateWithoutColorInput = {
    id?: string
    quantity?: string
    product?: ProductCreateNestedOneWithoutCartItemInput
    size?: SizeCreateNestedOneWithoutCartItemInput
    Cart?: CartCreateNestedManyWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutColorInput = {
    id?: string
    sizeId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedCreateNestedManyWithoutCartItemInput
  }

  export type CartItemCreateOrConnectWithoutColorInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutColorInput, CartItemUncheckedCreateWithoutColorInput>
  }

  export type CartItemCreateManyColorInputEnvelope = {
    data: Enumerable<CartItemCreateManyColorInput>
  }

  export type ProductCreateWithoutColorInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutColorInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutColorInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput>
  }

  export type ProductCreateManyColorInputEnvelope = {
    data: Enumerable<ProductCreateManyColorInput>
  }

  export type StoreUpsertWithoutColorsInput = {
    update: XOR<StoreUpdateWithoutColorsInput, StoreUncheckedUpdateWithoutColorsInput>
    create: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
  }

  export type StoreUpdateWithoutColorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    types?: TypeUpdateManyWithoutStoreNestedInput
    banners?: BannerUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    parents?: ParentUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutColorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    types?: TypeUncheckedUpdateManyWithoutStoreNestedInput
    banners?: BannerUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    parents?: ParentUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutColorInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutColorInput, CartItemUncheckedUpdateWithoutColorInput>
    create: XOR<CartItemCreateWithoutColorInput, CartItemUncheckedCreateWithoutColorInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutColorInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutColorInput, CartItemUncheckedUpdateWithoutColorInput>
  }

  export type CartItemUpdateManyWithWhereWithoutColorInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartItemInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutColorInput, ProductUncheckedUpdateWithoutColorInput>
    create: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutColorInput, ProductUncheckedUpdateWithoutColorInput>
  }

  export type ProductUpdateManyWithWhereWithoutColorInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductCreateWithoutImagesInput = {
    id?: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    cartItem?: CartItemCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateManyCartInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    role?: Role
    mobile: string
    address: string
  }

  export type UserUpdateWithoutCartInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    mobile?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput
    color?: ColorUpdateOneRequiredWithoutCartItemNestedInput
    size?: SizeUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
  }

  export type CartItemUncheckedUpdateManyWithoutCartItemInput = {
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
  }

  export type CartUpdateWithoutCartItemInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCartItemInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItemId?: CartUpdatecartItemIdInput | Enumerable<string>
    user?: UserUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutCartInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItemId?: CartUpdatecartItemIdInput | Enumerable<string>
  }

  export type BillboardCreateManyStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeCreateManyStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerCreateManyStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyStoreInput = {
    id?: string
    billboardId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyStoreInput = {
    id?: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentCreateManyStoreInput = {
    id?: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizeCreateManyStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorCreateManyStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyStoreInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateWithoutStoreInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateWithoutStoreInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateManyWithoutBillboardsInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUpdateWithoutStoreInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateWithoutStoreInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateManyWithoutTypesInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUpdateWithoutStoreInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateWithoutStoreInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyWithoutBannersInput = {
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    parent?: ParentUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutStoreInput = {
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCategoriesInput = {
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStoreInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductsInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutParentNestedInput
    type?: TypeUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentUncheckedUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateManyWithoutParentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutSizeNestedInput
    cartItem?: CartItemUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSizeNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateManyWithoutSizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutColorNestedInput
    products?: ProductUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutColorNestedInput
    products?: ProductUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateManyWithoutColorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutStoreInput = {
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStoreInput = {
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOrdersInput = {
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyBillboardInput = {
    id?: string
    storeId: string
    name: string
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutBillboardInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    parent?: ParentUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBillboardInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    storeId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ParentCreateManyTypeInput = {
    id?: string
    storeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutParentsNestedInput
    categories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutTypeInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ImageCreateManyProductInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateManyProductInput = {
    id?: string
    sizeId?: string
    colorId?: string
    quantity?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
  }

  export type ImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutImagesInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    color?: ColorUpdateOneRequiredWithoutCartItemNestedInput
    size?: SizeUpdateOneRequiredWithoutCartItemNestedInput
    Cart?: CartUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type OrderItemUpdateWithoutProductInput = {
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderItemsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManySizeInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateManySizeInput = {
    id?: string
    colorId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
  }

  export type ProductUpdateWithoutSizeInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizeInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartItemUpdateWithoutSizeInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput
    color?: ColorUpdateOneRequiredWithoutCartItemNestedInput
    Cart?: CartUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutSizeInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemCreateManyColorInput = {
    id?: string
    sizeId?: string
    quantity?: string
    productId?: string
    cartId?: CartItemCreatecartIdInput | Enumerable<string>
  }

  export type ProductCreateManyColorInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateWithoutColorInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput
    size?: SizeUpdateOneRequiredWithoutCartItemNestedInput
    Cart?: CartUpdateManyWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutColorInput = {
    sizeId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cartId?: CartItemUpdatecartIdInput | Enumerable<string>
    Cart?: CartUncheckedUpdateManyWithoutCartItemNestedInput
  }

  export type ProductUpdateWithoutColorInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorInput = {
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
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