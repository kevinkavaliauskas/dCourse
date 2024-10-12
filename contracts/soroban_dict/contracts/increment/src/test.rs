#![cfg(test)]

use crate::{IncrementorContract, IncrementorContractClient};
use soroban_sdk::{Env, Symbol, Val};

#[test]
fn increment() {
    let env = Env::default();
    let contract_id = env.register_contract(None, IncrementorContract);
    let client = IncrementorContractClient::new(&env, &contract_id);
    let course_id = Val::from(1);
    let user_id: Symbol = Symbol::new(&env, "soy_luke");

    assert_eq!(client.increment(&user_id, &course_id), 1);
    assert_eq!(client.increment(&user_id, &course_id), 2);
    assert_eq!(client.increment(&user_id, &course_id), 3);
}