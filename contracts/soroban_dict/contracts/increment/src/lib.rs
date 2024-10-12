#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, log, symbol_short, Env, Symbol, Val, Map};

const DATA_KEY: Symbol = symbol_short!("DATA"); // Unique key for your map

const COUNTER: Symbol = symbol_short!("COUNTER");

#[contract]
pub struct IncrementorContract;

// Define the state of the contract
#[contracttype]
pub struct MyState {
    pub data: Map<Symbol, Val>, // Map with Symbol keys and i32 values
}

impl MyState {
    // Constructor for MyState
    pub fn new(env: &Env) -> Self {
        // Check if the map already exists in storage
        if let Some(existing_map) = env.storage().persistent().get::<_, Map<Symbol, Val>>(&DATA_KEY) {
            // If it exists, return the existing state
            Self {
                data: existing_map,
            }
        } else {
            // If it doesn't exist, create a new map and store it
            let new_map = Map::new(&env);
            env.storage().persistent().set(&DATA_KEY, &new_map);
            Self {
                data: new_map,
            }
        }
    }
}


#[contractimpl]
impl IncrementorContract {
    /// Increment an internal counter; return the new value.
    pub fn increment(env: Env, user_id: Symbol, course_id: Val) -> u32 {

        let mut state = MyState::new(&env);

        // Insert (user_id, course_id) into the map
        state.data.set(user_id.clone(), course_id);

        log!(&env, "Inserted user_id: {:?} with course_id: {:?}", user_id, course_id);

        // Optionally, you can log the insertion for debugging
        let mut count: u32 = env.storage().instance().get(&COUNTER).unwrap_or(0);

        count += 1;

        log!(&env, "count: {}", count);

        env.storage().instance().set(&COUNTER, &count);

        env.storage().instance().extend_ttl(100, 100);

        count
    }
}

mod test;