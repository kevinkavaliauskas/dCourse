import { Buffer } from "buffer";
import { Client as ContractClient, Spec as ContractSpec, } from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk';
export * as contract from '@stellar/stellar-sdk/contract';
export * as rpc from '@stellar/stellar-sdk/rpc';
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}
export const networks = {
    testnet: {
        networkPassphrase: "Test SDF Network ; September 2015",
        contractId: "CDPP6R2ZFZH3ES5WWFI47Z5W6FU4IEBSG3RZ6U47YWZFHHTIGZUH6XRF",
    }
};
export const Errors = {};
export class Client extends ContractClient {
    options;
    constructor(options) {
        super(new ContractSpec(["AAAAAQAAAAAAAAAAAAAAB015U3RhdGUAAAAAAQAAAAAAAAAEZGF0YQAAA+wAAAATAAAD6gAAAAU=",
            "AAAAAAAAABhBZGRpbmcgVmFsdWUgdG8gRGF0YWJhc2UAAAAPYXBwZW5kX2RhdGFiYXNlAAAAAAIAAAAAAAAAB3VzZXJfaWQAAAAAEwAAAAAAAAAJY291cnNlX2lkAAAAAAAABQAAAAA=",
            "AAAAAAAAACdSZXRyaWV2ZSBjb3Vyc2VfaWRzIGZvciBhIGdpdmVuIHVzZXJfaWQAAAAAEHJldHJpZXZlX2NvdXJzZXMAAAABAAAAAAAAAAd1c2VyX2lkAAAAABMAAAABAAAD6gAAAAU=",
            "AAAAAAAAAAAAAAAIcHVyY2hhc2UAAAADAAAAAAAAAAVidXllcgAAAAAAABMAAAAAAAAACWNvdXJzZV9pZAAAAAAAAAUAAAAAAAAABXRva2VuAAAAAAAAEwAAAAA="]), options);
        this.options = options;
    }
    fromJSON = {
        append_database: (this.txFromJSON),
        retrieve_courses: (this.txFromJSON),
        purchase: (this.txFromJSON)
    };
}
