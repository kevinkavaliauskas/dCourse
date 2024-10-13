import { Buffer } from "buffer";
import { Address } from '@stellar/stellar-sdk';
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  Result,
  Spec as ContractSpec,
} from '@stellar/stellar-sdk/contract';
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk'
export * as contract from '@stellar/stellar-sdk/contract'
export * as rpc from '@stellar/stellar-sdk/rpc'

if (typeof window !== 'undefined') {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CDPP6R2ZFZH3ES5WWFI47Z5W6FU4IEBSG3RZ6U47YWZFHHTIGZUH6XRF",
  }
} as const


export interface MyState {
  data: Map<string, Array<i32>>;
}

export const Errors = {

}

export interface Client {
  /**
   * Construct and simulate a append_database transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Adding Value to Database
   */
  append_database: ({user_id, course_id}: {user_id: string, course_id: i32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a retrieve_courses transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Retrieve course_ids for a given user_id
   */
  retrieve_courses: ({user_id}: {user_id: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Array<i32>>>

  /**
   * Construct and simulate a purchase transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  purchase: ({buyer, course_id, token}: {buyer: string, course_id: i32, token: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

}
export class Client extends ContractClient {
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAQAAAAAAAAAAAAAAB015U3RhdGUAAAAAAQAAAAAAAAAEZGF0YQAAA+wAAAATAAAD6gAAAAU=",
        "AAAAAAAAABhBZGRpbmcgVmFsdWUgdG8gRGF0YWJhc2UAAAAPYXBwZW5kX2RhdGFiYXNlAAAAAAIAAAAAAAAAB3VzZXJfaWQAAAAAEwAAAAAAAAAJY291cnNlX2lkAAAAAAAABQAAAAA=",
        "AAAAAAAAACdSZXRyaWV2ZSBjb3Vyc2VfaWRzIGZvciBhIGdpdmVuIHVzZXJfaWQAAAAAEHJldHJpZXZlX2NvdXJzZXMAAAABAAAAAAAAAAd1c2VyX2lkAAAAABMAAAABAAAD6gAAAAU=",
        "AAAAAAAAAAAAAAAIcHVyY2hhc2UAAAADAAAAAAAAAAVidXllcgAAAAAAABMAAAAAAAAACWNvdXJzZV9pZAAAAAAAAAUAAAAAAAAABXRva2VuAAAAAAAAEwAAAAA=" ]),
      options
    )
  }
  public readonly fromJSON = {
    append_database: this.txFromJSON<null>,
        retrieve_courses: this.txFromJSON<Array<i32>>,
        purchase: this.txFromJSON<null>
  }
}